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
  // What people search for together with the name. The first one is the main
  // term: it leads the meta keywords and the page title. Same order in every
  // language.
  keywords: string[];
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
  rotina: ["JavaScript", "PWA", "Service Worker", "Claude API", "Web Push", "Cloudflare Workers"],
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
  keywords: [
    "full-stack software engineer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Java Spring Boot",
    "PostgreSQL",
    "segregation of duties",
    "freelance web developer",
  ],
  summary: [
    "I build systems for critical, regulated operations: web apps in TypeScript with React, Next.js and Angular, and APIs in Node.js and Java/Spring Boot, on PostgreSQL and Oracle. I lead development of ISEO, the Espírito Santo Fire Department's shift system, and coordinate SIAT, its fire-safety licensing platform.",
    "Access-governance and SOX work gave me a security and audit mindset, so I build features already thinking about who can access them and how they'll be audited. I use AI every day in my development workflow: Claude Code and ChatGPT, with context files and decision records in each repo, and small, reviewed pull requests.",
  ],
  stats: [
    { value: "6+", label: "years in tech" },
    { value: "B2+", label: "English level" },
  ],
  skillGroups: [
    { title: "Languages", items: ["TypeScript", "JavaScript", "Java", "SQL", "PL/SQL", "PL/pgSQL", "HTML/CSS", "ADVPL", "PHP", "Go (learning)"] },
    { title: "Frontend", items: ["React", "Next.js", "Angular", "PO UI", "Tailwind CSS", "shadcn/ui", "Radix UI"] },
    { title: "Backend", items: ["Node.js", "REST APIs", "Supabase Edge Functions", "Spring Boot", "OAuth2/OIDC", "Keycloak"] },
    { title: "Data", items: ["PostgreSQL", "Row-level security", "Oracle", "Supabase", "Drizzle ORM", "Flyway"] },
    { title: "Testing & CI/CD", items: ["Vitest", "Jest", "JUnit", "Code review", "GitHub Actions", "Docker", "Vercel"] },
    { title: "AI", items: ["Claude Code", "ChatGPT", "Context files", "ADRs"] },
    { title: "Domain", items: ["TOTVS RM", "TOTVS Protheus", "IAM", "RBAC", "SoD", "SOX", "ITGC", "LGPD"] },
  ],
  education:
    "Technologist Degree in Systems Analysis and Development, Multivix (2022 – 2024) · curso.dev certification, full-stack Node.js/Next.js (2025)",
  languages: "Portuguese (native) · English (B2+, near C1)",
  experience: [
    {
      company: "PVT Software",
      role: "Software Engineer",
      period: "Jun 2024 – Present",
      location: "Remote",
      highlights: [
        "Proposed Argos, a SoD platform that applies approved access changes to TOTVS RM with a full SOX audit trail, and built it with a small team up to a client proof of concept.",
        "Built Argos's PostgreSQL data layer (migrations, PL/pgSQL, row-level security), Node.js/TypeScript service and Supabase Edge Functions. Every ERP write is read back; unconfirmed changes go to manual review instead of being retried.",
        "Day to day, I build React/Next.js front ends and Node.js APIs on PostgreSQL and Oracle for ERP clients, plus TOTVS RM customizations and SQL/PL-SQL jobs that cut manual work by more than 6 hours a day.",
      ],
      secondary: [
        "IT risk matrices, ITGC testing and remediation plans for clients' annual SOX certification.",
      ],
    },
    {
      company: "Corpo de Bombeiros Militar do Espírito Santo (CBMES)",
      role: "Software Engineer",
      period: "Mar 2026 – Present",
      location: "Vitória, ES, Brazil",
      highlights: [
        "Lead developer of ISEO (Java 25/Spring Boot, Angular 20), the system that runs the corporation's paid extra shifts end to end. It models the organization itself: units and duty posts, teams by role, ranks and seniority from the personnel registry, and each firefighter's qualifications and eligibility.",
        "Monthly planning in one place: fixed and one-off shifts, batch call-ups, voluntary sign-ups with a fairness-ordered draw, compulsory assignment, swaps and notifications. Rule overrides need explicit permission and are audit-logged.",
        "Coordinate SIAT, the state platform for fire and panic safety processes, licensing and inspections. I run a weekly session with a small team to design the delivery pipeline and review code.",
        "Co-develop the central authentication BFF for CBMES apps: OAuth2/OIDC with Keycloak, sessions shared through Redis.",
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
        "Designed and implemented RBAC models for TOTVS RM, Active Directory, Microsoft Admin and other client systems.",
        "Ran segregation-of-duties reviews across more than 10,000 users, bringing critical conflicts to zero, and automated the analysis with SQL.",
        "Supported SOX through access reviews and ITGC testing, and adapted access governance to LGPD/GDPR.",
      ],
    },
    {
      company: "Freelance",
      role: "Front-End Developer",
      period: "Mar 2020 – Nov 2021",
      location: "Remote",
      highlights: ["Built front ends in React for freelance clients."],
    },
    {
      company: "Netsimples",
      role: "Web Designer",
      period: "Jan 2019 – Feb 2020",
      location: "Vila Velha, ES, Brazil",
      highlights: [
        "Built client websites from requirements to launch: WordPress/PHP themes and React, JavaScript and CSS front ends.",
      ],
    },
  ],
  projects: [
    {
      name: "Rotina",
      description:
        "Offline PWA that shows what to do now from a weekly routine. An assistant on the Claude API turns short Portuguese requests into schema-validated JSON edits the user approves; reminders through Web Push on a Cloudflare Worker.",
      stack: STACKS.rotina,
      ...LINKS.rotina,
    },
    {
      name: "Cat-modoro",
      description: "Pomodoro timer with a pixel-art cat drawn in code that gets tired as you work.",
      stack: STACKS.catModoro,
      ...LINKS.catModoro,
    },
    {
      name: "Squadra",
      description:
        "Multi-tenant app that draws balanced teams. Each account's data is isolated with Supabase Auth and row-level security.",
      stack: STACKS.squadra,
      ...LINKS.squadra,
    },
  ],
  otherProjects: [
    { name: "Pilares", description: "offline journal (PWA)", stack: STACKS.pilares, ...LINKS.pilares },
  ],
  contact: {
    ...CONTACT,
    cvPath: "/cv.pdf",
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
  keywords: [
    "engenheiro de software full-stack",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Java Spring Boot",
    "PostgreSQL",
    "segregação de funções",
    "desenvolvedor web freelancer",
  ],
  summary: [
    "Construo sistemas para operações críticas e reguladas: aplicações web em TypeScript com React, Next.js e Angular, e APIs em Node.js e Java/Spring Boot, sobre PostgreSQL e Oracle. Lidero o desenvolvimento do ISEO, o sistema de escalas do Corpo de Bombeiros do Espírito Santo, e coordeno o SIAT, a plataforma de licenciamento de segurança contra incêndio.",
    "Governança de acessos e SOX me deram mentalidade de segurança e auditoria, então construo cada funcionalidade já pensando em quem pode acessá-la e em como ela vai ser auditada. Uso IA todo dia no desenvolvimento: Claude Code e ChatGPT, com arquivos de contexto e registros de decisão em cada repositório, e pull requests pequenos e revisados.",
  ],
  stats: [
    { value: "6+", label: "anos em tecnologia" },
    { value: "B2+", label: "nível de inglês" },
  ],
  skillGroups: [
    { title: "Linguagens", items: ["TypeScript", "JavaScript", "Java", "SQL", "PL/SQL", "PL/pgSQL", "HTML/CSS", "ADVPL", "PHP", "Go (estudando)"] },
    { title: "Frontend", items: ["React", "Next.js", "Angular", "PO UI", "Tailwind CSS", "shadcn/ui", "Radix UI"] },
    { title: "Backend", items: ["Node.js", "APIs REST", "Supabase Edge Functions", "Spring Boot", "OAuth2/OIDC", "Keycloak"] },
    { title: "Dados", items: ["PostgreSQL", "Row-level security", "Oracle", "Supabase", "Drizzle ORM", "Flyway"] },
    { title: "Testes e CI/CD", items: ["Vitest", "Jest", "JUnit", "Code review", "GitHub Actions", "Docker", "Vercel"] },
    { title: "IA", items: ["Claude Code", "ChatGPT", "Arquivos de contexto", "ADRs"] },
    { title: "Domínio", items: ["TOTVS RM", "TOTVS Protheus", "IAM", "RBAC", "SoD", "SOX", "ITGC", "LGPD"] },
  ],
  education:
    "Tecnólogo em Análise e Desenvolvimento de Sistemas, Multivix (2022 – 2024) · certificação curso.dev, full stack Node.js/Next.js (2025)",
  languages: "Português (nativo) · Inglês (B2+, próximo de C1)",
  experience: [
    {
      company: "PVT Software",
      role: "Engenheiro de Software",
      period: "jun 2024 – atual",
      location: "Remoto",
      highlights: [
        "Propus o Argos, plataforma de SoD que aplica no TOTVS RM as mudanças de acesso aprovadas, com trilha de auditoria SOX, e o construí com uma equipe pequena até a prova de conceito com cliente.",
        "Construí a camada de dados do Argos em PostgreSQL (migrations, PL/pgSQL, row-level security), o serviço em Node.js/TypeScript e as Supabase Edge Functions. Toda escrita no ERP é lida de volta para confirmar; o que não dá para confirmar vai para revisão manual em vez de ser repetido.",
        "No dia a dia, front-ends em React/Next.js e APIs Node.js sobre PostgreSQL e Oracle para clientes de ERP, além de customizações do TOTVS RM e jobs SQL/PL-SQL que poupam mais de 6 horas de trabalho manual por dia.",
      ],
      secondary: [
        "Matrizes de risco de TI, testes de ITGC e planos de remediação para a certificação SOX anual dos clientes.",
      ],
    },
    {
      company: "Corpo de Bombeiros Militar do Espírito Santo (CBMES)",
      role: "Engenheiro de Software",
      period: "mar 2026 – atual",
      location: "Vitória, ES, Brasil",
      highlights: [
        "Desenvolvedor principal do ISEO (Java 25/Spring Boot, Angular 20), o sistema que opera de ponta a ponta as escalas extras remuneradas da corporação. Ele modela a estrutura da corporação: unidades e postos, equipes por função, patente e antiguidade do cadastro de pessoal, qualificações e elegibilidade de cada militar.",
        "Planejamento mensal em um só lugar: escalas fixas e avulsas, convocações em lote, candidaturas voluntárias com sorteio por ordem de prioridade, escalação compulsória, trocas e notificações. Exceções às regras exigem permissão e ficam em auditoria.",
        "Coordeno o SIAT, a plataforma estadual de processos de segurança contra incêndio e pânico, licenciamento e vistorias. Conduzo a weekly da equipe para desenhar a pipeline de entrega e revisar código.",
        "Codesenvolvo o BFF central de autenticação dos sistemas do CBMES: OAuth2/OIDC com Keycloak e sessões compartilhadas via Redis.",
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
        "Implementei modelos de acesso baseado em função (RBAC) para TOTVS RM, Active Directory e outros sistemas.",
        "Conduzi revisões de segregação de funções para mais de 10.000 usuários, zerando os conflitos críticos, e automatizei a análise em SQL.",
        "Apoiei a conformidade SOX com revisões de acesso e testes de ITGC, e a adequação à LGPD/GDPR.",
      ],
    },
    {
      company: "Freelance",
      role: "Desenvolvedor Front-End",
      period: "mar 2020 – nov 2021",
      location: "Remoto",
      highlights: ["Desenvolvi front-ends em React para clientes como freelancer."],
    },
    {
      company: "Netsimples",
      role: "Web Designer",
      period: "jan 2019 – fev 2020",
      location: "Vila Velha, ES",
      highlights: [
        "Construí sites de clientes do levantamento de requisitos ao lançamento: temas WordPress/PHP e front-ends em React, JavaScript e CSS.",
      ],
    },
  ],
  projects: [
    {
      name: "Rotina",
      description:
        "PWA offline que mostra o que fazer agora na rotina da semana. Um assistente com a API do Claude entende pedidos em português (\"amanhã 8h vou jogar bola\") e devolve ajustes em JSON com schema para o usuário aprovar; avisos por Web Push via Cloudflare Worker.",
      stack: STACKS.rotina,
      ...LINKS.rotina,
    },
    {
      name: "Cat-modoro",
      description: "Timer Pomodoro com um gato em pixel art desenhado em código, que vai se cansando enquanto você trabalha.",
      stack: STACKS.catModoro,
      ...LINKS.catModoro,
    },
    {
      name: "Squadra",
      description:
        "App multi-tenant de sorteio de times equilibrados. Os dados de cada conta ficam isolados com Supabase Auth e row-level security.",
      stack: STACKS.squadra,
      ...LINKS.squadra,
    },
  ],
  otherProjects: [
    { name: "Pilares", description: "diário offline (PWA)", stack: STACKS.pilares, ...LINKS.pilares },
  ],
  contact: {
    ...CONTACT,
    cvPath: "/cv-pt.pdf",
    pitch:
      "Se você está contratando para uma vaga full-stack, o e-mail é o jeito mais rápido de falar comigo. Também estou no LinkedIn.",
  },
};

export const PROFILE: Record<Locale, Profile> = { pt: PT, en: EN };
