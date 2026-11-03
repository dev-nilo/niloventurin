import { notFound } from "next/navigation";
import { ThemeProvider } from "../../context/ThemeContext";
import { ENVIRONMENT, environmentLabel } from "../../environment/environment";
import { PROFILE } from "../../content/profile";
import { UI } from "../../content/ui";
import { LOCALES, isLocale } from "../../i18n/locales";
import { TopBar } from "../../components/layout/TopBar";
import { Footer } from "../../components/layout/Footer";
import { Hero } from "../../components/sections/Hero";
import { About } from "../../components/sections/About";
import { Experience } from "../../components/sections/Experience";
import { Projects } from "../../components/sections/Projects";
import { Services } from "../../components/sections/Services";
import { Contact } from "../../components/sections/Contact";
import { JsonLd } from "../../components/layout/JsonLd";
import { identityGraph } from "../../agents/jsonLd";

// Ids double as anchors and stay the same in every language, so switching
// language keeps the reader on the same section.
const SECTION_IDS = ["about", "experience", "projects", "services", "contact"] as const;

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const profile = PROFILE[lang];
  const ui = UI[lang];
  const otherLocale = LOCALES.find((locale) => locale !== lang)!;

  return (
    <ThemeProvider>
      <JsonLd data={identityGraph(lang)} />
      {/* ENVIRONMENT reads server-only env vars, so the label is resolved here. */}
      <TopBar
        items={SECTION_IDS.map((id) => ({ id, label: ui.nav[id] }))}
        environment={environmentLabel(ENVIRONMENT)}
        name={profile.name}
        github={profile.contact.github}
        linkedin={profile.contact.linkedin}
        ui={ui}
        otherLocale={otherLocale}
      />
      <main>
        <Hero locale={lang} />
        <About locale={lang} />
        <Experience locale={lang} />
        <Projects locale={lang} />
        <Services locale={lang} />
        <Contact locale={lang} />
      </main>
      <Footer locale={lang} />
    </ThemeProvider>
  );
}
