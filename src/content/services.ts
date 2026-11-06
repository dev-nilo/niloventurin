// Freelance services and reference prices, once per language. Each language
// has its own currency and its own price table in /public, which mirrors the
// values here, so update them together: PT is in reais and follows
// services-pricing-pt.pdf, EN is in US dollars and follows services-pricing.pdf.

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
  // ISO 4217 code of the prices below, for structured data.
  currency: "USD" | "BRL";
  items: ServiceItem[];
  maintenance: MaintenancePlan[];
}

const EN: Services = {
  intro:
    "I also take freelance web projects, written in custom code rather than website builders. Prices are reference ranges in US dollars; the final quote comes after a short briefing.",
  pdfPath: "/services-pricing.pdf",
  currency: "USD",
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
    "Também faço projetos web como freelancer, em código próprio, sem construtores de sites. Os preços são valores de referência em reais, válidos por 30 dias; o orçamento final sai depois de um briefing rápido.",
  pdfPath: "/services-pricing-pt.pdf",
  currency: "BRL",
  items: [
    {
      name: "Landing page",
      description: "Página única focada em conversão, ideal para captar contatos, divulgar um serviço ou lançar um produto.",
      price: "R$ 1.500 – 3.000",
      timeline: "1 a 2 semanas",
      includes: [
        "Layout personalizado e 100% responsivo",
        "Seções de apresentação, serviços, depoimentos e contato",
        "Botão de WhatsApp e/ou formulário de contato",
        "SEO básico e otimização de velocidade",
        "Integração com Google Analytics e Pixel",
        "Publicação no domínio do cliente",
      ],
    },
    {
      name: "Site institucional",
      description: "Site com 4 a 8 páginas para apresentar a empresa com credibilidade e ser encontrado no Google.",
      price: "R$ 4.000 – 8.000",
      timeline: "4 a 6 semanas",
      includes: [
        "Páginas como Home, Sobre, Serviços e Contato",
        "Identidade visual aplicada ao layout",
        "Formulários com envio por e-mail",
        "SEO on-page em todas as páginas e mapa do site",
        "Integração com Google Maps e redes sociais",
      ],
    },
    {
      name: "Site com painel",
      description: "Site institucional em que o próprio cliente edita os conteúdos, sem depender do desenvolvedor.",
      price: "R$ 8.000 – 15.000",
      timeline: "6 a 10 semanas",
      includes: [
        "Tudo do site institucional",
        "Painel com login para editar textos, imagens e serviços",
        "Blog ou área de novidades",
        "Usuários com níveis de acesso",
        "Treinamento de uso do painel",
      ],
    },
    {
      name: "Sistema sob medida",
      description: "Aplicações web com área logada, cadastros, regras de negócio, relatórios e integrações.",
      price: "Sob orçamento",
      timeline: "Definido no escopo",
      includes: [
        "Levantamento de requisitos e definição de escopo",
        "Desenvolvimento por etapas, com entregas parciais",
        "Banco de dados e autenticação",
        "Integrações com outros sistemas e APIs",
        "Valor calculado pelas horas estimadas",
      ],
    },
  ],
  maintenance: [
    { name: "Básico", price: "R$ 150/mês", includes: "hospedagem e certificado SSL, backups periódicos e atualizações de segurança" },
    { name: "Completo", price: "R$ 400/mês", includes: "tudo do plano Básico, até 3 horas mensais de ajustes, pequenas melhorias e conteúdos" },
  ],
};

export const SERVICES: Record<Locale, Services> = { pt: PT, en: EN };
