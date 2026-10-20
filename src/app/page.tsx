"use client";

import {
  Home as HomeIcon,
  User,
  Briefcase,
  FolderGit2,
  MessageSquare,
  Tag,
} from "lucide-react";

import { ThemeProvider } from "../context/ThemeContext";
import { useScrollSections } from "../navigation/useScrollSections";
import { TopBar } from "../components/layout/TopBar";
import { Dock } from "../components/layout/Dock";
import { ScrollSection } from "../components/layout/ScrollSection";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Experience } from "../components/sections/Experience";
import { Projects } from "../components/sections/Projects";
import { Services } from "../components/sections/Services";
import { Contact } from "../components/sections/Contact";
import { NavItem } from "../types";

const SECTIONS_CONFIG: NavItem[] = [
  { id: "home", label: "Home", component: <Hero />, icon: HomeIcon },
  { id: "about", label: "About", component: <About />, icon: User },
  {
    id: "experience",
    label: "Experience",
    component: <Experience />,
    icon: Briefcase,
  },
  {
    id: "projects",
    label: "Projects",
    component: <Projects />,
    icon: FolderGit2,
  },
  {
    id: "services",
    label: "Services",
    component: <Services />,
    icon: Tag,
  },
  {
    id: "contact",
    label: "Contact",
    component: <Contact />,
    icon: MessageSquare,
  },
];

export default function Home() {
  const sections = useScrollSections(SECTIONS_CONFIG.length);
  const currentSection = sections.index;

  return (
    <ThemeProvider>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="bg-white dark:bg-zinc-950 h-screen w-full text-zinc-900 dark:text-zinc-100 transition-colors duration-300 overflow-hidden flex flex-col">
        {/* <TopBar onLogoClick={() => setCurrentSection(0)} /> */}

        <main
          ref={sections.containerRef}
          className="no-scrollbar flex-1 relative w-full h-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory"
        >
          {SECTIONS_CONFIG.map((section, index) => (
            <ScrollSection
              key={section.id}
              container={sections.containerRef}
              sectionRef={sections.sectionRefs[index]}
            >
              {section.component}
            </ScrollSection>
          ))}
        </main>

        <Dock
          items={SECTIONS_CONFIG}
          activeIndex={currentSection}
          onSelect={sections.goTo}
        />
      </div>
    </ThemeProvider>
  );
}
