import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { PROFILE } from "../content/profile";
import { themeInitScript } from "../theme/theme";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${PROFILE.name} · ${PROFILE.role}`,
    description: PROFILE.metaDescription,
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
            <body className={bricolage.className}>{children}</body>
        </html>
    );
}
