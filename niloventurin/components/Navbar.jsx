"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import ButtonContactMe from "./ButtonContactMe";

const Navbar = () => {
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
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Repositories", href: "#repo" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-6 lg:px-8 xl:px-[8%]">
      {/* Logo */}
      <a href="#top" className="flex items-center py-2">
        <h1 className="text-2xl font-extrabold flex items-center">
          NiloVenturin
          <span className="text-lime-500 text-4xl leading-none mt-[-10px]">
            .
          </span>
        </h1>
      </a>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-2">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="transition-colors hover:text-lime-500"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Contact Me Button - Desktop */}
        <div className="hidden lg:flex">
          <ButtonContactMe />
        </div>

        {/* Dark Mode Toggle */}
        <button
          aria-label="Toggle Theme"
          onClick={toggleDarkMode}
          className="p-2 rounded-full transition-colors hover:bg-accent dark:hover:bg-accent hover:text-lime-500"
        >
          {darkMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Mobile Menu Button */}
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-semibold transition-colors hover:text-lime-500"
            >
              {link.label}
            </a>
          ))}

          {/* Contact Me Button - Mobile */}
          <ButtonContactMe isMobile className="mt-4" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
