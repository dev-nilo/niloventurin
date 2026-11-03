import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BASE_METADATA, RootHtml } from "../../components/layout/RootHtml";
import { PROFILE } from "../../content/profile";
import { HTML_LANG, LOCALES, isLocale } from "../../i18n/locales";

// /pt and /en are built at deploy time; any other first segment is a 404.
export const dynamicParams = false;

export const generateStaticParams = () => LOCALES.map((lang) => ({ lang }));

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
    const { lang } = await params;
    if (!isLocale(lang)) notFound();
    const profile = PROFILE[lang];

    return {
        title: `${profile.name} · ${profile.role}`,
        description: profile.metaDescription,
        ...BASE_METADATA,
        alternates: {
            canonical: `/${lang}`,
            languages: {
                ...Object.fromEntries(LOCALES.map((locale) => [HTML_LANG[locale], `/${locale}`])),
                "x-default": "/",
            },
        },
    };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[lang]">) {
    const { lang } = await params;
    if (!isLocale(lang)) notFound();

    return <RootHtml lang={HTML_LANG[lang]}>{children}</RootHtml>;
}
