"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    useCallback,
    ReactNode
} from "react";
import { applyTheme, Theme, THEME_STORAGE_KEY } from "../theme/theme";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const currentTheme = (): Theme =>
    document.documentElement.classList.contains("dark") ? "dark" : "light";

// The <html> class is set before paint by themeInitScript; this provider only
// mirrors it into React and handles toggling, so children render on the server.
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        setTheme(currentTheme());
    }, []);

    const toggleTheme = useCallback(() => {
        const next: Theme = currentTheme() === "dark" ? "light" : "dark";
        applyTheme(document.documentElement, next);
        try {
            localStorage.setItem(THEME_STORAGE_KEY, next);
        } catch {
            // storage unavailable (private mode); the toggle still applies
        }
        setTheme(next);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
