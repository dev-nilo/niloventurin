import { ArrowRight } from "lucide-react";
import { ThemeProvider } from "../../context/ThemeContext";
import { HeroBackground } from "../../components/ui/HeroBackground";
import { LocaleLink } from "../../components/ui/LocaleLink";
import { GLASS } from "../../components/layout/Section";
import { PROFILE } from "../../content/profile";
import { HTML_LANG, Locale } from "../../i18n/locales";

const CHOICES: { locale: Locale; code: string; name: string }[] = [
  { locale: "pt", code: "PT-BR", name: "Português" },
  { locale: "en", code: "EN", name: "English" },
];

// Shown once: picking a language saves it, and proxy.ts sends later visits
// to "/" straight to that language.
export default function LanguagePicker() {
  return (
    <ThemeProvider>
      <main className="relative isolate flex min-h-svh flex-col overflow-hidden">
        <HeroBackground />
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-14 sm:px-6 md:py-20">
          <p className="hud-label mb-8 flex items-center gap-2 text-muted">
            <span className="size-1.5 bg-cyan-500" />
            {PROFILE.pt.name}
          </p>
          <h1 className="text-5xl leading-[0.95] font-semibold tracking-tighter sm:text-6xl md:text-8xl">
            Em qual idioma?
            <span lang={HTML_LANG.en} className="mt-3 block font-serif font-normal text-muted italic">
              Which language?
            </span>
          </h1>

          <nav className="mt-12 grid border-t border-l border-line sm:w-fit sm:grid-cols-2 md:mt-16">
            {CHOICES.map((choice) => (
              <LocaleLink
                key={choice.locale}
                locale={choice.locale}
                lang={HTML_LANG[choice.locale]}
                className={`group flex items-end justify-between gap-16 border-r border-b border-line px-6 py-6 hover:bg-ink hover:text-bg sm:min-w-72 md:px-8 md:py-8 ${GLASS}`}
              >
                <span>
                  <span className="hud-label block text-muted group-hover:text-bg">{choice.code}</span>
                  <span className="mt-2 block text-3xl font-semibold tracking-tight md:text-4xl">{choice.name}</span>
                </span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </LocaleLink>
            ))}
          </nav>
        </div>
      </main>
    </ThemeProvider>
  );
}
