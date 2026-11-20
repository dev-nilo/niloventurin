import { describe, expect, it } from "vitest";
import { negotiate, wantsMarkdown } from "./negotiation";

// Test vectors from https://acceptmarkdown.com/guides/accept-parsing, plus
// the headers real browsers and agents send.
describe("negotiate", () => {
  it.each([
    ["text/markdown", "markdown"],
    ["text/markdown, text/html;q=0.8", "markdown"],
    ["text/html", "html"],
    ["text/markdown;q=0, text/html", "html"],
    ["*/*", "html"],
    ["text/markdown, */*", "markdown"],
    ["text/markdown;q=0.5, text/html;q=0.9", "html"],
    ["text/html;q=0.5, text/markdown;q=0.9", "markdown"],
    ["text/plain, text/markdown;q=0.9, */*;q=0.1", "markdown"],
    ["TEXT/MARKDOWN", "markdown"],
    // Equal preference keeps the default.
    ["text/html, text/markdown", "html"],
    ["text/*", "html"],
  ])("%s -> %s", (accept, expected) => {
    expect(negotiate(accept)).toBe(expected);
  });

  it("serves HTML when Accept is missing or empty", () => {
    expect(negotiate(undefined)).toBe("html");
    expect(negotiate(null)).toBe("html");
    expect(negotiate("")).toBe("html");
  });

  it("serves HTML to a real Chrome header", () => {
    const chrome =
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7";
    expect(negotiate(chrome)).toBe("html");
  });

  it("reports when neither type is acceptable", () => {
    expect(negotiate("application/pdf")).toBeNull();
    expect(negotiate("text/markdown;q=0")).toBeNull();
    expect(wantsMarkdown("text/markdown;q=0")).toBe(false);
  });
});
