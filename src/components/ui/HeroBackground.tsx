"use client";

import Grainient from "./Grainient";
import { useTheme } from "../../context/ThemeContext";

// React Bits "satin" preset. In the light theme Grainient's lightMode turns
// the same ramp into pale tints on the page's off-white instead of pure white.
const SATIN = ["#0c0c0f", "#3f3f46", "#a1a1aa", "#fafafa"];

export const HeroBackground = () => {
  const { theme } = useTheme();

  return (
    <>
      <Grainient
        colors={SATIN}
        angle={40}
        bands={2}
        silk={1}
        lightMode={theme === "light"}
        lightBase="#f2f1ee"
        className="absolute! inset-0 -z-10"
      />
      {/* Keeps text readable over the satin's high-contrast bands, in the
          page's own background color: an even veil on narrow screens, a
          fade from the text side on wider ones. */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-bg/60 md:bg-transparent md:bg-[linear-gradient(90deg,color-mix(in_oklab,var(--bg)_85%,transparent)_0%,color-mix(in_oklab,var(--bg)_60%,transparent)_45%,transparent_85%)]" />
    </>
  );
};
