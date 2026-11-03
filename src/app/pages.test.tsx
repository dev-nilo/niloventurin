import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import LanguagePicker from "./(entry)/page";
import AboutPage from "./[lang]/about/page";
import ContactPage from "./[lang]/contact/page";
import PrivacyPage from "./[lang]/privacy/page";
import { LOCALES } from "../i18n/locales";

// What a crawler that doesn't run JavaScript reads: the server HTML with
// scripts and tags stripped.
const visibleText = (html: string) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const headingLevels = (html: string) => [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));

const expectReadable = (html: string) => {
  expect(visibleText(html).length).toBeGreaterThanOrEqual(500);
  const levels = headingLevels(html);
  expect(levels.filter((l) => l === 1)).toHaveLength(1);
  expect(levels[0]).toBe(1);
  levels.forEach((level, i) => i > 0 && expect(level - levels[i - 1]).toBeLessThanOrEqual(1));
};

describe("language picker", () => {
  const html = renderToStaticMarkup(<LanguagePicker />);

  it("has at least 500 characters of text and one H1 without JavaScript", () => {
    expectReadable(html);
  });

  it("introduces the site in both languages", () => {
    const text = visibleText(html);
    expect(text).toContain("Full-Stack Software Engineer");
    expect(text).toContain("Engenheiro de Software Full-Stack");
    expect(html).toContain('lang="en"');
  });

  it("embeds JSON-LD", () => {
    expect(html).toContain('<script type="application/ld+json">');
    expect(html).toContain('"@type":"Person"');
  });
});

const SUBPAGES = { about: AboutPage, contact: ContactPage, privacy: PrivacyPage };

describe.each(LOCALES)("subpages in %s", (lang) => {
  it.each(Object.entries(SUBPAGES))("%s is a real page with 500+ characters", async (_, Page) => {
    const html = renderToStaticMarkup(await Page({ params: Promise.resolve({ lang }) } as never));
    expectReadable(html);
    expect(html).toContain('<script type="application/ld+json">');
    expect(html).toContain(`href="/${lang}/privacy"`);
  });
});
