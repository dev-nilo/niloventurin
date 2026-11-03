// <head> metadata for every page. Next replaces nested objects like
// openGraph instead of merging them, so each page builds its full metadata
// here rather than layering it over a layout's.

import type { Metadata } from "next";
import { PROFILE } from "../content/profile";
import { PAGES_TEXT } from "../content/pages";
import { ENVIRONMENT, isIndexable } from "../environment/environment";
import { HTML_LANG, LOCALES, type Locale } from "../i18n/locales";
import { OG_IMAGE, SITE_URL, localePath, type Subpage } from "./site";

const ogLocale = (locale: Locale) => HTML_LANG[locale].replace("-", "_");

// hreflang links between the language versions of a page. The picker at "/"
// is the x-default of the home pages; subpages have no picker.
const languages = (page?: Subpage) => ({
  ...Object.fromEntries(LOCALES.map((l) => [HTML_LANG[l], localePath(l, page)])),
  ...(page ? {} : { "x-default": "/" }),
});

export const pageMetadata = ({
  title,
  description,
  locale,
  page,
  keywords,
}: {
  title: string;
  description: string;
  // Absent for "/", the language picker, which is in both languages.
  locale?: Locale;
  page?: Subpage;
  keywords: string[];
}): Metadata => {
  const path = locale ? localePath(locale, page) : "/";
  const primary = locale ?? "pt";
  return {
    // Canonical, hreflang and og:url/og:image must be absolute; Next fills in
    // the domain from here. It is production's even on staging, which isn't
    // indexed anyway.
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    robots: isIndexable(ENVIRONMENT) ? undefined : { index: false, follow: false },
    alternates: { canonical: path, languages: languages(page) },
    openGraph: {
      // A language's home page is the profile of a person; the picker and
      // the subpages are ordinary pages of the site.
      type: locale && !page ? "profile" : "website",
      url: path,
      title,
      description,
      siteName: PROFILE[primary].name,
      locale: ogLocale(primary),
      alternateLocale: LOCALES.filter((l) => l !== primary).map(ogLocale),
      images: [{ ...OG_IMAGE, alt: `${PROFILE[primary].name} · ${PROFILE[primary].role}` }],
    },
    twitter: { card: "summary_large_image" },
  };
};

// "/" serves both languages, so its keywords are the English ones (led by
// the main term) followed by the Portuguese ones.
export const PICKER_KEYWORDS = [...new Set([...PROFILE.en.keywords, ...PROFILE.pt.keywords])];

export const subpageMetadata = (locale: Locale, page: Subpage): Metadata => {
  const { title, description } = PAGES_TEXT[locale].titles[page];
  return pageMetadata({
    title: `${title} · ${PROFILE[locale].name}`,
    description,
    locale,
    page,
    keywords: PROFILE[locale].keywords,
  });
};
