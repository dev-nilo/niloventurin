import type { ReactNode } from "react";
import { JsonLd } from "./JsonLd";
import { Footer } from "./Footer";
import { GLASS } from "./Section";
import { LocaleLink } from "../ui/LocaleLink";
import { identityGraph } from "../../agents/jsonLd";
import { PROFILE } from "../../content/profile";
import { PAGES_TEXT } from "../../content/pages";
import { UI } from "../../content/ui";
import { LOCALES, type Locale } from "../../i18n/locales";
import { localePath, type Subpage as SubpageName } from "../../site/site";

// Frame for the About, Contact and Privacy pages: a bar with the way back
// home and the language switch, the page title in the hero's style, then
// plain text. Nothing here waits for JavaScript to show.
export const Subpage = ({ locale, page, children }: { locale: Locale; page: SubpageName; children: ReactNode }) => {
  const profile = PROFILE[locale];
  const ui = UI[locale];
  const otherLocale = LOCALES.find((l) => l !== locale)!;

  return (
    <>
      <JsonLd data={identityGraph(locale, page)} />
      <header className={`sticky top-0 z-50 border-b border-line ${GLASS}`}>
        <div className="flex h-12 items-stretch justify-between">
          <a
            href={localePath(locale)}
            className="flex items-center border-r border-line px-4 font-semibold tracking-tight whitespace-nowrap hover:opacity-70 sm:px-5"
          >
            {profile.name}
          </a>
          <LocaleLink
            locale={otherLocale}
            page={page}
            aria-label={ui.switchLocale.label}
            title={ui.switchLocale.label}
            className="hud-label flex w-12 items-center justify-center border-l border-line text-muted hover:bg-ink hover:text-bg"
          >
            {ui.switchLocale.short}
          </LocaleLink>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="hud-label mb-6 flex items-center gap-2 text-muted">
          <span className="size-1.5 bg-cyan-500" />
          {profile.name} · {profile.role}
        </p>
        <h1 className="text-6xl leading-[0.9] font-semibold tracking-tighter md:text-8xl">
          {PAGES_TEXT[locale].titles[page].title}
          <span className="text-cyan-500">.</span>
        </h1>
        <div className="mt-12 max-w-2xl space-y-12 md:mt-16">{children}</div>
      </main>
      <Footer locale={locale} />
    </>
  );
};

export const SubpageSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="border-t border-line pt-6">
    <h2 className="hud-label mb-5 text-muted">{title}</h2>
    {children}
  </section>
);

export const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3">
        <span className="mt-2.5 size-1 shrink-0 bg-cyan-500" />
        {item}
      </li>
    ))}
  </ul>
);
