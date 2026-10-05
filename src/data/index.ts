import { ExperienceItem, ProjectItem, SkillGroup } from "../types";

export const CONTACT = {
  email: "venturin.nilo@gmail.com",
  github: "https://github.com/dev-nilo",
  linkedin: "https://www.linkedin.com/in/niloventurin/",
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "React 19, Next.js (App Router), Angular and PO UI. Tailwind CSS, shadcn/ui and Radix UI, built with Vite or Next.",
  },
  {
    title: "Backend & APIs",
    description:
      "REST APIs in Node.js and Java 21/Spring Boot with JPA/Hibernate. OAuth2/OIDC login with Keycloak and RBAC.",
  },
  {
    title: "Databases",
    description:
      "PostgreSQL, Oracle (SQL, PL/SQL), MySQL, Supabase, Redis and SQLite. Drizzle ORM, Flyway migrations and row-level security.",
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
    title: "Domain",
    description:
      "TOTVS RM and TOTVS Protheus. IAM, segregation of duties, ITGC, SOX and LGPD.",
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "PVT Software",
    role: "Software Engineer",
    period: "Jun 2024 – Present",
    location: "Remote",
    highlights: [
      "Rebuilt SOD Analyzer, PVT's segregation-of-duties tool for TOTVS RM, as a full-stack app with an approver portal, audit log and PDF/XLSX exports.",
      "Built auth, row-level security, the approval workflow and exports on Supabase; redesigned the UI with shadcn/ui and Radix.",
      "TOTVS RM customizations and SQL/PL-SQL on Oracle. Reports, integrations and jobs that cut manual work by 6+ hours a day.",
      "IT risk matrices, ITGC testing and remediation plans for clients' annual SOX certification.",
    ],
  },
  {
    company: "Grupo Coroa",
    role: "Systems Analyst",
    period: "May 2023 – May 2024",
    location: "Espírito Santo, Brazil",
    highlights: [
      "Developed and maintained TOTVS Protheus routines in ADVPL and built REST APIs for PO UI (Angular) screens.",
      "Built ERP integrations and customizations, and redesigned the company's landing page with Next.js.",
    ],
  },
  {
    company: "Vennx",
    role: "Systems Analyst · IAM & GRC",
    period: "Dec 2021 – May 2023",
    location: "Remote",
    highlights: [
      "Designed RBAC models for TOTVS RM, Active Directory, Microsoft Admin, Elaw, Hyperion, Gesplan and other systems.",
      "Ran segregation-of-duties reviews across 10,000+ users, bringing critical conflicts down to zero.",
      "Supported SOX compliance and helped clients adapt access governance to LGPD and GDPR.",
    ],
  },
  {
    company: "Netsimples",
    role: "Web Designer",
    period: "Jan 2019 – Feb 2020",
    location: "Vila Velha, Brazil",
    highlights: [
      "Designed and built client websites from requirements to launch: WordPress themes and PHP features, and front ends in React, JavaScript, HTML and CSS.",
    ],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    name: "SoD Profile Validator",
    description:
      "Matches TOTVS RM permission profiles to an access-governance catalog using exact, code-normalized and fuzzy (Levenshtein) matching, then exports a CSV for import.",
    stack: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Vitest"],
    liveUrl: "https://sod-theta.vercel.app",
    repoUrl: "https://github.com/dev-nilo/SoD",
  },
  {
    name: "Squadra",
    description:
      "Multi-tenant app for player cards and balanced team draws. Each account's data is isolated with Supabase Auth and PostgreSQL row-level security.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Vitest"],
    liveUrl: "https://squadra-eight.vercel.app",
    repoUrl: "https://github.com/dev-nilo/nextjs-squadra",
  },
  {
    name: "Cat-modoro",
    description:
      "Pomodoro timer with a pixel-art cat drawn in code that tires as you work.",
    stack: ["Next.js", "React", "TypeScript", "Vitest"],
    liveUrl: "https://cat-modoro.vercel.app",
    repoUrl: "https://github.com/dev-nilo/cat-modoro",
  },
];
