"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import ButtonContactMe from "./buttons/ButtonContactMe";

const Navbar = ({ onNavigate, activeIndex }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { label: "Home" },
    { label: "About" },
    { label: "Services" },
    { label: "Repositories" },
    { label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-6 lg:px-8 xl:px-[8%]">
      {/* Logo */}
      <button onClick={() => onNavigate(0)} className="flex items-center py-2">
        <h1 className="text-2xl font-extrabold flex items-center">
          NiloVenturin
          <span className="text-lime-500 text-4xl leading-none mt-[-10px]">
            .
          </span>
        </h1>
      </button>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-2">
        {navLinks.map((link, index) => (
          <li key={link.label}>
            <button
              onClick={() => onNavigate(index)}
              className={`relative px-1 transition-colors ${
                activeIndex === index
                  ? "text-lime-500 font-semibold"
                  : "hover:text-lime-500"
              } group`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] w-full origin-left transform transition-transform duration-300 bg-lime-500 scale-x-0 group-hover:scale-x-100 ${
                  activeIndex === index ? "scale-x-100" : ""
                }`}
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex">
          <ButtonContactMe />
        </div>

        <button
          aria-label="Toggle Theme"
          onClick={toggleDarkMode}
          className="p-2 rounded-full transition-colors hover:bg-accent dark:hover:bg-accent hover:text-lime-500"
        >
          {darkMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <button
          onClick={toggleMenu}
          className="flex md:hidden p-2 rounded-full transition-colors hover:bg-accent dark:hover:bg-accent hover:text-lime-500"
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute top-20 right-5 flex flex-col gap-6 p-6 bg-background dark:bg-card rounded-xl shadow-lg md:hidden animate-fade-in z-50">
          {navLinks.map((link, index) => (
            <button
              key={link.label}
              onClick={() => {
                setIsMenuOpen(false);
                onNavigate(index);
              }}
              className="text-lg font-semibold transition-colors hover:text-lime-500"
            >
              {link.label}
            </button>
          ))}
          <ButtonContactMe isMobile className="mt-4" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
