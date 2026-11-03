import type { Metadata } from "next";
import { RootHtml } from "../../components/layout/RootHtml";
import { PROFILE } from "../../content/profile";
import { HTML_LANG } from "../../i18n/locales";
import { PICKER_KEYWORDS, pageMetadata } from "../../site/metadata";

export const metadata: Metadata = pageMetadata({
    title: `${PROFILE.en.name} · ${PROFILE.en.role}`,
    description: `${PROFILE.pt.role} · ${PROFILE.en.role}. Escolha o idioma do site · Choose the site's language.`,
    keywords: PICKER_KEYWORDS,
});

// Root layout for "/", the language picker. It asks in both languages and
// leads with Portuguese.
export default function EntryLayout({ children }: LayoutProps<"/">) {
    return <RootHtml lang={HTML_LANG.pt}>{children}</RootHtml>;
}
