import { profile } from "../data/resume";
import { HitCounter } from "./HitCounter";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="footer-link">
            {profile.email}
          </a>
        </div>
        <HitCounter />
        <p className="footer-note retro-only">
          Made with React, framer-motion, and a healthy respect for &lt;marquee&gt; tags. Flip the switch above if 1996 isn't your speed.
        </p>
        <p className="footer-note modern-only">
          Built with React &amp; TypeScript. There's a more fun version of this site — flip the switch above.
        </p>
      </div>
    </footer>
  );
}
