# theo-portfolio

Personal site / interactive resume. Defaults to a "1996" retro theme with a toggle
in the corner that flips to a clean "2026" modern theme — a deliberate choice, not
an accident.

## Content

Resume content, project data, and links live in [`src/data/resume.ts`](src/data/resume.ts) —
edit that file to update experience, skills, or project details.

## Local development

```bash
npm install
npm run dev
```

## Deploy

Built as a static Vite app — deploys cleanly to Vercel, Netlify, or GitHub Pages.
For Vercel: push to GitHub, then import the repo at vercel.com/new (framework
preset: Vite, no config needed).
