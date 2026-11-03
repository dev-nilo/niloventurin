// Every resume-derived fact on the site lives here, once per language.
// Sections and page metadata only render it, so a resume update is a change
// to this file, in both PROFILE.pt and PROFILE.en.

import type { Locale } from "../i18n/locales";

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

// Facts that read the same in every language.
const NAME = "Nilo Venturin Neto";

const CONTACT = {
  email: "venturin.nilo@gmail.com",
  github: "https://github.com/dev-nilo",
  linkedin: "https://www.linkedin.com/in/niloventurin/",
  // The CV is only in English for now.
  cvPath: "/cv.pdf",
};

const LINKS = {
  squadra: { liveUrl: "https://squadra-eight.vercel.app", repoUrl: "https://github.com/dev-nilo/nextjs-squadra" },
  catModoro: { liveUrl: "https://cat-modoro.vercel.app", repoUrl: "https://github.com/dev-nilo/cat-modoro" },
  rotina: { liveUrl: "https://dev-nilo.github.io/rotina/", repoUrl: "https://github.com/dev-nilo/rotina" },
  pilares: { liveUrl: "https://cave-kappa-ten.vercel.app", repoUrl: "https://github.com/dev-nilo/cave" },
};

const STACKS = {
  squadra: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Vitest"],
  catModoro: ["Next.js", "React", "TypeScript", "Vitest"],
  rotina: ["JavaScript", "PWA", "Web Push", "Cloudflare Workers"],
  pilares: ["Next.js", "TypeScript", "PWA"],
};

