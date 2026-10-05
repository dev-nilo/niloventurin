import { describe, expect, it } from "vitest";
import { resolveTheme, themeInitScript, THEME_STORAGE_KEY } from "./theme";

describe("resolveTheme", () => {
    it("prefers a saved choice over the system", () => {
        expect(resolveTheme("light", true)).toBe("light");
        expect(resolveTheme("dark", false)).toBe("dark");
    });

    it("falls back to the system preference", () => {
        expect(resolveTheme(null, true)).toBe("dark");
        expect(resolveTheme(null, false)).toBe("light");
        expect(resolveTheme("garbage", true)).toBe("dark");
    });
});

describe("themeInitScript", () => {
    const run = (stored: string | null, prefersDark: boolean) => {
        const classes = new Set<string>();
        const document = { documentElement: { classList: { add: (c: string) => classes.add(c) } } };
        const localStorage = {
            getItem: (key: string) => (key === THEME_STORAGE_KEY ? stored : null),
        };
        const matchMedia = () => ({ matches: prefersDark });
        new Function("document", "localStorage", "matchMedia", themeInitScript)(
            document,
            localStorage,
            matchMedia,
        );
        return [...classes];
    };

    it("sets the resolved theme class on <html>", () => {
        expect(run(null, true)).toEqual(["dark"]);
        expect(run("light", true)).toEqual(["light"]);
    });
});
