import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, THEME_STORAGE_KEY, type Theme } from "./theme-context";

function getInitialTheme(): Theme {
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "modern" || stored === "retro" ? stored : "retro";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // localStorage unavailable — theme still works for this session
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "retro" ? "modern" : "retro"));

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}
