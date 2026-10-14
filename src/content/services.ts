// Freelance services and reference prices. The downloadable PDF in
// /public mirrors these values, so update both together.

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

export const SERVICES = {
  intro:
    "I also take freelance web projects, written in custom code rather than website builders. Prices are reference ranges in US dollars; the final quote comes after a short briefing.",
  pdfPath: "/services-pricing.pdf",
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
  ] satisfies ServiceItem[],
  maintenance: [
    { name: "Basic", price: "US$ 40/mo", includes: "hosting, SSL, backups and security updates" },
    { name: "Complete", price: "US$ 120/mo", includes: "Basic plus up to 3 hours of changes a month" },
  ] satisfies MaintenancePlan[],
};
