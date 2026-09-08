import "./Marquee.css";

const MESSAGE =
  "★ WELCOME TO MY WEBSITE ★ THANKS FOR STOPPING BY ★ SCROLL DOWN TO SEE MY PROJECTS ★ BEST VIEWED WITH CURIOSITY ★";

export function Marquee() {
  return (
    <div className="marquee retro-only">
      <div className="marquee-track">
        <span>{MESSAGE}</span>
        <span aria-hidden="true">{MESSAGE}</span>
      </div>
    </div>
  );
}
