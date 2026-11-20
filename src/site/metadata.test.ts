import { describe, expect, it } from "vitest";
import { PICKER_KEYWORDS, pageMetadata, subpageMetadata } from "./metadata";
import { SITE_URL } from "./site";

describe("pageMetadata", () => {
  const picker = pageMetadata({ title: "t", description: "d", keywords: PICKER_KEYWORDS });

  it("gives the picker a canonical URL, og:type and og:image", () => {
    expect(picker.metadataBase?.toString()).toBe(`${SITE_URL}/`);
    expect(picker.alternates?.canonical).toBe("/");
    expect(picker.alternates?.languages).toEqual({ "pt-BR": "/pt", en: "/en", "x-default": "/" });
    expect(picker.openGraph).toMatchObject({ type: "website", url: "/", locale: "pt_BR" });
    expect(picker.openGraph?.images).toEqual([expect.objectContaining({ url: "/og.png", width: 1200, height: 630 })]);
  });

  it("leads the picker's keywords with the main term", () => {
    expect(PICKER_KEYWORDS[0]).toBe("full-stack software engineer");
    expect(PICKER_KEYWORDS).toContain("engenheiro de software full-stack");
    expect(new Set(PICKER_KEYWORDS).size).toBe(PICKER_KEYWORDS.length);
  });

  it("marks a language's home page as a profile", () => {
    const en = pageMetadata({ title: "t", description: "d", locale: "en", keywords: [] });
    expect(en.alternates?.canonical).toBe("/en");
    expect(en.openGraph).toMatchObject({ type: "profile", locale: "en", alternateLocale: ["pt_BR"] });
  });
});

describe("subpageMetadata", () => {
  it("points canonical and hreflang at the subpage in each language", () => {
    const meta = subpageMetadata("pt", "privacy");
    expect(meta.title).toBe("Privacidade · Nilo Venturin Neto");
    expect(meta.alternates?.canonical).toBe("/pt/privacy");
    expect(meta.alternates?.languages).toEqual({ "pt-BR": "/pt/privacy", en: "/en/privacy" });
    expect(meta.openGraph).toMatchObject({ type: "website", url: "/pt/privacy" });
  });
});
