import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { LOCALES } from "../i18n/locales";
import { SERVICES, Services } from "./services";

describe.each(LOCALES)("SERVICES.%s", (locale) => {
  const services = SERVICES[locale];

  it("ships the PDF the download button points to", () => {
    expect(existsSync(join(process.cwd(), "public", services.pdfPath))).toBe(true);
  });

  it("has unique keys for rendered lists", () => {
    const unique = (xs: string[]) => new Set(xs).size === xs.length;
    expect(unique(services.items.map((s) => s.name))).toBe(true);
    expect(unique(services.maintenance.map((m) => m.name))).toBe(true);
  });
});

describe("SERVICES translations", () => {
  // Prices are the same numbers in both languages, only formatted differently.
  it("quote the same amounts in every language", () => {
    const amounts = (s: Services) =>
      [...s.items, ...s.maintenance].map((x) => x.price.replace(/\D/g, ""));
    expect(amounts(SERVICES.pt)).toEqual(amounts(SERVICES.en));
  });
});
