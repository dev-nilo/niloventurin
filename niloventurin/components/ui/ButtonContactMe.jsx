"use client";

import { useEffect, useState } from "react";

const ButtonContactMe = ({ className = "" }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Primeira leitura (ao carregar a página)
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");

    // Criar um observer de mudança
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.classList.contains("dark");
      setIsDarkMode(theme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#contact"
      className={`relative flex items-center justify-center gap-3 px-8 py-3 
        bg-background
        border border-border rounded-xl 
        shadow-md hover:shadow-lg 
        transition-all hover:-translate-y-1 
        text-foreground hover:text-lime-500
        ${className}`}
    >
      Contact me
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          boxShadow: isDarkMode
            ? "4px 4px 0 #d4d4d8" // sombra clara no dark
            : "4px 4px 0 black", // sombra preta no light
        }}
      ></div>
    </a>
  );
};

export default ButtonContactMe;
