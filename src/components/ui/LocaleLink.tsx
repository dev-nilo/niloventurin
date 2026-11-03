"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { HTML_LANG, Locale, localeCookie } from "../../i18n/locales";

// Link to one language of the site. Saves the choice so "/" skips the picker
// next time, and keeps the reader on the section they were on. Without JS it
// is a plain link and nothing is saved.
export const LocaleLink = ({
    locale,
    ...props
}: { locale: Locale } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "hrefLang" | "onClick">) => {
    const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
        event.preventDefault();
        document.cookie = localeCookie(locale);
        window.location.assign(`/${locale}${window.location.hash}`);
    };

    return <a href={`/${locale}`} hrefLang={HTML_LANG[locale]} onClick={onClick} {...props} />;
};
