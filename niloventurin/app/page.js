"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Repositories from "@/components/Repositories";
import Contact from "@/components/Contact";

export default function Home() {
  const [section, setSection] = useState(0);
  const sections = [
    <Header key="header" />,
    <About key="about" />,
    <Services key="services" />,
    <Repositories key="repositories" />,
    <Contact key="contact" />,
  ];
  const totalSections = sections.length;

  // Scroll e teclado
  useEffect(() => {
    let isThrottled = false;

    const next = () =>
      setSection((prev) => Math.min(totalSections - 1, prev + 1));
    const prev = () => setSection((prev) => Math.max(0, prev - 1));

    const handleWheel = (e) => {
      if (isThrottled) return;
      isThrottled = true;
      setTimeout(() => (isThrottled = false), 600); // evita transições múltiplas

      if (e.deltaY > 50) next();
      if (e.deltaY < -50) prev();
    };

    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") next();
      if (e.key === "ArrowUp") prev();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [totalSections]);

  return (
    <>
      <Navbar onNavigate={setSection} activeIndex={section} />

      <div className="relative h-screen w-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {sections[section]}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
