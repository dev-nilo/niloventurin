import { describe, expect, it } from "vitest";
import { robotsFor, sitemapEntries } from "./crawlers";
import { PAGE_PATHS, SITE_URL } from "./site";

describe("sitemapEntries", () => {
  const date = new Date("2026-11-03T00:00:00Z");
  const entries = sitemapEntries(date);

  it("lists every page with an absolute URL and lastmod", () => {
    expect(entries.map((e) => e.url)).toEqual(PAGE_PATHS.map((p) => (p === "/" ? SITE_URL : `${SITE_URL}${p}`)));
    expect(entries.map((e) => e.url)).toEqual(
      expect.arrayContaining([`${SITE_URL}/en/about`, `${SITE_URL}/pt/contact`, `${SITE_URL}/en/privacy`]),
    );
    for (const entry of entries) expect(entry.lastModified).toBe(date);
  });

  it("links the language versions of each page", () => {
    const about = entries.find((e) => e.url === `${SITE_URL}/en/about`)!;
    expect(about.alternates?.languages).toEqual({ "pt-BR": `${SITE_URL}/pt/about`, en: `${SITE_URL}/en/about` });
    const home = entries.find((e) => e.url === `${SITE_URL}/pt`)!;
    expect(home.alternates?.languages).toMatchObject({ "x-default": SITE_URL });
  });
});

describe("robotsFor", () => {
  it("lets every crawler into production and points at the sitemap", () => {
    expect(robotsFor("production")).toEqual({
      rules: { userAgent: "*", allow: "/" },
      sitemap: `${SITE_URL}/sitemap.xml`,
    });
  });

  it("keeps crawlers out of staging and previews", () => {
    expect(robotsFor("staging").rules).toEqual({ userAgent: "*", disallow: "/" });
    expect(robotsFor("preview").rules).toEqual({ userAgent: "*", disallow: "/" });
  });
});
