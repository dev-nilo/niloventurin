// schema.org structured data (JSON-LD) describing who runs the site and what
// is on offer. Pages render it with <JsonLd>. All values come from the
// content modules.

import { PROFILE } from "../content/profile";
import { SERVICES } from "../content/services";
import { PAGES_TEXT } from "../content/pages";
import { HTML_LANG, LOCALES, type Locale } from "../i18n/locales";
import { OG_IMAGE, SITE_URL, absoluteUrl, localePath, type Subpage } from "../site/site";

type Node = Record<string, unknown>;

const PERSON_ID = `${SITE_URL}/#person`;
const SERVICE_ID = `${SITE_URL}/#freelance`;
const WEBSITE_ID = `${SITE_URL}/#website`;

// Only the city is public; there is no street address or phone.
const ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Vitória",
  addressRegion: "ES",
  addressCountry: "BR",
};

// "US$ 600 – 1,200" / "US$ 1.500 – 3.000" -> [600, 1200]; null for
// "Custom quote" and other prices that aren't a range.
export const parsePriceRange = (price: string): [number, number] | null => {
  const match = price.match(/^US\$\s*([\d.,]+)\s*–\s*([\d.,]+)$/);
  if (!match) return null;
  const toNumber = (s: string) => Number(s.replace(/[.,]/g, ""));
  return [toNumber(match[1]), toNumber(match[2])];
};

const person = (locale: Locale): Node => {
  const profile = PROFILE[locale];
  const current = profile.experience.filter((job) => /Present|atual/.test(job.period));
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: profile.name,
    url: absoluteUrl(localePath(locale)),
    image: absoluteUrl(OG_IMAGE.url),
    jobTitle: profile.role,
    description: profile.metaDescription,
    email: `mailto:${profile.contact.email}`,
    address: ADDRESS,
    sameAs: [profile.contact.github, profile.contact.linkedin],
    knowsAbout: profile.keywords,
    knowsLanguage: LOCALES.map((l) => HTML_LANG[l]),
    worksFor: current.map((job) => ({ "@type": "Organization", name: job.company })),
  };
};

const CATALOG_NAME: Record<Locale, string> = { pt: "Serviços web", en: "Web development services" };

const freelanceService = (locale: Locale): Node => {
  const profile = PROFILE[locale];
  const services = SERVICES[locale];
  return {
    "@type": "ProfessionalService",
    "@id": SERVICE_ID,
    name: profile.name,
    description: services.intro,
    url: `${absoluteUrl(localePath(locale))}#services`,
    image: absoluteUrl(OG_IMAGE.url),
    founder: { "@id": PERSON_ID },
    email: profile.contact.email,
    address: ADDRESS,
    areaServed: "Worldwide",
    currenciesAccepted: "USD",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: profile.contact.email,
      url: absoluteUrl(localePath(locale, "contact")),
      availableLanguage: ["Portuguese", "English"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: CATALOG_NAME[locale],
      itemListElement: services.items.map((item) => {
        const range = parsePriceRange(item.price);
        return {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item.name, description: item.description },
          description: `${item.price} · ${item.timeline}`,
          ...(range && {
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "USD",
              minPrice: range[0],
              maxPrice: range[1],
            },
          }),
        };
      }),
    },
  };
};

const website = (locale: Locale): Node => ({
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: absoluteUrl("/"),
  name: PROFILE[locale].name,
  inLanguage: LOCALES.map((l) => HTML_LANG[l]),
  author: { "@id": PERSON_ID },
});

const PAGE_TYPE: Record<Subpage, string> = { about: "AboutPage", contact: "ContactPage", privacy: "WebPage" };

const webPage = (locale: Locale, page: Subpage): Node => ({
  "@type": PAGE_TYPE[page],
  url: absoluteUrl(localePath(locale, page)),
  name: PAGES_TEXT[locale].titles[page].title,
  description: PAGES_TEXT[locale].titles[page].description,
  inLanguage: HTML_LANG[locale],
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": PERSON_ID },
});

// The graph for a home page ("/", "/pt", "/en"), or for a subpage when
// `page` is given.
export const identityGraph = (locale: Locale, page?: Subpage) => ({
  "@context": "https://schema.org",
  "@graph": [person(locale), freelanceService(locale), website(locale), ...(page ? [webPage(locale, page)] : [])],
});

// JSON.stringify doesn't escape "<", so a value containing "</script>"
// could end the tag early; < keeps it inert (Next's JSON-LD guide).
export const serializeJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
