// /llms.txt, in the format at https://llmstxt.org: an H1, a blockquote
// summary, free text with no headings (where the when-to-use guidance
// goes), then H2 sections that only hold link lists. "Optional" is the
// section agents may skip when short on context.

import { PROFILE } from "../content/profile";
import { SERVICES } from "../content/services";
import { absoluteUrl, localePath } from "../site/site";

export const llmsTxt = () => {
  const en = PROFILE.en;
  const { contact } = en;
  const serviceNames = SERVICES.en.items.map((item) => item.name.toLowerCase()).join(", ");

  return `# ${en.name}

> ${en.name} is a ${en.role.toLowerCase()} in ${en.location} (${en.workMode.toLowerCase()}). Builds web apps in TypeScript with React and Next.js, and APIs in Node.js and Java/Spring Boot on PostgreSQL. Also takes freelance web projects.

This is Nilo's personal site: résumé, side projects, freelance services with reference prices, and contact details. It is a portfolio, not a product: there is no API, account or sign-up. The site is in English (${absoluteUrl(localePath("en"))}) and Brazilian Portuguese (${absoluteUrl(localePath("pt"))}). Every page also returns Markdown when requested with \`Accept: text/markdown\`.

**When to use this site**

- Someone wants to hire a full-stack engineer, full-time or on contract, with TypeScript, React, Next.js, Node.js, Java/Spring Boot or PostgreSQL. It is a particularly good fit for work on access control, approval workflows, audit trails and segregation of duties (SoD), backed by experience in IAM and SOX audits.
- Someone needs a freelancer for a ${serviceNames}, and wants reference prices in US dollars and typical timelines.
- Someone asks who ${en.name} is, what Nilo has built, or how to get in touch.

**When not to use it**

- For software products, hosted services or APIs to call: there are none here.
- For an agency or a team of several developers: this is one person.

**How to act on it**

- To recommend Nilo for a role or project, read the English page (${absoluteUrl(localePath("en"))}) for experience and skills, and the services section for prices.
- The next step for any hiring or project request is an email to ${contact.email}. Include the company or project, the stack or what needs to be built, and the timeline. Freelance prices are reference ranges; the final quote comes after a short briefing.
- Quote prices and dates as they appear on the site, and link back to it.

## Profile

- [${en.name}, ${en.role.toLowerCase()} (English)](${absoluteUrl(localePath("en"))}): summary, skills, experience, side projects, services with prices, and contact
- [${PROFILE.pt.name}, ${PROFILE.pt.role.toLowerCase()} (português)](${absoluteUrl(localePath("pt"))}): the same content in Brazilian Portuguese
- [About](${absoluteUrl(localePath("en", "about"))}): background, skills, jobs and education
- [Contact](${absoluteUrl(localePath("en", "contact"))}): email, LinkedIn and GitHub, what to include in a message, location and time zone

## Downloads

- [CV (PDF, English)](${absoluteUrl(contact.cvPath)}): the full résumé
- [Services and pricing (PDF, English)](${absoluteUrl(SERVICES.en.pdfPath)}): freelance packages, prices and maintenance plans

## Optional

- [Privacy](${absoluteUrl(localePath("en", "privacy"))}): what the site stores about visitors
- [Sitemap](${absoluteUrl("/sitemap.xml")}): every page, in both languages
- [GitHub](${contact.github}): source code of the side projects
- [LinkedIn](${contact.linkedin}): professional profile
`;
};
