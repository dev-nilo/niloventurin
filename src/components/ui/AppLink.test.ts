import { describe, expect, it } from "vitest";
import { isExternal } from "./AppLink";

describe("isExternal", () => {
  it("treats http(s) URLs as external", () => {
    expect(isExternal("https://github.com/dev-nilo")).toBe(true);
    expect(isExternal("http://example.com")).toBe(true);
  });

  it("keeps site paths and mailto in place", () => {
    expect(isExternal("/cv.pdf")).toBe(false);
    expect(isExternal("mailto:someone@example.com")).toBe(false);
    expect(isExternal("#contact")).toBe(false);
  });
});
