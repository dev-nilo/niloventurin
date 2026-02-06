import { Code, Layout, Zap, Terminal, Mail, Download } from "lucide-react";
import { NeoButton, NeoButtonOutline } from "../ui/NeoButton";

export const Hero = () => (
    <div className="flex flex-col items-center justify-center h-full max-w-4xl mx-auto px-4 text-center">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="space-y-4 mb-8">
            <h2 className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400">
                Hi, I'm <span className="font-bold text-zinc-900 dark:text-zinc-100">Nilo Venturin</span>
            </h2>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100 leading-none">
                SOFTWARE     <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                    ENGINEER
                </span>
            </h1>
            {/* <p className="max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400 text-lg md:text-xl leading-relaxed">
                Building scalable, high-performance web applications with
                <strong className="text-zinc-900 dark:text-zinc-100"> React, Next.js</strong> and
                <strong className="text-zinc-900 dark:text-zinc-100"> TailwindCSS</strong>.
            </p> */}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeoButton href="mailto:contact@nilo.dev">
                <Mail size={18} /> Get in Touch
            </NeoButton>
            <NeoButtonOutline href="/cv.pdf" download>
                <Download size={18} /> Download CV
            </NeoButtonOutline>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex gap-6 text-zinc-400 dark:text-zinc-600 justify-center">
            {/* <Code size={24} />
            <Layout size={24} />
            <Zap size={24} />
            <Terminal size={24} /> */}
            <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" />
            <img src="https://skillicons.dev/icons?i=ts" alt="TypeScript" />
            <img src="https://skillicons.dev/icons?i=nodejs" alt="Node.js" />
            <img src="https://skillicons.dev/icons?i=react" alt="React" />
            <img src="https://skillicons.dev/icons?i=next" alt="Next.js" />
            <img src="https://skillicons.dev/icons?i=vercel" alt="Vercel" />
            <img src="https://skillicons.dev/icons?i=docker" alt="Docker" />
            <img src="https://skillicons.dev/icons?i=aws" alt="AWS" />
            <img src="https://skillicons.dev/icons?i=postgresql" alt="PostgreSQL" />
            <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind CSS" />
            <img src="https://skillicons.dev/icons?i=git" alt="Git" />
            <img src="https://skillicons.dev/icons?i=github" alt="GitHub" />
        </div>
    </div>
);
