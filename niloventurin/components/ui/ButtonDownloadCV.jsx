"use client";

import { useEffect, useState } from "react";

const ButtonDownloadCV = ({ className = "" }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const savedTheme = localStorage.getItem("theme");
      setDarkMode(savedTheme === "dark");
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="/path/to/your-cv.pdf" // ajuste o path do seu CV
      download
      className={`relative flex items-center justify-center gap-3 px-8 py-3
        ${
          darkMode
            ? "bg-background text-lime-500"
            : "bg-foreground text-lime-500"
        }
        border border-border rounded-xl
        shadow-md hover:shadow-lg
        transition-all hover:-translate-y-1
        ${className}`}
    >
      Download CV
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          boxShadow: darkMode
            ? "4px 4px 0 #7ccf00" // sombra clara no modo dark
            : "4px 4px 0 #7ccf00", // sombra preta no modo light
        }}
      ></div>
    </a>
  );
};

export default ButtonDownloadCV;
