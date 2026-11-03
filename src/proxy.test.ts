import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { proxy } from "./proxy";
import { SITE_URL } from "./site/site";

const ORIGIN = "https://niloventurin.vercel.app";

const request = (path: string, headers: Record<string, string> = {}, method = "GET") =>
  new NextRequest(new URL(path, ORIGIN), { headers, method });

const MARKDOWN = { accept: "text/markdown" };
const CHROME = { accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" };

describe("proxy: Markdown negotiation", () => {
  it.each(["/", "/pt", "/en", "/en/about", "/pt/contact", "/en/privacy"])(
    "answers %s with Markdown and Vary: Accept",
    async (path) => {
      const response = proxy(request(path, MARKDOWN))!;
      expect(response.status).toBe(200);
      expect(response.headers.get("content-type")).toBe("text/markdown; charset=utf-8");
      expect(response.headers.get("vary")).toBe("Accept");
      expect(response.headers.get("link")).toBe(`<${SITE_URL}${path === "/" ? "" : path}>; rel="canonical"`);
      expect(await response.text()).toMatch(/^# /);
    },
  );

  it("answers unknown paths with a Markdown 404", async () => {
    const response = proxy(request("/__ora-404-probe-fwoh4t6e", MARKDOWN))!;
    expect(response.status).toBe(404);
    expect(response.headers.get("content-type")).toBe("text/markdown; charset=utf-8");
    expect(response.headers.get("vary")).toBe("Accept");
    const body = await response.text();
    expect(body).toContain("# Page not found");
    expect(body).toContain("/llms.txt");
  });

  it("leaves browsers and other clients to the HTML pages", () => {
    expect(proxy(request("/", CHROME))).toBeUndefined();
    expect(proxy(request("/en", CHROME))).toBeUndefined();
    expect(proxy(request("/en", {}))).toBeUndefined();
    expect(proxy(request("/en", { accept: "text/markdown;q=0, text/html" }))).toBeUndefined();
  });

  it("leaves files alone whatever Accept says", () => {
    for (const path of ["/llms.txt", "/sitemap.xml", "/robots.txt", "/cv.pdf", "/og.png"]) {
      expect(proxy(request(path, MARKDOWN))).toBeUndefined();
    }
  });

  it("only answers reads", () => {
    expect(proxy(request("/en", MARKDOWN, "POST"))).toBeUndefined();
  });
});

describe("proxy: redirects", () => {
  it("sends returning visitors from / to their saved language", () => {
    const response = proxy(request("/", { cookie: "lang=pt" }))!;
    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe(`${ORIGIN}/pt`);
  });

  it("shows the picker to first-time visitors", () => {
    expect(proxy(request("/"))).toBeUndefined();
    expect(proxy(request("/", { cookie: "lang=fr" }))).toBeUndefined();
  });

  it.each(["about", "contact", "privacy"])("sends /%s to the saved language, or English", (page) => {
    expect(proxy(request(`/${page}`))!.headers.get("location")).toBe(`${ORIGIN}/en/${page}`);
    expect(proxy(request(`/${page}`, { cookie: "lang=pt" }))!.headers.get("location")).toBe(`${ORIGIN}/pt/${page}`);
    expect(proxy(request(`/${page}`, MARKDOWN))!.status).toBe(307);
  });
});
