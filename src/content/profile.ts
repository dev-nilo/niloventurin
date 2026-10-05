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
    { text: ", with access, auditability and tests in mind." },
  ],
  metaDescription:
    "Full-stack software engineer building web apps in TypeScript, React and Next.js and APIs in Node.js and Java/Spring Boot. TOTVS ERP, IAM and SoD experience.",
  summary:
    "Full-stack software engineer with 3+ years developing for TOTVS ERPs (Protheus and RM). Before that I worked in access governance, running segregation-of-duties reviews for 10,000+ users. So when I build a feature, I already think about who can access it and how it will be audited.",
  stats: [
    { value: "3+", label: "Years on TOTVS ERPs" },
    { value: "10k+", label: "Users in SoD reviews" },
  ],
  skillGroups: [
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
  ],
  projects: [
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
  ],
  contact: {
    email: "venturin.nilo@gmail.com",
    github: "https://github.com/dev-nilo",
    linkedin: "https://www.linkedin.com/in/niloventurin/",
    cvPath: "/cv.pdf",
    pitch:
      "Looking for a full-stack engineer who also understands access control and audits? Send me an email or reach out on LinkedIn.",
  },
};
