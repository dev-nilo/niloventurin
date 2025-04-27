"use client";

import { useEffect, useState } from "react";

const ButtonContactMe = ({ isMobile = false, className = "" }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  return (
    <a
      href="#contact"
      className={`relative flex items-center justify-center gap-3 
                  px-8 py-3 bg-background dark:bg-card 
                  border border-border rounded-xl shadow-md 
                  hover:shadow-lg hover:scale-105 transition-all duration-300 
                  text-foreground hover:text-lime-500 
                  ${isMobile ? "w-full" : "hidden lg:flex"}
                  ${className}`}
    >
      Contact me
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          boxShadow: darkMode
            ? "4px 4px 0 #d4d4d8" // sombra clara no dark
            : "4px 4px 0 black", // sombra preta no light
        }}
      ></div>
    </a>
  );
};

export default ButtonContactMe;
