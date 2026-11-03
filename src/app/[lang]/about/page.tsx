import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bullets, Subpage, SubpageSection } from "../../../components/layout/Subpage";
import { PROFILE } from "../../../content/profile";
import { PAGES_TEXT } from "../../../content/pages";
import { UI } from "../../../content/ui";
import { isLocale } from "../../../i18n/locales";
import { subpageMetadata } from "../../../site/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return subpageMetadata(lang, "about");
}

// The résumé in short: the home page's About section plus where I've worked.
export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const profile = PROFILE[lang];
  const text = PAGES_TEXT[lang].about;

  return (
    <Subpage locale={lang} page="about">
      <div className="space-y-6 text-lg leading-relaxed md:text-xl">
        {profile.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <SubpageSection title={text.skillsTitle}>
        <dl className="border-t border-line">
          {profile.skillGroups.map((group) => (
            <div key={group.title} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-3">
              <dt className="hud-label pt-1 text-muted">{group.title}</dt>
              <dd>{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </SubpageSection>

      <SubpageSection title={text.experienceTitle}>
        <ul className="border-t border-line">
          {profile.experience.map((job) => (
            <li key={job.company} className="border-b border-line py-3">
              <p className="font-semibold tracking-tight">
                {job.role} {UI[lang].at} {job.company}
              </p>
              <p className="hud-label mt-1 text-muted">
                {job.period} · {job.location}
              </p>
            </li>
          ))}
        </ul>
      </SubpageSection>

      <SubpageSection title={text.educationTitle}>
        <Bullets items={[profile.education, profile.languages]} />
      </SubpageSection>
    </Subpage>
  );
}
