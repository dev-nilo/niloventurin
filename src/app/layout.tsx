import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Nilo Venturin · Full-Stack Software Engineer",
    description:
        "Full-stack software engineer building web apps in TypeScript, React and Next.js and APIs in Node.js and Java/Spring Boot. TOTVS ERP, IAM and SoD experience.",
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
