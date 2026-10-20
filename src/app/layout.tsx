import type { Metadata } from "next";
import { Archivo, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { PROFILE } from "../content/profile";
import { themeInitScript } from "../theme/theme";
import { ENVIRONMENT, isIndexable } from "../environment/environment";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });
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
            className={`${archivo.variable} ${instrumentSerif.variable} ${geistMono.variable}`}
        >
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
            </head>
            <body className="font-sans antialiased transition-colors duration-300">{children}</body>
        </html>
    );
}
