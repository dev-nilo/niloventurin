import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Subpage, SubpageSection } from "../../../components/layout/Subpage";
import { PAGES_TEXT } from "../../../content/pages";
import { isLocale } from "../../../i18n/locales";
import { subpageMetadata } from "../../../site/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return subpageMetadata(lang, "privacy");
}

export default async function PrivacyPage({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { privacy } = PAGES_TEXT[lang];

  return (
    <Subpage locale={lang} page="privacy">
      <p className="hud-label text-muted">{privacy.updated}</p>
      {privacy.sections.map((section) => (
        <SubpageSection key={section.title} title={section.title}>
          <div className="space-y-4 leading-relaxed">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </SubpageSection>
      ))}
    </Subpage>
  );
}
