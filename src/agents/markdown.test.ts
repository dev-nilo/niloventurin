import { describe, expect, it } from "vitest";
import { markdownFor, notFoundMarkdown } from "./markdown";
import { PAGE_PATHS, SITE_URL } from "../site/site";

const headingLevels = (markdown: string) =>
  [...markdown.matchAll(/^(#{1,6}) /gm)].map((match) => match[1].length);

describe("markdownFor", () => {
  it.each(PAGE_PATHS)("renders %s with one H1 and no skipped heading levels", (path) => {
    const markdown = markdownFor(path)!;
    expect(markdown.length).toBeGreaterThan(500);
    const levels = headingLevels(markdown);
    expect(levels[0]).toBe(1);
    expect(levels.filter((level) => level === 1)).toHaveLength(1);
    levels.forEach((level, i) => i > 0 && expect(level - levels[i - 1]).toBeLessThanOrEqual(1));
  });

  it("gives / the English site with a link to the Portuguese one", () => {
    const markdown = markdownFor("/")!;
    expect(markdown).toContain("Full-Stack Software Engineer");
    expect(markdown).toContain(`Português: <${SITE_URL}/pt>`);
  });

  it("writes each language in its own language", () => {
    expect(markdownFor("/pt")).toContain("## Experiência");
    expect(markdownFor("/en")).toContain("## Experience");
    expect(markdownFor("/pt/privacy")).toContain("LGPD");
  });

  it("includes services with prices and the contact email", () => {
    const markdown = markdownFor("/en")!;
    expect(markdown).toContain("US$ 600 – 1,200");
    expect(markdown).toContain("mailto:venturin.nilo@gmail.com");
  });

  it.each(["/de", "/en/blog", "/en/about/extra", "/__probe", "/about"])("has no page at %s", (path) => {
    expect(markdownFor(path)).toBeNull();
  });
});

describe("notFoundMarkdown", () => {
  it("explains the error and links to the sitemap and llms.txt", () => {
    const markdown = notFoundMarkdown("/missing");
    expect(markdown).toMatch(/^# Page not found\n/);
    expect(markdown).toContain("`/missing`");
    expect(markdown).toContain(`(${SITE_URL}/sitemap.xml)`);
    expect(markdown).toContain(`(${SITE_URL}/llms.txt)`);
  });

  it("can't be broken out of its code span", () => {
    expect(notFoundMarkdown("/a`b\nc")).toContain("`/abc`");
  });
});
