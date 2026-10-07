// Every resume-derived fact on the site lives here. Sections and page
// metadata only render it, so a resume update is a change to this file.

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  // Other work at the same job, shown smaller under the highlights.
  secondary?: string[];
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
  role: string;
  location: string;
  workMode: string;
  metaDescription: string;
  summary: string[];
  stats: Stat[];
  skillGroups: SkillGroup[];
  education: string;
  languages: string;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  otherProjects: ProjectItem[];
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
  role: "Senior Full-Stack Software Engineer",
  location: "Vitória, Espírito Santo, Brazil",
  workMode: "Remote",
  metaDescription:
    "Nilo Venturin, full-stack software engineer in Brazil. Web apps in TypeScript with React and Next.js, APIs in Java/Spring Boot and Node.js, on PostgreSQL.",
  summary: [
    "I build web apps in TypeScript with React, Next.js and Angular, and APIs in Java/Spring Boot and Node.js, on PostgreSQL. I use Claude Code every day, with context files and decision records in each repo, and ship in small, reviewed pull requests.",
    "I also have a background in access governance, so I build features already thinking about who can access them and how they'll be audited.",
  ],
  stats: [
    { value: "5+", label: "years in software development" },
    { value: "B2", label: "English level" },
  ],
  skillGroups: [
    { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Angular", "Tailwind CSS"] },
    { title: "Backend", items: ["Java/Spring Boot", "Node.js", "REST APIs"] },
    { title: "Data", items: ["PostgreSQL", "Oracle", "Supabase", "Redis", "Flyway"] },
    { title: "DevOps", items: ["Docker", "GitHub Actions", "Vercel", "AWS", "Vitest", "JUnit"] },
    { title: "Security", items: ["OAuth2/OIDC", "Keycloak", "Row-level security", "RBAC", "SOX"] },
  ],
  education:
    "B.Sc. Computer Systems Analysis, Multivix (2024) · curso.dev certification",
  languages: "Portuguese (native) · English (B2)",
  experience: [
    {
      company: "PVT Software",
      role: "Software Engineer",
      period: "Jun 2024 – Present",
      location: "Remote",
      highlights: [
        "Came up with Argos (SOD Analyzer), a segregation-of-duties platform for TOTVS RM, and built it with a small team up to a client proof of concept. Analysts design access profiles, run risk analyses, send them for approval and apply the approved changes to the ERP, with a full audit trail for SOX.",
        "Built the PostgreSQL data layer: migrations, PL/pgSQL functions and row-level security for risks, analyses, approvals and evidence.",
        "Wrote the Node.js/TypeScript service and the Supabase Edge Functions behind the SoD engine, and redesigned the React 19 front end with shadcn/ui and Radix.",
        "Every write to the ERP is read back to confirm it. Anything we can't confirm goes to manual review instead of being retried.",
      ],
      secondary: [
        "TOTVS RM customizations and SQL/PL-SQL programs on Oracle. The reports, integrations and scheduled jobs I built cut manual work by more than 6 hours a day.",
        "IT risk matrices, ITGC testing and remediation plans for clients' annual SOX certification.",
      ],
    },
    {
      company: "Grupo Coroa",
      role: "Systems Analyst",
      period: "May 2023 – May 2024",
      location: "Espírito Santo, Brazil",
      highlights: [
        "Developed and maintained TOTVS Protheus routines in ADVPL, and built the REST APIs behind PO UI (Angular) screens.",
        "Worked on ERP integrations, customizations and improvements, and analyzed and streamlined system processes.",
        "Redesigned the company's landing page with Next.js.",
        "Handled internal support requests and documented processes and team practices.",
      ],
    },
    {
      company: "Vennx",
      role: "Systems Analyst, IAM & GRC",
      period: "Dec 2021 – May 2023",
      location: "Remote",
      highlights: [
        "Designed role-based access models and ran segregation-of-duties reviews covering more than 10,000 users, bringing critical conflicts down to zero.",
        "Automated access analysis in SQL and prepared evidence for SOX audits.",
      ],
    },
    {
      company: "Freelance",
      role: "Front-End Developer",
      period: "Mar 2020 – Nov 2021",
      location: "Self-employed",
      highlights: [
        "Built front ends in React for freelance clients.",
      ],
    },
    {
      company: "Netsimples",
      role: "Web Designer",
      period: "Jan 2019 – Feb 2020",
      location: "Vila Velha, Brazil",
      highlights: [
        "Designed and built client websites from layout to launch: front ends in React, JavaScript and CSS, and WordPress themes and features in PHP.",
      ],
    },
  ],
  projects: [
    {
      name: "Squadra",
      description:
        "Draws balanced teams from player ratings. Each account only sees its own data, enforced by row-level security in PostgreSQL.",
      stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Vitest"],
      liveUrl: "https://squadra-eight.vercel.app",
      repoUrl: "https://github.com/dev-nilo/nextjs-squadra",
    },
    {
      name: "Cat-modoro",
      description:
        "Pomodoro timer with a pixel-art cat drawn in code that gets tired as you work.",
      stack: ["Next.js", "React", "TypeScript", "Vitest"],
      liveUrl: "https://cat-modoro.vercel.app",
      repoUrl: "https://github.com/dev-nilo/cat-modoro",
    },
  ],
  otherProjects: [
    {
      name: "SoD Profile Validator",
      description: "fuzzy matching of ERP permission profiles",
      stack: ["Next.js", "TypeScript", "Drizzle ORM", "PostgreSQL", "Vitest"],
      liveUrl: "https://sod-theta.vercel.app",
      repoUrl: "https://github.com/dev-nilo/SoD",
    },
    {
      name: "Pilares",
      description: "offline journal (PWA)",
      stack: ["Next.js", "TypeScript", "PWA"],
      liveUrl: "https://cave-kappa-ten.vercel.app",
      repoUrl: "https://github.com/dev-nilo/cave",
    },
  ],
  contact: {
    email: "venturin.nilo@gmail.com",
    github: "https://github.com/dev-nilo",
    linkedin: "https://www.linkedin.com/in/niloventurin/",
    cvPath: "/cv.pdf",
    pitch:
      "If you're hiring for full-stack work, email is the fastest way to reach me. I'm also on LinkedIn.",
  },
};
