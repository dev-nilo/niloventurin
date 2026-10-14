import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { SERVICES } from "./services";

describe("SERVICES", () => {
  it("ships the PDF the download button points to", () => {
    expect(existsSync(join(process.cwd(), "public", SERVICES.pdfPath))).toBe(true);
  });

  it("has unique keys for rendered lists", () => {
    const unique = (xs: string[]) => new Set(xs).size === xs.length;
    expect(unique(SERVICES.items.map((s) => s.name))).toBe(true);
    expect(unique(SERVICES.maintenance.map((m) => m.name))).toBe(true);
  });
});
