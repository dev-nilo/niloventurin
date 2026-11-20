// The site lives at /pt and /en; "/" is the language picker. Both the picker
// and the top bar switch save the choice in LOCALE_COOKIE, and proxy.ts sends
// returning visitors from "/" straight to it.

export const LOCALES = ["pt", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const isLocale = (value: string | undefined): value is Locale =>
  LOCALES.includes(value as Locale);

// Value for <html lang> and hreflang.
export const HTML_LANG: Record<Locale, string> = { pt: "pt-BR", en: "en" };

export const LOCALE_COOKIE = "lang";

const ONE_YEAR = 60 * 60 * 24 * 365;

export const localeCookie = (locale: Locale) =>
  `${LOCALE_COOKIE}=${locale}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
