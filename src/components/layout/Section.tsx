import { CSSProperties, ReactNode } from "react";
import { MaskedText } from "../ui/MaskedText";

// Every section fills at least the screen below the 3rem top bar, with its
// content centered vertically; taller sections just grow.
export const FULL_SCREEN = "flex min-h-[calc(100svh-3rem)] flex-col justify-center";

export const padIndex = (n: number) => String(n).padStart(2, "0");

// Offsets a .reveal element's scroll window so siblings enter one after another.
export const stagger = (i: number) => ({ "--reveal-i": i }) as CSSProperties;

// Frosted glass for bars that content scrolls under.
export const GLASS = "bg-bg/60 backdrop-blur-xl backdrop-saturate-150";

// Shared frame for the numbered sections. The "01/" label and title form a
// glass bar that sticks under the 3rem top bar while the section scrolls
// past; the intro, action and content scroll beneath it.
export const Section = ({
  id,
  index,
  title,
  intro,
  action,
  children,
}: {
  id: string;
  index: number;
  title: string;
  intro?: string;
  action?: ReactNode;
  children: ReactNode;
}) => (
  <section id={id} className={`scroll-mt-12 border-t border-line ${FULL_SCREEN}`}>
    <header className={`sticky top-12 z-40 border-b border-line ${GLASS}`}>
      <div className="mx-auto flex w-full max-w-6xl items-baseline gap-4 px-4 py-4 sm:px-6 md:py-5">
        <p className="reveal hud-label text-muted">{padIndex(index)}/</p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          <MaskedText text={title} />
        </h2>
      </div>
    </header>
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-12 sm:px-6 md:py-16">
      {(intro || action) && (
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          {intro && (
            <p className="reveal max-w-xl text-muted" style={stagger(1)}>
              {intro}
            </p>
          )}
          {action && (
            <div className="reveal" style={stagger(2)}>
              {action}
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  </section>
);
