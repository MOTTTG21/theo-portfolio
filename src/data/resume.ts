export const profile = {
  name: "Theodore Mott",
  shortName: "Theo Mott",
  title: "Software Engineer",
  summary:
    "Software Engineer with 4+ years building complex enterprise platforms in C#, .NET, and SQL — plus a habit of shipping AI-powered side projects for fun. Comfortable owning a feature end to end: backend services, RESTful APIs, and the UI on top. Looking for a startup where I can keep growing as a developer.",
  linkedin: "https://linkedin.com/in/theodoremott",
  email: "motttg@outlook.com",
  letterboxd: "https://letterboxd.com/motttg/",
  clearance: "Active Secret Security Clearance · CompTIA Security+ (2022–Present)",
};

export type Job = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    role: "Senior Software Engineer",
    company: "Nightwing",
    period: "Jan 2026 – Present",
    bullets: [
      "Sole & lead UI engineer on a 4-person team building a large-scale enterprise data management platform, owning all front-end architecture decisions.",
      "Designed and delivered the Warrant Manager — a multi-view WPF module with a two-level master-detail grid for hierarchical data — from requirements through demo-ready delivery under tight deadlines.",
      "Uses AI-assisted tools (GitHub Copilot, Claude, Cursor) daily to increase delivery speed on a lean team without added headcount.",
      "Writes and optimizes SQL powering data-driven UI components across complex, multi-relational datasets.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Defcon AI",
    period: "Nov 2024 – Nov 2025",
    bullets: [
      "Co-led front-end development for a mission-critical operational platform, shipping features on tight startup deadlines.",
      "Built data-driven dashboards and interactive charts in Blazor and JavaScript for real-time operational monitoring.",
      "Designed RESTful APIs for cross-service data sync; implemented Entity Framework (code-first) + PostgreSQL solutions.",
      "Built CI/CD pipelines with Jenkins and Azure DevOps, reducing integration overhead and improving release cadence.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Empower AI",
    period: "Aug 2022 – Nov 2024",
    bullets: [
      "Built and maintained a Blazor-based enterprise application delivering responsive, interactive UIs in an Agile environment.",
      "Contributed to a legacy system modernization effort, turning new requirements into production-ready C# and front-end code.",
    ],
  },
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: "Languages & Frameworks",
    items: ["C#", ".NET", "WPF", "Blazor", "ASP.NET", "JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    label: "Databases",
    items: ["SQL Server", "PostgreSQL", "Oracle", "Entity Framework"],
  },
  {
    label: "Tools & Practices",
    items: ["AI-assisted dev (Copilot, Claude, Cursor)", "Git", "Agile/Scrum", "REST APIs", "CI/CD", "Azure DevOps", "Docker"],
  },
  {
    label: "Testing & Security",
    items: ["Unit & integration testing", "Secure coding", "API validation"],
  },
];

export const education = {
  school: "James Madison University",
  degree: "B.B.A., Computer Information Systems",
  period: "December 2021",
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  highlight?: string;
};

export const projects: Project[] = [
  {
    name: "Seinfeld: The Game",
    tagline: "An AI-generated Seinfeld episode, playable in 3D.",
    description:
      "A 3D playable scene of Jerry's apartment where Claude improvises Seinfeld-style dialogue on the fly and ElevenLabs voices every character in real time — pick a premise, watch the episode write and perform itself.",
    stack: ["React", "Three.js", "TypeScript", "Node.js", "Express", "Claude SDK", "ElevenLabs"],
    live: "https://gerry-game.onrender.com/",
  },
  {
    name: "Box Office Forecaster",
    tagline: "Real box office data, an honest prediction model, and a backtest that doesn't flatter itself.",
    description:
      "Week-by-week box office tracking with franchise comparisons and a forecasting model for movies opening this week — backtested against real outcomes, bugs and all, rather than shipped on vibes.",
    stack: ["Next.js", "TypeScript", "Tailwind", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    github: "https://github.com/MOTTTG21/box-office-forecaster",
    live: "https://frontend-rho-ashy-79wbl21zmk.vercel.app",
  },
  {
    name: "Lead the Horse to Water",
    tagline: "A real MCP gateway with identity-aware access control, wearing a game as a disguise.",
    description:
      "Chat with an AI-controlled horse and try to get it to drink water it's not authorized to have — the horse is persuadable, but it isn't the security boundary. Underneath is a real policy-enforcement gateway (identity check → policy check → audit log → execute) with a genuine, named Confused Deputy vulnerability: one action skips the same re-check every other action goes through. A trust meter and a field guide that unlocks as you play teach the actual concepts as you find them, not before.",
    stack: ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "Claude API", "Auth0", "Docker", "GCP Cloud Run", "GCP Secret Manager"],
    github: "https://github.com/MOTTTG21/lead-horse-to-water",
    live: "https://horse-gateway-145508508036.us-central1.run.app",
  },
];
