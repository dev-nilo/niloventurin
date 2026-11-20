import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, isLocale, type Locale } from "./i18n/locales";
import { wantsMarkdown } from "./agents/negotiation";
import { markdownFor, notFoundMarkdown } from "./agents/markdown";
import { absoluteUrl, isSubpage, localePath } from "./site/site";

const savedLocale = (request: NextRequest): Locale | undefined => {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  return isLocale(saved) ? saved : undefined;
};

// Files (sitemap.xml, llms.txt, cv.pdf, og.png...) serve themselves whatever
// the Accept header says; only page paths have a Markdown version.
const isFilePath = (pathname: string) => /\.[^/]+$/.test(pathname);

const markdownResponse = (pathname: string) => {
  const markdown = markdownFor(pathname);
  const headers = new Headers({
    "Content-Type": "text/markdown; charset=utf-8",
    // The same URL answers with HTML or Markdown, so caches must key on Accept.
    Vary: "Accept",
    "Cache-Control": "public, max-age=0, must-revalidate",
  });
  if (markdown === null) return new Response(notFoundMarkdown(pathname), { status: 404, headers });
  headers.set("Link", `<${absoluteUrl(pathname)}>; rel="canonical"`);
  return new Response(markdown, { status: 200, headers });
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /about, /contact and /privacy exist once per language; send visitors
  // to their saved language, or English.
  const bare = pathname.slice(1);
  if (isSubpage(bare)) {
    return NextResponse.redirect(new URL(localePath(savedLocale(request) ?? "en", bare), request.url));
  }

  // Agents that prefer Markdown get it from the same URL as the HTML page,
  // and a Markdown 404 for paths that aren't pages.
  const readsOnly = request.method === "GET" || request.method === "HEAD";
  if (readsOnly && !isFilePath(pathname) && wantsMarkdown(request.headers.get("accept"))) {
    return markdownResponse(pathname);
  }

  // "/" is the language picker. Visitors who already picked a language (saved
  // by LocaleLink) go straight to it.
  if (pathname === "/") {
    const saved = savedLocale(request);
    if (saved) return NextResponse.redirect(new URL(`/${saved}`, request.url));
  }
}

// The proxy only runs where it can do something: "/", the bare subpage
// paths, and requests whose Accept header mentions Markdown (the q-values are
// checked in wantsMarkdown). Build output under /_next never needs it.
export const config = {
  matcher: [
    "/",
    "/about",
    "/contact",
    "/privacy",
    {
      source: "/((?!_next/).*)",
      has: [{ type: "header", key: "accept", value: ".*text/markdown.*" }],
    },
  ],
};
