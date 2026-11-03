// Freelance services and reference prices, once per language. The
// downloadable PDF in /public (English only) mirrors these values, so update
// all three together.

import type { Locale } from "../i18n/locales";

export interface ServiceItem {
  name: string;
  description: string;
  price: string;
  timeline: string;
  includes: string[];
}

export interface MaintenancePlan {
  name: string;
  price: string;
  includes: string;
}

export interface Services {
  intro: string;
  pdfPath: string;
  items: ServiceItem[];
  maintenance: MaintenancePlan[];
}

const PDF_PATH = "/services-pricing.pdf";

const EN: Services = {
  intro:
    "I also take freelance web projects, written in custom code rather than website builders. Prices are reference ranges in US dollars; the final quote comes after a short briefing.",
  pdfPath: PDF_PATH,
  items: [
    {
      name: "Landing page",
      description: "A single conversion-focused page to capture leads or launch a product.",
      price: "US$ 600 – 1,200",
      timeline: "1–2 weeks",
      includes: ["Custom responsive layout", "Contact form or WhatsApp button", "Basic SEO and analytics"],
    },
    {
      name: "Business website",
      description: "4 to 8 pages that present your business and get found on Google.",
      price: "US$ 1,500 – 3,000",
      timeline: "4–6 weeks",
      includes: ["Your brand applied to the layout", "On-page SEO and sitemap", "Maps and social integrations"],
    },
    {
      name: "Website + CMS",
      description: "A business website where you edit the content yourself.",
      price: "US$ 3,000 – 6,000",
      timeline: "6–10 weeks",
      includes: ["Admin panel with login", "Blog or news section", "User roles and training"],
    },
    {
      name: "Custom web app",
      description: "User accounts, business rules, reports and integrations.",
      price: "Custom quote",
      timeline: "Defined in scope",
      includes: ["Requirements and scope", "Milestone-based delivery", "Priced from estimated hours (US$ 35/h)"],
    },
  ],
  maintenance: [
    { name: "Basic", price: "US$ 40/mo", includes: "hosting, SSL, backups and security updates" },
    { name: "Complete", price: "US$ 120/mo", includes: "Basic plus up to 3 hours of changes a month" },
  ],
};

const PT: Services = {
  intro:
    "Também faço projetos web como freelancer, em código próprio, sem construtores de sites. Os preços são faixas de referência em dólares americanos; o orçamento final sai depois de um briefing rápido.",
  pdfPath: PDF_PATH,
  items: [
    {
      name: "Landing page",
      description: "Uma página única, focada em conversão, para captar contatos ou lançar um produto.",
      price: "US$ 600 – 1.200",
      timeline: "1–2 semanas",
      includes: ["Layout responsivo sob medida", "Formulário de contato ou botão de WhatsApp", "SEO básico e analytics"],
    },
    {
      name: "Site institucional",
      description: "De 4 a 8 páginas que apresentam o seu negócio e fazem ele ser encontrado no Google.",
      price: "US$ 1.500 – 3.000",
      timeline: "4–6 semanas",
      includes: ["Sua marca aplicada ao layout", "SEO on-page e sitemap", "Integração com mapas e redes sociais"],
    },
    {
      name: "Site + CMS",
      description: "Um site institucional em que você mesmo edita o conteúdo.",
      price: "US$ 3.000 – 6.000",
      timeline: "6–10 semanas",
      includes: ["Painel administrativo com login", "Blog ou seção de notícias", "Perfis de usuário e treinamento"],
    },
    {
      name: "Aplicação web sob medida",
      description: "Contas de usuário, regras de negócio, relatórios e integrações.",
      price: "Sob consulta",
      timeline: "Definido no escopo",
      includes: ["Levantamento de requisitos e escopo", "Entrega por etapas", "Preço pelas horas estimadas (US$ 35/h)"],
    },
  ],
  maintenance: [
    { name: "Básico", price: "US$ 40/mês", includes: "hospedagem, SSL, backups e atualizações de segurança" },
    { name: "Completo", price: "US$ 120/mês", includes: "o Básico mais até 3 horas de alterações por mês" },
  ],
};

export const SERVICES: Record<Locale, Services> = { pt: PT, en: EN };
