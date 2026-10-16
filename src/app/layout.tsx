import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { PROFILE } from "../content/profile";
import { themeInitScript } from "../theme/theme";
import { ENVIRONMENT, isIndexable } from "../environment/environment";
import { EnvironmentBanner } from "../components/layout/EnvironmentBanner";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

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
        <html lang="en" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
            </head>
            <body className={bricolage.className}>
                {children}
                <EnvironmentBanner />
            </body>
        </html>
    );
}
