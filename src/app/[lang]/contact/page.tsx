import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail } from "lucide-react";
import { Linkedin } from "../../../components/ui/BrandIcons";
import { AppLink } from "../../../components/ui/AppLink";
import { Button } from "../../../components/ui/Button";
import { Bullets, Subpage, SubpageSection } from "../../../components/layout/Subpage";
import { PROFILE } from "../../../content/profile";
import { PAGES_TEXT } from "../../../content/pages";
import { UI } from "../../../content/ui";
import { isLocale } from "../../../i18n/locales";
import { subpageMetadata } from "../../../site/metadata";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return subpageMetadata(lang, "contact");
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const { contact } = PROFILE[lang];
  const text = PAGES_TEXT[lang].contact;
  const ui = UI[lang];

  return (
    <Subpage locale={lang} page="contact">
      <div>
        <p className="text-lg text-muted md:text-xl">{contact.pitch}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={`mailto:${contact.email}`}>
            <Mail size={14} /> {contact.email}
          </Button>
          <Button variant="outline" href={contact.linkedin}>
            <Linkedin size={14} /> LinkedIn
          </Button>
        </div>
      </div>

      <SubpageSection title={text.reachTitle}>
        <dl className="border-t border-line">
          {[
            { label: ui.email, href: `mailto:${contact.email}`, value: contact.email },
            { label: "LinkedIn", href: contact.linkedin, value: contact.linkedin.replace("https://www.", "") },
            { label: "GitHub", href: contact.github, value: contact.github.replace("https://", "") },
            { label: "CV", href: contact.cvPath, value: ui.downloadCv },
          ].map((row) => (
            <div key={row.label} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-3">
              <dt className="hud-label pt-1 text-muted">{row.label}</dt>
              <dd>
                <AppLink href={row.href} className="underline decoration-line underline-offset-4 hover:decoration-ink">
                  {row.value}
                </AppLink>
              </dd>
            </div>
          ))}
        </dl>
      </SubpageSection>

      <SubpageSection title={text.fitTitle}>
        <Bullets items={text.fits} />
      </SubpageSection>

      <SubpageSection title={text.howTitle}>
        <Bullets items={text.how} />
      </SubpageSection>

      <SubpageSection title={text.locationTitle}>
        <p>{text.location}</p>
      </SubpageSection>
    </Subpage>
  );
}
