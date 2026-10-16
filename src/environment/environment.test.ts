import { describe, expect, it } from "vitest";
import { environmentLabel, isIndexable, resolveEnvironment } from "./environment";

describe("resolveEnvironment", () => {
    it("maps the Vercel production deploy to production", () => {
        expect(resolveEnvironment("production", "main")).toBe("production");
    });

    it("treats the homolog branch preview as staging", () => {
        expect(resolveEnvironment("preview", "homolog")).toBe("staging");
    });

    it("treats any other branch preview as a plain preview", () => {
        expect(resolveEnvironment("preview", "feat/something")).toBe("preview");
    });

    it("falls back to local outside Vercel", () => {
        expect(resolveEnvironment(undefined, undefined)).toBe("local");
        expect(resolveEnvironment("development", "homolog")).toBe("local");
    });
});

describe("isIndexable", () => {
    it("only lets search engines index production", () => {
        expect(isIndexable("production")).toBe(true);
        expect(isIndexable("staging")).toBe(false);
        expect(isIndexable("preview")).toBe(false);
    });
});

describe("environmentLabel", () => {
    it("labels non-production deploys only", () => {
        expect(environmentLabel("staging")).toBe("Homologação");
        expect(environmentLabel("preview")).toBe("Preview");
        expect(environmentLabel("production")).toBeNull();
        expect(environmentLabel("local")).toBeNull();
    });
});
