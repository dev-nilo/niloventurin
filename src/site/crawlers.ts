// What sitemap.ts and robots.ts serve, as plain functions so they can be
// tested for every environment.

import type { MetadataRoute } from "next";
import { HTML_LANG, LOCALES, type Locale } from "../i18n/locales";
import { isIndexable, type DeployEnvironment } from "../environment/environment";
import { PAGE_PATHS, SUBPAGES, absoluteUrl, localePath, type Subpage } from "./site";

// hreflang links between the language versions of one page; the picker at
// "/" is the x-default of the home pages.
const languageAlternates = (page?: Subpage) => ({
  ...Object.fromEntries(LOCALES.map((locale: Locale) => [HTML_LANG[locale], absoluteUrl(localePath(locale, page))])),
  ...(page ? {} : { "x-default": absoluteUrl("/") }),
});

const pageOf = (path: string): Subpage | undefined => SUBPAGES.find((page) => path.endsWith(`/${page}`));

// lastModified is the deploy's build time: every deploy rebuilds every page
// from the content modules.
export const sitemapEntries = (lastModified: Date): MetadataRoute.Sitemap =>
  PAGE_PATHS.map((path) => {
    const page = pageOf(path);
    return {
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "monthly",
      priority: path === "/" || !page ? 1 : page === "privacy" ? 0.3 : 0.7,
      alternates: { languages: languageAlternates(page) },
    };
  });

// Staging and previews also send noindex; robots keeps crawlers out of them
// entirely. Production welcomes every crawler, AI agents included.
export const robotsFor = (env: DeployEnvironment): MetadataRoute.Robots =>
  isIndexable(env)
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: absoluteUrl("/sitemap.xml") }
    : { rules: { userAgent: "*", disallow: "/" } };
