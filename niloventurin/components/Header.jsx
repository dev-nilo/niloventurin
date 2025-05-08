"use client";

import { Code } from "lucide-react";
import ButtonContactMe from "./ui/ButtonContactMe";
import ButtonDownloadCV from "./ui/ButtonDownloadCV";

const Header = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-6rem)] max-w-5xl mx-auto px-4">
      {/* Avatar */}
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1741411250340-d5a938350c21?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sinho brabo"
          className="rounded-full w-32 h-32 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Heading */}
      <header className="flex flex-col items-center gap-4">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground">
          Hi! I'm Nilo Venturin
        </h2>

        <h1 className="text-3xl sm:text-5xl lg:text-[66px] font-extrabold text-foreground leading-tight">
          Front-End Dev based in Brazil
        </h1>

        <p className="max-w-2xl text-muted-foreground text-sm sm:text-base md:text-lg mt-4">
          I'm a passionate Front-end Developer with strong focus on performance,
          scalability, and developer experience.
          <br />
          Currently working with Next.js, React, and TailwindCSS at an
          enterprise level.
          <br />
          <span className="inline-block mt-4 font-semibold text-primary">
            When I'm not coding, I’m saving lives – literally! 🧯🔥
          </span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
          <ButtonContactMe />
          <ButtonDownloadCV />
        </div>
      </header>
    </section>
  );
};

export default Header;
