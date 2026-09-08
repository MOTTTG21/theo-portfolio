import { useTheme } from "../theme/useTheme";
import "./ThemeToggle.css";

const currentYear = new Date().getFullYear();

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isRetro = theme === "retro";

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={isRetro ? `Switch to ${currentYear} mode` : "Switch to 1996 mode"}
      title={isRetro ? `Switch to ${currentYear} mode` : "Switch to 1996 mode"}
    >
      <span className={`theme-toggle-label ${isRetro ? "" : "dim"}`}>1996</span>
      <span className="theme-toggle-track">
        <span className={`theme-toggle-thumb ${isRetro ? "" : "right"}`} />
      </span>
      <span className={`theme-toggle-label ${isRetro ? "dim" : ""}`}>{currentYear}</span>
    </button>
  );
}
