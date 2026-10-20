"use client";

import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Github, Linkedin } from "../ui/BrandIcons";
import { AppLink } from "../ui/AppLink";
import { useTheme } from "../../context/ThemeContext";
import { useActiveSection } from "../../navigation/useActiveSection";
import { PROFILE } from "../../content/profile";

interface NavItem {
  id: string;
  label: string;
}

const CELL = "flex w-12 items-center justify-center border-l border-line text-muted hover:bg-ink hover:text-bg";

export const TopBar = ({ items, environment }: { items: NavItem[]; environment: string | null }) => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  // "home" is tracked too, so nothing is highlighted while the hero is on screen.
  const ids = ["home", ...items.map((item) => item.id)];
  const activeId = ids[useActiveSection(ids)];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur-sm">
      <div className="flex h-12 items-stretch justify-between">
        <div className="flex min-w-0 items-stretch">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="flex items-center border-r border-line px-4 font-semibold tracking-tight whitespace-nowrap hover:opacity-70 sm:px-5"
          >
            {PROFILE.name}
          </a>
          <nav className="hidden items-stretch px-1.5 lg:flex">
            {items.map((item) => {
              const active = item.id === activeId;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={active ? "location" : undefined}
                  className="group hud-label flex items-center px-1"
                >
                  <span
                    className={`flex items-center gap-1.5 px-1.5 py-0.5 group-hover:bg-ink group-hover:text-bg ${
                      active ? "bg-ink text-bg" : "text-muted"
                    }`}
                  >
                    {active && <span className="size-1.5 bg-cyan-500" />}
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex shrink-0 items-stretch">
          {environment && (
            <span className="hud-label flex items-center border-l border-line bg-amber-400 px-3 font-bold text-zinc-950">
              {environment}
            </span>
          )}
          <AppLink href={PROFILE.contact.github} aria-label="GitHub" className={`${CELL} hidden sm:flex`}>
            <Github className="h-4 w-4" />
          </AppLink>
          <AppLink href={PROFILE.contact.linkedin} aria-label="LinkedIn" className={`${CELL} hidden sm:flex`}>
            <Linkedin className="h-4 w-4" />
          </AppLink>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className={`${CELL} cursor-pointer`}
          >
            {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`${CELL} cursor-pointer lg:hidden`}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line lg:hidden">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`hud-label flex items-center gap-2 border-b border-line px-4 py-4 hover:bg-ink hover:text-bg ${
                item.id === activeId ? "text-ink" : "text-muted"
              }`}
            >
              {item.id === activeId && <span className="size-1.5 bg-cyan-500" />}
              {item.label}
            </a>
          ))}
          <div className="flex sm:hidden">
            <AppLink href={PROFILE.contact.github} className="hud-label flex-1 px-4 py-4 text-muted hover:bg-ink hover:text-bg">
              GitHub
            </AppLink>
            <AppLink
              href={PROFILE.contact.linkedin}
              className="hud-label flex-1 border-l border-line px-4 py-4 text-muted hover:bg-ink hover:text-bg"
            >
              LinkedIn
            </AppLink>
          </div>
        </nav>
      )}
    </header>
  );
};
