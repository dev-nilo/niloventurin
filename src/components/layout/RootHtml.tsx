import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Geist_Mono, Instrument_Serif } from "next/font/google";
import "../../app/globals.css";
import { themeInitScript } from "../../theme/theme";
import { ENVIRONMENT, isIndexable } from "../../environment/environment";
import { RevealObserver } from "../ui/RevealObserver";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    variable: "--font-instrument-serif",
});
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

// Metadata both root layouts share. Canonical and hreflang links must be
// absolute, and Next only fills in the domain when metadataBase is set; it
// points at production even on staging, which isn't indexed anyway.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const BASE_METADATA: Metadata = {
    metadataBase: productionHost ? new URL(`https://${productionHost}`) : undefined,
    robots: isIndexable(ENVIRONMENT) ? undefined : { index: false, follow: false },
};

// The language picker and each language of the site are separate root
// layouts (no layout sits above "/" and "/[lang]"), so both render this.
export const RootHtml = ({ lang, children }: { lang: string; children: ReactNode }) => (
    <html
        lang={lang}
        suppressHydrationWarning
        className={`${bricolage.variable} ${instrumentSerif.variable} ${geistMono.variable}`}
    >
        <head>
            <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
            {/* Reveal animations hide content only when JS is there to show it. */}
            <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js")` }} />
        </head>
        <body className="font-sans antialiased transition-colors duration-300">
            {children}
            <RevealObserver />
        </body>
    </html>
);
