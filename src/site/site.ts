// The site's public address and its list of pages. Metadata, the sitemap,
// llms.txt, JSON-LD and the Markdown versions of pages all read from here,
// so a new page is added once, in SUBPAGES.

import { LOCALES, type Locale } from "../i18n/locales";

// Production's domain, also on staging and locally: canonical links,
// sitemap entries and structured data always name the real site.
const PRODUCTION_HOST = process.env.VERCEL_PROJECT_PRODUCTION_URL || "niloventurin.vercel.app";

export const SITE_URL = `https://${PRODUCTION_HOST}`;

// "/" becomes the bare origin, the same form Next writes in canonical links.
export const absoluteUrl = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

// Pages under each language besides its home page.
export const SUBPAGES = ["about", "contact", "privacy"] as const;

export type Subpage = (typeof SUBPAGES)[number];

export const isSubpage = (value: string | undefined): value is Subpage =>
  SUBPAGES.includes(value as Subpage);

// "/pt", "/en/contact", ...
export const localePath = (locale: Locale, page?: Subpage) => (page ? `/${locale}/${page}` : `/${locale}`);

// Every indexable page: the language picker, then each language's pages.
export const PAGE_PATHS: string[] = [
  "/",
  ...LOCALES.flatMap((locale) => [localePath(locale), ...SUBPAGES.map((page) => localePath(locale, page))]),
];

// The link preview image every page shares (app/og.png/route.tsx).
export const OG_IMAGE = { url: "/og.png", width: 1200, height: 630 };
