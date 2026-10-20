"use client";

import { useEffect } from "react";

// Marks .reveal elements and masked headings as visible the first time they
// come into view (slightly above the bottom edge, so the motion happens where
// the reader is looking). CSS does the animating; this only flips the class.
export const RevealObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    document.querySelectorAll(".reveal, .mask-root").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
};
