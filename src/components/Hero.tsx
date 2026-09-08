import { motion } from "framer-motion";
import { profile } from "../data/resume";
import { ThemeToggle } from "./ThemeToggle";
import "./Hero.css";

export function Hero() {
  return (
    <header className="hero">
      <div className="container hero-inner">
        <div className="hero-toggle-row">
          <ThemeToggle />
        </div>

        <motion.p
          className="hero-eyebrow retro-only"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="blink">●</span> NOW LOADING PORTFOLIO.EXE
        </motion.p>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className="hero-title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {profile.title}
        </motion.p>

        <motion.p
          className="hero-summary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {profile.summary}
        </motion.p>

        <motion.div
          className="hero-cta-row"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <a
            className="btn hero-linkedin-btn"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            View my LinkedIn →
          </a>
          <a className="btn btn-outline" href={`mailto:${profile.email}`}>
            Email me
          </a>
        </motion.div>
      </div>
    </header>
  );
}
