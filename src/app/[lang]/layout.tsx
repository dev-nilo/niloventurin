import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RootHtml } from "../../components/layout/RootHtml";
import { PROFILE } from "../../content/profile";
import { HTML_LANG, LOCALES, isLocale } from "../../i18n/locales";
import { pageMetadata } from "../../site/metadata";

// /pt and /en are built at deploy time; any other first segment is a 404.
export const dynamicParams = false;

export const generateStaticParams = () => LOCALES.map((lang) => ({ lang }));

// The language's home page; subpages set their own metadata.
export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
    const { lang } = await params;
    if (!isLocale(lang)) notFound();
    const profile = PROFILE[lang];

    return pageMetadata({
        title: `${profile.name} · ${profile.role}`,
        description: profile.metaDescription,
        locale: lang,
        keywords: profile.keywords,
    });
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[lang]">) {
    const { lang } = await params;
    if (!isLocale(lang)) notFound();

    return <RootHtml lang={HTML_LANG[lang]}>{children}</RootHtml>;
}
