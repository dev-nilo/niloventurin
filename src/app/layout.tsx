import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { PROFILE } from "../content/profile";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: `${PROFILE.name} · ${PROFILE.headline}`,
    description: PROFILE.metaDescription,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={bricolage.className}>{children}</body>
        </html>
    );
}
