"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Home as HomeIcon,
  User,
  Briefcase,
  FolderGit2,
  MessageSquare,
} from "lucide-react";

import { ThemeProvider } from "../context/ThemeContext";
import { useNavigationController } from "../hooks/useNavigationController";
import { TopBar } from "../components/layout/TopBar";
import { Dock } from "../components/layout/Dock";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { Repositories } from "../components/sections/Repositories";
import { Contact } from "../components/sections/Contact";
import { NavItem } from "../types";

const SECTIONS_CONFIG: NavItem[] = [
  { id: "home", label: "Home", component: <Hero />, icon: HomeIcon },
  { id: "about", label: "About", component: <About />, icon: User },
  {
    id: "services",
    label: "Services",
    component: <Services />,
    icon: Briefcase,
  },
  {
    id: "repositories",
    label: "Repositories",
    component: <Repositories />,
    icon: FolderGit2,
  },
  {
    id: "contact",
    label: "Contact",
    component: <Contact />,
    icon: MessageSquare,
  },
];

export default function Home() {
  const { currentSection, setCurrentSection } = useNavigationController(
    SECTIONS_CONFIG.length,
  );

  return (
    <ThemeProvider>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="bg-white dark:bg-zinc-950 h-screen w-full text-zinc-900 dark:text-zinc-100 transition-colors duration-300 overflow-hidden flex flex-col">
        {/* <TopBar onLogoClick={() => setCurrentSection(0)} /> */}

        <main className="flex-1 relative w-full h-full overflow-y-auto overflow-x-hidden pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, scale: 0.95, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full absolute top-0 left-0"
            >
              {SECTIONS_CONFIG[currentSection].component}
            </motion.div>
          </AnimatePresence>
        </main>

        <Dock
          items={SECTIONS_CONFIG}
          activeIndex={currentSection}
          setActiveIndex={setCurrentSection}
        />
      </div>
    </ThemeProvider>
  );
}
