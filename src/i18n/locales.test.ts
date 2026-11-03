import { describe, expect, it } from "vitest";
import { isLocale, localeCookie } from "./locales";

describe("isLocale", () => {
  it("accepts only the supported locales", () => {
    expect(isLocale("pt")).toBe(true);
    expect(isLocale("en")).toBe(true);
    expect(isLocale("pt-BR")).toBe(false);
    expect(isLocale("")).toBe(false);
    expect(isLocale(undefined)).toBe(false);
  });
});

describe("localeCookie", () => {
  it("is site-wide so the proxy on / can read it", () => {
    expect(localeCookie("pt")).toMatch(/^lang=pt; path=\/;/);
  });
});
