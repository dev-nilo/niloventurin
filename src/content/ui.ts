// Interface text that isn't part of the resume: navigation, buttons, labels.
// Plain strings only, so the whole object can be passed to client components.

import type { Locale } from "../i18n/locales";

export interface UiText {
  nav: { about: string; experience: string; projects: string; services: string; contact: string };
  downloadCv: string;
  // Joins role and company: "Software Engineer at PVT Software".
  at: string;
  projectsIntro: string;
  sourceCode: string;
  openProject: string;
  also: string;
  pricingPdf: string;
  maintenance: string;
  email: string;
  lightTheme: string;
  darkTheme: string;
  openMenu: string;
  closeMenu: string;
  // The top bar's language switch, labelled in the language it leads to.
  switchLocale: { label: string; short: string };
}

const EN: UiText = {
  nav: { about: "About", experience: "Experience", projects: "Projects", services: "Services", contact: "Contact" },
  downloadCv: "Download CV",
  at: "at",
  projectsIntro: "Side projects, all live.",
  sourceCode: "source code",
  openProject: "Open",
  also: "Also:",
  pricingPdf: "Pricing PDF",
  maintenance: "Optional maintenance:",
  email: "Email",
  lightTheme: "Switch to light theme",
  darkTheme: "Switch to dark theme",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  switchLocale: { label: "Ver o site em português", short: "PT" },
};

const PT: UiText = {
  nav: { about: "Sobre", experience: "Experiência", projects: "Projetos", services: "Serviços", contact: "Contato" },
  downloadCv: "Baixar CV",
  at: "em",
  projectsIntro: "Projetos pessoais, todos no ar.",
  sourceCode: "código-fonte",
  openProject: "Abrir",
  also: "Também:",
  // The pricing PDF is only in English.
  pricingPdf: "Preços em PDF (inglês)",
  maintenance: "Manutenção opcional:",
  email: "E-mail",
  lightTheme: "Mudar para o tema claro",
  darkTheme: "Mudar para o tema escuro",
  openMenu: "Abrir menu",
  closeMenu: "Fechar menu",
  switchLocale: { label: "View the site in English", short: "EN" },
};

export const UI: Record<Locale, UiText> = { pt: PT, en: EN };
