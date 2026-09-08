import { useTheme } from "../theme/ThemeContext";
import "./ThemeToggle.css";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isRetro = theme === "retro";

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={isRetro ? "Switch to 2026 mode" : "Switch to 1996 mode"}
      title={isRetro ? "Switch to 2026 mode" : "Switch to 1996 mode"}
    >
      <span className={`theme-toggle-label ${isRetro ? "" : "dim"}`}>1996</span>
      <span className="theme-toggle-track">
        <span className={`theme-toggle-thumb ${isRetro ? "" : "right"}`} />
      </span>
      <span className={`theme-toggle-label ${isRetro ? "dim" : ""}`}>2026</span>
    </button>
  );
}
