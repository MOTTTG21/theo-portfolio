import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "retro" | "modern";

type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "theo-portfolio-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "retro";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "modern" || stored === "retro" ? stored : "retro";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // localStorage unavailable — theme still works for this session
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "retro" ? "modern" : "retro"));

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
