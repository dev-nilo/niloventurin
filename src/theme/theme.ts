export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

// A saved choice wins; otherwise follow the system preference.
export function resolveTheme(stored: string | null, systemPrefersDark: boolean): Theme {
    if (stored === "light" || stored === "dark") return stored;
    return systemPrefersDark ? "dark" : "light";
}

export function applyTheme(root: { classList: DOMTokenList }, theme: Theme) {
    root.classList.remove("light", "dark");
    root.classList.add(theme);
}

// Runs in <head> before first paint so the server-rendered page shows in the
// right theme without waiting for React. Built from resolveTheme so the rule
// lives in one place.
export const themeInitScript = `(function(){try{var t=(${resolveTheme.toString()})(localStorage.getItem(${JSON.stringify(
    THEME_STORAGE_KEY,
)}),matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.add(t);}catch(e){}})();`;
