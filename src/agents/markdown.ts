// Markdown versions of every page, served by proxy.ts to clients that ask for
// text/markdown. They are built from the same content modules as the HTML
// pages, so a content change shows up in both.

import { PROFILE } from "../content/profile";
import { SERVICES } from "../content/services";
import { UI } from "../content/ui";
import { PAGES_TEXT } from "../content/pages";
import { LOCALES, isLocale, type Locale } from "../i18n/locales";
import { absoluteUrl, isSubpage, localePath, type Subpage } from "../site/site";

const otherLocale = (locale: Locale) => LOCALES.find((l) => l !== locale)!;

const LANGUAGE_NAME: Record<Locale, string> = { pt: "Português", en: "English" };

const doc = (...blocks: (string | false | undefined)[]) =>
  blocks.filter((block): block is string => Boolean(block)).join("\n\n") + "\n";

const list = (items: string[]) => items.map((item) => `- ${item}`).join("\n");

// A link to the same page in another language.
interface Alternate {
  label: string;
  url: string;
}

const alternateOf = (locale: Locale, page?: Subpage): Alternate => {
  const other = otherLocale(locale);
  return { label: LANGUAGE_NAME[other], url: absoluteUrl(localePath(other, page)) };
};

const header = (locale: Locale, title: string, alternate: Alternate) => {
  const profile = PROFILE[locale];
  return doc(
    `# ${title}`,
    `> ${profile.name} · ${profile.role} · ${profile.location} · ${profile.workMode}`,
    `${alternate.label}: <${alternate.url}>`,
  ).trimEnd();
};

const contactLinks = (locale: Locale) => {
  const { contact } = PROFILE[locale];
  return list([
    `${UI[locale].email}: [${contact.email}](mailto:${contact.email})`,
    `LinkedIn: <${contact.linkedin}>`,
    `GitHub: <${contact.github}>`,
    `CV (PDF): <${absoluteUrl(contact.cvPath)}>`,
  ]);
};

const skills = (locale: Locale) =>
  list(PROFILE[locale].skillGroups.map((group) => `**${group.title}:** ${group.items.join(", ")}`));

const experience = (locale: Locale, withHighlights: boolean) =>
  PROFILE[locale].experience
    .map((job) =>
      doc(
        `### ${job.role} ${UI[locale].at} ${job.company}`,
        `${job.period} · ${job.location}`,
        withHighlights && list([...job.highlights, ...(job.secondary ?? [])]),
      ).trimEnd(),
    )
    .join("\n\n");

const projects = (locale: Locale) => {
  const profile = PROFILE[locale];
  const ui = UI[locale];
  return list(
    [...profile.projects, ...profile.otherProjects].map(
      (project) =>
        `[${project.name}](${project.liveUrl}): ${project.description.replace(/\.$/, "")}. ` +
        `Stack: ${project.stack.join(", ")}. ${ui.sourceCode}: <${project.repoUrl}>`,
    ),
  );
};

const services = (locale: Locale) => {
  const s = SERVICES[locale];
  const ui = UI[locale];
  return doc(
    s.intro,
    ...s.items.map((item) =>
      doc(`### ${item.name}`, `**${item.price}** · ${item.timeline}`, item.description, list(item.includes)).trimEnd(),
    ),
    `${ui.maintenance} ${s.maintenance.map((plan) => `**${plan.name} ${plan.price}** (${plan.includes})`).join("; ")}.`,
    `${ui.pricingPdf}: <${absoluteUrl(s.pdfPath)}>`,
  ).trimEnd();
};

// The whole one-page site of a language.
export const homeMarkdown = (locale: Locale, alternate = alternateOf(locale)) => {
  const profile = PROFILE[locale];
  const ui = UI[locale];
  return doc(
    header(locale, profile.name, alternate),
    ...profile.summary,
    `## ${ui.nav.about}`,
    skills(locale),
    `${profile.education} · ${profile.languages}`,
    `## ${ui.nav.experience}`,
    experience(locale, true),
    `## ${ui.nav.projects}`,
    projects(locale),
    `## ${ui.nav.services}`,
    services(locale),
    `## ${ui.nav.contact}`,
    profile.contact.pitch,
    contactLinks(locale),
  );
};

const aboutMarkdown = (locale: Locale) => {
  const profile = PROFILE[locale];
  const text = PAGES_TEXT[locale];
  return doc(
    header(locale, text.titles.about.title, alternateOf(locale, "about")),
    ...profile.summary,
    `## ${text.about.skillsTitle}`,
    skills(locale),
    `## ${text.about.experienceTitle}`,
    experience(locale, false),
    `## ${text.about.educationTitle}`,
    list([profile.education, profile.languages]),
  );
};

const contactMarkdown = (locale: Locale) => {
  const { contact } = PAGES_TEXT[locale];
  return doc(
    header(locale, PAGES_TEXT[locale].titles.contact.title, alternateOf(locale, "contact")),
    PROFILE[locale].contact.pitch,
    `## ${contact.reachTitle}`,
    contactLinks(locale),
    `## ${contact.fitTitle}`,
    list(contact.fits),
    `## ${contact.howTitle}`,
    list(contact.how),
    `## ${contact.locationTitle}`,
    contact.location,
  );
};

const privacyMarkdown = (locale: Locale) => {
  const { privacy, titles } = PAGES_TEXT[locale];
  return doc(
    header(locale, titles.privacy.title, alternateOf(locale, "privacy")),
    privacy.updated,
    ...privacy.sections.map((section) => doc(`## ${section.title}`, ...section.paragraphs).trimEnd()),
  );
};

const SUBPAGE_MARKDOWN: Record<Subpage, (locale: Locale) => string> = {
  about: aboutMarkdown,
  contact: contactMarkdown,
  privacy: privacyMarkdown,
};

// "/" is a language picker in HTML. Its Markdown is the English site, with a
// pointer to the Portuguese one, so an agent gets the content in one request.
const pickerMarkdown = () => homeMarkdown("en", { label: LANGUAGE_NAME.pt, url: absoluteUrl(localePath("pt")) });

// The Markdown for a page path, or null when there is no such page.
export const markdownFor = (pathname: string): string | null => {
  if (pathname === "/") return pickerMarkdown();
  const [lang, page, ...rest] = pathname.split("/").filter(Boolean);
  if (!isLocale(lang) || rest.length > 0) return null;
  if (page === undefined) return homeMarkdown(lang);
  return isSubpage(page) ? SUBPAGE_MARKDOWN[page](lang) : null;
};

export const notFoundMarkdown = (pathname: string) =>
  doc(
    "# Page not found",
    `There is no page at \`${pathname.replace(/[`\r\n]/g, "")}\` on this site. It may have moved, or the address may be mistyped.`,
    "Try one of these instead:",
    list([
      `[Nilo Venturin Neto, full-stack software engineer (English)](${absoluteUrl("/en")})`,
      `[Nilo Venturin Neto, engenheiro de software full-stack (português)](${absoluteUrl("/pt")})`,
      `[llms.txt](${absoluteUrl("/llms.txt")}): what this site covers and when to use it`,
      `[Sitemap](${absoluteUrl("/sitemap.xml")}): every page on the site`,
    ]),
  );
