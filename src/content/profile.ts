// Every resume-derived fact on the site lives here. Sections and page
// metadata only render it, so a resume update is a change to this file.

export interface TextSegment {
  text: string;
  strong?: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
}

export interface Profile {
  name: string;
  fullName: string;
  headline: string;
  location: string;
  workMode: string;
  tagline: TextSegment[];
  metaDescription: string;
  summary: string;
  stats: Stat[];
  skillGroups: SkillGroup[];
  skillIcons: string[];
  education: string;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    cvPath: string;
    pitch: string;
  };
}

export const PROFILE: Profile = {
  name: "Nilo Venturin",
  fullName: "Nilo Venturin Neto",
  headline: "Full-Stack Software Engineer",
  location: "Vitória, Espírito Santo, Brazil",
  workMode: "Remote",
  tagline: [
    { text: "I build web apps in " },
    { text: "TypeScript, React and Next.js", strong: true },
    { text: " and APIs in " },
    { text: "Node.js and Java/Spring Boot", strong: true },
    { text: ", tested and shipped in small, reviewed pull requests." },
  ],
  metaDescription:
    "Full-stack software engineer building web apps in TypeScript, React and Next.js and APIs in Node.js and Java/Spring Boot, on PostgreSQL and Supabase.",
  summary:
    "Full-stack software engineer. I build web apps in TypeScript with React and Next.js, REST APIs in Node.js and Spring Boot, and data models in PostgreSQL. I care about authentication, row-level security and tests from the first commit, and I use Claude Code every day, with repo context files, ADRs and one reviewed pull request per task.",
  stats: [
    { value: "3+", label: "Years as a developer" },
    { value: "4", label: "Live projects" },
  ],
  skillGroups: [
    {
      title: "Frontend",
      description:
        "React 19, Next.js (App Router) and Angular. Tailwind CSS, shadcn/ui and Radix UI, built with Vite or Next.",
    },
    {
      title: "Backend & APIs",
      description:
        "REST APIs in Node.js and Java 21/Spring Boot with JPA/Hibernate.",
    },
    {
      title: "Databases",
      description:
        "PostgreSQL, Supabase, MySQL, Oracle, Redis and SQLite. Drizzle ORM and Flyway migrations.",
    },
    {
      title: "Testing & DevOps",
      description:
        "Vitest, Jest and JUnit. Git, GitHub Actions, Docker, Vercel and AWS (EC2, S3).",
    },
    {
      title: "AI-assisted development",
      description:
        "Claude Code every day: repo context files (AGENTS.md, CONTEXT.md), ADRs, and one small reviewed pull request per task.",
    },
    {
      title: "Auth & access control",
      description:
        "Supabase Auth with PostgreSQL row-level security, OAuth2/OIDC with Keycloak, and role-based access control.",
    },
  ],
  // Icon ids from https://skillicons.dev
  skillIcons: [
    "ts",
    "js",
    "react",
    "nextjs",
    "angular",
    "nodejs",
    "java",
    "spring",
    "postgres",
    "supabase",
    "tailwind",
    "docker",
    "githubactions",
    "vercel",
    "aws",
  ],
  education:
    "Bachelor's degree in Computer Systems Analysis, Multivix (2022 – 2024). Certification: curso.dev (full-stack Node.js/Next.js). Portuguese (native), English (intermediate).",
  experience: [
    {
      company: "PVT Software",
      role: "Software Engineer",
      period: "Jun 2024 – Present",
      location: "Remote",
      highlights: [
        "Rebuilt SOD Analyzer as a full-stack web app in Next.js, React 19, TypeScript and Supabase, with an approver portal, audit log and PDF/XLSX exports.",
        "Built authentication, row-level security, the approval workflow and export generation; redesigned the dashboard, analysis, login and inbox pages with shadcn/ui and Radix.",
        "Built reports, integrations and scheduled jobs on Oracle that cut manual work by 6+ hours a day.",
      ],
    },
    {
      company: "Grupo Coroa",
      role: "Systems Analyst",
      period: "May 2023 – May 2024",
      location: "Espírito Santo, Brazil",
      highlights: [
        "Built REST APIs consumed by Angular (PO UI) screens, and the backend routines behind them.",
        "Redesigned the company's landing page with Next.js and built system integrations.",
      ],
    },
    {
      company: "Vennx",
      role: "Systems Analyst · Access control",
      period: "Dec 2021 – May 2023",
      location: "Remote",
      highlights: [
        "Designed role-based access control models for client systems, the groundwork for how I build auth today.",
        "Automated access analysis and reporting with SQL across 10,000+ users.",
      ],
    },
    {
      company: "Netsimples",
      role: "Web Designer",
      period: "Jan 2019 – Feb 2020",
      location: "Vila Velha, Brazil",
      highlights: [
        "Designed and built client websites from first conversation to launch: front ends in React, JavaScript, HTML and CSS, and WordPress themes and features in PHP.",
      ],
    },
  ],
  projects: [
    {
      name: "Squadra",
      description:
        "Multi-tenant app for player cards and balanced team draws. Each account's data is isolated with Supabase Auth and PostgreSQL row-level security.",
      stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Vitest"],
      liveUrl: "https://squadra-eight.vercel.app",
      repoUrl: "https://github.com/dev-nilo/nextjs-squadra",
    },
    {
      name: "Pilares",
      description:
        "Offline-capable PWA journal with daily missions, XP, streaks and a weekly heatmap.",
      stack: ["Next.js", "TypeScript", "PWA"],
      liveUrl: "https://cave-kappa-ten.vercel.app",
      repoUrl: "https://github.com/dev-nilo/cave",
    },
    {
      name: "Cat-modoro",
      description:
        "Pomodoro timer with a pixel-art cat drawn in code that tires as you work.",
      stack: ["Next.js", "React", "TypeScript", "Vitest"],
      liveUrl: "https://cat-modoro.vercel.app",
      repoUrl: "https://github.com/dev-nilo/cat-modoro",
    },
    {
      name: "SoD Profile Validator",
      description:
        "Matches ERP permission profiles to a catalog using exact, code-normalized and fuzzy (Levenshtein) matching, then exports a CSV for import.",
      stack: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Vitest"],
      liveUrl: "https://sod-theta.vercel.app",
      repoUrl: "https://github.com/dev-nilo/SoD",
    },
  ],
  contact: {
    email: "venturin.nilo@gmail.com",
    github: "https://github.com/dev-nilo",
    linkedin: "https://www.linkedin.com/in/niloventurin/",
    cvPath: "/cv.pdf",
    pitch:
      "Looking for a full-stack engineer for your web app or API? Send me an email or reach out on LinkedIn.",
  },
};
