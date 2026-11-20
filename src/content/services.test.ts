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
  it("offer the same number of services and plans in every language", () => {
    const shape = (s: Services) => [s.items.length, s.maintenance.length];
    expect(shape(SERVICES.pt)).toEqual(shape(SERVICES.en));
  });

  it("each language has its own currency and price table", () => {
    expect(SERVICES.en.currency).toBe("USD");
    expect(SERVICES.pt.currency).toBe("BRL");
    expect(SERVICES.en.pdfPath).toBe("/services-pricing.pdf");
    expect(SERVICES.pt.pdfPath).toBe("/services-pricing-pt.pdf");
  });
});

// Mirrors public/services-pricing-pt.pdf; a new table means updating both.
describe("SERVICES.pt prices", () => {
  it("match the price table", () => {
    expect(SERVICES.pt.items.map((item) => [item.name, item.price, item.timeline])).toEqual([
      ["Landing page", "R$ 1.500 – 3.000", "1 a 2 semanas"],
      ["Site institucional", "R$ 4.000 – 8.000", "4 a 6 semanas"],
      ["Site com painel", "R$ 8.000 – 15.000", "6 a 10 semanas"],
      ["Sistema sob medida", "Sob orçamento", "Definido no escopo"],
    ]);
    expect(SERVICES.pt.maintenance.map((plan) => plan.price)).toEqual(["R$ 150/mês", "R$ 400/mês"]);
  });

  it("never show dollars in Portuguese", () => {
    expect(JSON.stringify(SERVICES.pt)).not.toMatch(/US\$|dólar/);
  });
});
