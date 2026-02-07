import { Code, Layout, Zap, Terminal, Mail, Download } from "lucide-react";
import { NeoButton, NeoButtonOutline } from "../ui/NeoButton";

export const Hero = () => (
  <div className="flex flex-col items-center justify-center min-h-full max-w-4xl mx-auto px-4 text-center py-12 md:py-20">
    <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-cyan-400/20 rounded-full blur-[60px] sm:blur-[100px] -z-10 pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-purple-400/20 rounded-full blur-[60px] sm:blur-[100px] -z-10 pointer-events-none" />

    <div className="space-y-4 mb-8">
      <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-400">
        Hi, I'm{" "}
        <span className="font-bold text-zinc-900 dark:text-zinc-100">
          Nilo Venturin
        </span>
      </h2>
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100 leading-none">
        SOFTWARE <br />
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

    <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap gap-4 sm:gap-6 text-zinc-400 dark:text-zinc-600 justify-center">
      {/* <Code size={24} />
            <Layout size={24} />
            <Zap size={24} />
            <Terminal size={24} /> */}
      {[
        "js",
        "ts",
        "nodejs",
        "react",
        "next",
        "vercel",
        "docker",
        "aws",
        "postgresql",
        "tailwind",
        "git",
        "github",
      ].map((skill) => (
        <img
          key={skill}
          src={`https://skillicons.dev/icons?i=${skill}`}
          alt={skill}
          className="h-8 w-8 sm:h-10 sm:w-10 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
        />
      ))}
    </div>
  </div>
);
