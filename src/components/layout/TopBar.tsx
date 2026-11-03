"use client";

import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Github, Linkedin } from "../ui/BrandIcons";
import { AppLink } from "../ui/AppLink";
import { LocaleLink } from "../ui/LocaleLink";
import { useTheme } from "../../context/ThemeContext";
import { useActiveSection } from "../../navigation/useActiveSection";
import type { UiText } from "../../content/ui";
import type { Locale } from "../../i18n/locales";
import { GLASS } from "./Section";

interface NavItem {
  id: string;
  label: string;
}

const CELL = "flex w-12 items-center justify-center border-l border-line text-muted hover:bg-ink hover:text-bg";

interface TopBarProps {
  items: NavItem[];
  environment: string | null;
  name: string;
  github: string;
  linkedin: string;
  ui: UiText;
  // The language the switch leads to.
  otherLocale: Locale;
}

export const TopBar = ({ items, environment, name, github, linkedin, ui, otherLocale }: TopBarProps) => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  // "home" is tracked too, so nothing is highlighted while the hero is on screen.
  const ids = ["home", ...items.map((item) => item.id)];
  const activeId = ids[useActiveSection(ids)];

  return (
    <header className={`sticky top-0 z-50 border-b border-line ${GLASS}`}>
      <div className="flex h-12 items-stretch justify-between">
        <div className="flex min-w-0 items-stretch">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="flex items-center border-r border-line px-4 font-semibold tracking-tight whitespace-nowrap hover:opacity-70 sm:px-5"
          >
            {name}
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
          <AppLink href={github} aria-label="GitHub" className={`${CELL} hidden sm:flex`}>
            <Github className="h-4 w-4" />
          </AppLink>
          <AppLink href={linkedin} aria-label="LinkedIn" className={`${CELL} hidden sm:flex`}>
            <Linkedin className="h-4 w-4" />
          </AppLink>
          <LocaleLink
            locale={otherLocale}
            aria-label={ui.switchLocale.label}
            title={ui.switchLocale.label}
            className={`${CELL} hud-label`}
          >
            {ui.switchLocale.short}
          </LocaleLink>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? ui.lightTheme : ui.darkTheme}
            className={`${CELL} cursor-pointer`}
          >
            {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? ui.closeMenu : ui.openMenu}
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
            <AppLink href={github} className="hud-label flex-1 px-4 py-4 text-muted hover:bg-ink hover:text-bg">
              GitHub
            </AppLink>
            <AppLink
              href={linkedin}
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
