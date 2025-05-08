"use client";

import { useEffect, useState } from "react";

export default function CardWithShadow({ children, className = "" }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "dark");

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
    <div
      className={`relative bg-background dark:bg-card 
        border border-border rounded-xl 
        shadow-md hover:shadow-lg 
        transition-all hover:-translate-y-1 
        text-foreground hover:text-lime-500 
        ${className}`}
    >
      {children}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          boxShadow: isDarkMode ? "4px 4px 0 #d4d4d8" : "4px 4px 0 black",
        }}
      />
    </div>
  );
}
