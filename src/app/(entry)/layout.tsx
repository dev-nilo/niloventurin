import type { Metadata } from "next";
import { RootHtml, robots } from "../../components/layout/RootHtml";
import { PROFILE } from "../../content/profile";
import { HTML_LANG, LOCALES } from "../../i18n/locales";

export const metadata: Metadata = {
    title: PROFILE.en.name,
    description: `${PROFILE.pt.role} · ${PROFILE.en.role}. Escolha o idioma do site · Choose the site's language.`,
    robots,
    alternates: {
        languages: Object.fromEntries(LOCALES.map((locale) => [HTML_LANG[locale], `/${locale}`])),
    },
};

// Root layout for "/", the language picker. It asks in both languages and
// leads with Portuguese.
export default function EntryLayout({ children }: LayoutProps<"/">) {
    return <RootHtml lang={HTML_LANG.pt}>{children}</RootHtml>;
}
