import { useState } from "react";
import "./HitCounter.css";

const STORAGE_KEY = "theo-portfolio-hits";
const SESSION_KEY = "theo-portfolio-hit-counted";
const BASE = 41207;

function readAndBumpCount(): number {
  try {
    const alreadyCounted = window.sessionStorage.getItem(SESSION_KEY);
    const stored = Number(window.localStorage.getItem(STORAGE_KEY));
    const current = Number.isFinite(stored) && stored > 0 ? stored : BASE;

    if (alreadyCounted) {
      return current;
    }

    const next = current + 1;
    window.localStorage.setItem(STORAGE_KEY, String(next));
    window.sessionStorage.setItem(SESSION_KEY, "1");
    return next;
  } catch {
    return BASE;
  }
}

export function HitCounter() {
  const [count] = useState(readAndBumpCount);

  const digits = String(count).padStart(6, "0").split("");

  return (
    <div className="hit-counter retro-only" role="img" aria-label={`Visitor count: ${count}`}>
      <span className="hit-counter-label">YOU ARE VISITOR</span>
      <span className="hit-counter-digits">
        {digits.map((d, i) => (
          <span className="hit-counter-digit" key={i}>
            {d}
          </span>
        ))}
      </span>
    </div>
  );
}
