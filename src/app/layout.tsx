import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { PROFILE } from "../content/profile";
import { themeInitScript } from "../theme/theme";
import { ENVIRONMENT, isIndexable } from "../environment/environment";
import { RevealObserver } from "../components/ui/RevealObserver";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
    variable: "--font-instrument-serif",
});
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
    title: `${PROFILE.name} · ${PROFILE.role}`,
    description: PROFILE.metaDescription,
    robots: isIndexable(ENVIRONMENT) ? undefined : { index: false, follow: false },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
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
}