const EN: Profile = {
  name: NAME,
  fullName: NAME,
  role: "Full-Stack Software Engineer",
  location: "Vitória, ES, Brazil",
  workMode: "Open to remote",
  metaDescription:
    "Nilo Venturin Neto, full-stack software engineer in Brazil. Web apps in TypeScript with React and Next.js, APIs in Node.js and Java/Spring Boot, on PostgreSQL.",
  summary: [
    "I build web apps in TypeScript with React, Next.js and Angular, and APIs in Node.js and Java/Spring Boot, on PostgreSQL and Oracle. I use Claude Code every day, with context files and decision records in each repo, and ship in small, reviewed pull requests.",
    "I also have a background in access governance, so I build features already thinking about who can access them and how they'll be audited.",
  ],
  stats: [
    { value: "5+", label: "years in software development" },
    { value: "B2+", label: "English level" },
  ],
  skillGroups: [
    { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Angular", "Tailwind CSS"] },
    { title: "Backend", items: ["Java/Spring Boot", "Node.js", "REST APIs"] },
    { title: "Data", items: ["PostgreSQL", "Oracle", "Supabase", "Drizzle ORM", "Flyway"] },
    { title: "DevOps", items: ["Docker", "GitHub Actions", "Vercel", "Vitest", "JUnit"] },
    { title: "Security", items: ["OAuth2/OIDC", "Keycloak", "Row-level security", "RBAC", "SOX"] },
  ],
  education:
    "Technologist Degree in Systems Analysis and Development, Multivix (2024) · curso.dev certification (2025)",
  languages: "Portuguese (native) · English (B2+, near C1)",
  experience: [
    {
      company: "PVT Software",
      role: "Software Engineer",
      period: "Jun 2024 – Present",
      location: "Remote",
      highlights: [
        "Designed and built SOD Analyzer on my own: a segregation-of-duties app for TOTVS RM. Analysts run SoD analyses on permission profiles and send each one to a separate approver portal, with an audit log and PDF/XLSX exports.",
        "Built SOD Analyzer's authentication, row-level security, approval workflow and exports on Supabase, with a Next.js, React 19, TypeScript and shadcn/ui front end.",
        "Proposed Argos, a SoD platform that applies approved access changes to TOTVS RM with a full SOX audit trail, and built it with a small team up to a client proof of concept.",
        "For Argos, built the PostgreSQL data layer (migrations, PL/pgSQL, row-level security), the Node.js/TypeScript service and the Supabase Edge Functions behind the SoD engine. Every write to the ERP is read back to confirm it; anything we can't confirm goes to manual review instead of being retried.",
      ],
      secondary: [
        "TOTVS RM customizations and SQL/PL-SQL programs on Oracle. The reports, integrations and scheduled jobs I built cut manual work by more than 6 hours a day.",
        "IT risk matrices, ITGC testing and remediation plans for clients' annual SOX certification.",
      ],
    },
    {
      company: "Corpo de Bombeiros Militar do Espírito Santo (CBMES)",
      role: "Software Engineer",
      period: "Mar 2026 – Present",
      location: "Vitória, ES, Brazil",
      highlights: [
        "Lead developer of ISEO (Java 25/Spring Boot, Angular 20), the system that runs the corporation's paid supplementary shifts end to end. It models the organization itself: units and duty posts, team compositions by role, ranks and seniority synced from the personnel registry, and each firefighter's qualifications and eligibility.",
        "Monthly planning in one place: fixed and one-off shifts, batch call-ups, voluntary sign-ups with a fairness-ordered draw, compulsory assignment, swaps, monthly limits and notifications. Rule overrides require explicit permissions and are audit-logged.",
        "Co-develop the central authentication BFF for CBMES apps: OAuth2/OIDC with Keycloak, tokens kept server-side, HttpOnly sessions shared across apps through Redis.",
      ],
      secondary: [
        "26 Flyway migrations on PostgreSQL with an Oracle mirror, JUnit and Angular tests, architecture decision records, and Docker deploys through GitHub Actions.",
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
      highlights: ["Built front ends in React for freelance clients."],
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
      stack: STACKS.squadra,
      ...LINKS.squadra,
    },
    {
      name: "Cat-modoro",
      description: "Pomodoro timer with a pixel-art cat drawn in code that gets tired as you work.",
      stack: STACKS.catModoro,
      ...LINKS.catModoro,
    },
  ],
  otherProjects: [
    { name: "Rotina", description: "daily routine app (PWA) with push reminders", stack: STACKS.rotina, ...LINKS.rotina },
    { name: "Pilares", description: "offline journal (PWA)", stack: STACKS.pilares, ...LINKS.pilares },
  ],
  contact: {
    ...CONTACT,
    pitch:
      "If you're hiring for full-stack work, email is the fastest way to reach me. I'm also on LinkedIn.",
  },
};

const PT: Profile = {
  name: NAME,
  fullName: NAME,
  role: "Engenheiro de Software Full-Stack",
  location: "Vitória, ES, Brasil",
  workMode: "Aberto a trabalho remoto",
  metaDescription:
    "Nilo Venturin Neto, engenheiro de software full-stack. Aplicações web em TypeScript com React e Next.js, APIs em Node.js e Java/Spring Boot, sobre PostgreSQL.",
  summary: [
    "Desenvolvo aplicações web em TypeScript com React, Next.js e Angular, e APIs em Node.js e Java/Spring Boot, sobre PostgreSQL e Oracle. Uso o Claude Code todos os dias, com arquivos de contexto e registros de decisão em cada repositório, e entrego em pull requests pequenos e revisados.",
    "Também venho da governança de acessos, então construo cada funcionalidade já pensando em quem pode acessá-la e em como ela vai ser auditada.",
  ],
  stats: [
    { value: "5+", label: "anos desenvolvendo software" },
    { value: "B2+", label: "nível de inglês" },
  ],
  skillGroups: [
    { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Angular", "Tailwind CSS"] },
    { title: "Backend", items: ["Java/Spring Boot", "Node.js", "APIs REST"] },
    { title: "Dados", items: ["PostgreSQL", "Oracle", "Supabase", "Drizzle ORM", "Flyway"] },
    { title: "DevOps", items: ["Docker", "GitHub Actions", "Vercel", "Vitest", "JUnit"] },
    { title: "Segurança", items: ["OAuth2/OIDC", "Keycloak", "Row-level security", "RBAC", "SOX"] },
  ],
  education:
    "Tecnólogo em Análise e Desenvolvimento de Sistemas, Multivix (2024) · certificação curso.dev (2025)",
  languages: "Português (nativo) · Inglês (B2+, perto do C1)",
  experience: [
    {
      company: "PVT Software",
      role: "Engenheiro de Software",
      period: "jun 2024 – atual",
      location: "Remoto",
      highlights: [
        "Projetei e desenvolvi sozinho o SOD Analyzer, um app de segregação de funções para o TOTVS RM. Analistas rodam análises de SoD sobre perfis de permissão e enviam cada uma para um portal de aprovação separado, com log de auditoria e exportação em PDF/XLSX.",
        "Construí a autenticação, o row-level security, o fluxo de aprovação e as exportações do SOD Analyzer no Supabase, com front-end em Next.js, React 19, TypeScript e shadcn/ui.",
        "Propus o Argos, uma plataforma de SoD que aplica no TOTVS RM as mudanças de acesso aprovadas, com trilha de auditoria SOX completa, e o construí com um time pequeno até uma prova de conceito com cliente.",
        "No Argos, construí a camada de dados em PostgreSQL (migrations, PL/pgSQL, row-level security), o serviço em Node.js/TypeScript e as Supabase Edge Functions por trás do motor de SoD. Toda escrita no ERP é lida de volta para confirmar; o que não dá para confirmar vai para revisão manual em vez de ser repetido.",
      ],
      secondary: [
        "Customizações do TOTVS RM e programas SQL/PL-SQL em Oracle. Os relatórios, integrações e jobs agendados que desenvolvi cortaram mais de 6 horas de trabalho manual por dia.",
        "Matrizes de risco de TI, testes de ITGC e planos de remediação para a certificação SOX anual dos clientes.",
      ],
    },
    {
      company: "Corpo de Bombeiros Militar do Espírito Santo (CBMES)",
      role: "Engenheiro de Software",
      period: "mar 2026 – atual",
      location: "Vitória, ES, Brasil",
      highlights: [
        "Desenvolvedor líder do ISEO (Java 25/Spring Boot, Angular 20), o sistema que gerencia de ponta a ponta as escalas extras remuneradas da corporação. Ele modela a própria organização: unidades e postos de serviço, composição das equipes por função, postos, graduações e antiguidade sincronizados com o cadastro de pessoal, e as qualificações e a elegibilidade de cada bombeiro.",
        "Planejamento mensal num só lugar: escalas fixas e avulsas, convocações em lote, inscrições voluntárias com sorteio ordenado por critério de equidade, escala compulsória, permutas, limites mensais e notificações. Exceções às regras exigem permissão explícita e ficam registradas em auditoria.",
        "Codesenvolvo o BFF central de autenticação dos sistemas do CBMES: OAuth2/OIDC com Keycloak, tokens guardados no servidor e sessões HttpOnly compartilhadas entre os sistemas via Redis.",
      ],
      secondary: [
        "26 migrations Flyway em PostgreSQL com espelho em Oracle, testes em JUnit e Angular, registros de decisão de arquitetura e deploys em Docker pelo GitHub Actions.",
      ],
    },
    {
      company: "Grupo Coroa",
      role: "Analista de Sistemas",
      period: "mai 2023 – mai 2024",
      location: "Espírito Santo, Brasil",
      highlights: [
        "Desenvolvi e mantive rotinas do TOTVS Protheus em ADVPL e construí as APIs REST por trás das telas em PO UI (Angular).",
        "Trabalhei em integrações, customizações e melhorias do ERP, e analisei e simplifiquei processos do sistema.",
        "Refiz a landing page da empresa em Next.js.",
        "Atendi chamados de suporte interno e documentei processos e práticas do time.",
      ],
    },
    {
      company: "Vennx",
      role: "Analista de Sistemas, IAM & GRC",
      period: "dez 2021 – mai 2023",
      location: "Remoto",
      highlights: [
        "Desenhei modelos de acesso baseados em papéis e conduzi revisões de segregação de funções com mais de 10.000 usuários, zerando os conflitos críticos.",
        "Automatizei análises de acesso em SQL e preparei evidências para auditorias SOX.",
      ],
    },
    {
      company: "Freelance",
      role: "Desenvolvedor Front-End",
      period: "mar 2020 – nov 2021",
      location: "Autônomo",
      highlights: ["Desenvolvi front-ends em React para clientes como freelancer."],
    },
    {
      company: "Netsimples",
      role: "Web Designer",
      period: "jan 2019 – fev 2020",
      location: "Vila Velha, Brasil",
      highlights: [
        "Criei e desenvolvi sites de clientes do layout à publicação: front-ends em React, JavaScript e CSS, e temas e funcionalidades de WordPress em PHP.",
      ],
    },
  ],
  projects: [
    {
      name: "Squadra",
      description:
        "Sorteia times equilibrados a partir das notas dos jogadores. Cada conta só vê os próprios dados, garantido por row-level security no PostgreSQL.",
      stack: STACKS.squadra,
      ...LINKS.squadra,
    },
    {
      name: "Cat-modoro",
      description: "Timer Pomodoro com um gato em pixel art desenhado em código, que vai se cansando enquanto você trabalha.",
      stack: STACKS.catModoro,
      ...LINKS.catModoro,
    },
  ],
  otherProjects: [
    { name: "Rotina", description: "app de rotina diária (PWA) com lembretes por push", stack: STACKS.rotina, ...LINKS.rotina },
    { name: "Pilares", description: "diário offline (PWA)", stack: STACKS.pilares, ...LINKS.pilares },
  ],
  contact: {
    ...CONTACT,
    pitch:
      "Se você está contratando para uma vaga full-stack, o e-mail é o jeito mais rápido de falar comigo. Também estou no LinkedIn.",
  },
};

export const PROFILE: Record<Locale, Profile> = { pt: PT, en: EN };
