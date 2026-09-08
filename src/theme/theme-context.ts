import { createContext } from "react";

export type Theme = "retro" | "modern";

export type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export const THEME_STORAGE_KEY = "theo-portfolio-theme";
