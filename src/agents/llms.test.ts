import { describe, expect, it } from "vitest";
import { llmsTxt } from "./llms";
import { SITE_URL } from "../site/site";

// Structure from https://llmstxt.org: H1, blockquote, heading-free text,
// then H2 sections made only of "- [name](url)" or "- [name](url): notes".
describe("llmsTxt", () => {
  const text = llmsTxt();
  const lines = text.split("\n");

  it("starts with the site name as H1, then a blockquote summary", () => {
    expect(lines[0]).toBe("# Nilo Venturin Neto");
    expect(lines[1]).toBe("");
    expect(lines[2]).toMatch(/^> \S/);
  });

  it("has no headings between the summary and the first H2", () => {
    const firstH2 = lines.findIndex((line) => line.startsWith("## "));
    expect(firstH2).toBeGreaterThan(3);
    expect(lines.slice(1, firstH2).some((line) => /^#/.test(line))).toBe(false);
  });

  it("only has link lists under the H2 sections", () => {
    const firstH2 = lines.findIndex((line) => line.startsWith("## "));
    for (const line of lines.slice(firstH2)) {
      if (line === "" || line.startsWith("## ")) continue;
      expect(line).toMatch(/^- \[[^\]]+\]\(https:\/\/[^)\s]+\)(: .+)?$/);
    }
  });

  it("ends with the Optional section", () => {
    const h2s = lines.filter((line) => line.startsWith("## "));
    expect(h2s.at(-1)).toBe("## Optional");
  });

  it("tells agents when to use the site and how to act on it", () => {
    expect(text).toContain("**When to use this site**");
    expect(text).toContain("**When not to use it**");
    expect(text).toContain("venturin.nilo@gmail.com");
    expect(text).toContain("Accept: text/markdown");
  });

  it("links to pages on this site with absolute URLs", () => {
    expect(text).toContain(`(${SITE_URL}/en)`);
    expect(text).toContain(`(${SITE_URL}/en/contact)`);
    expect(text).toContain(`(${SITE_URL}/sitemap.xml)`);
  });
});
