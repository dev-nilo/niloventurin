import { CSSProperties, ReactNode } from "react";
import { MaskedText } from "../ui/MaskedText";

// Every section fills at least the screen below the 3rem top bar, with its
// content centered vertically; taller sections just grow.
export const FULL_SCREEN = "flex min-h-[calc(100svh-3rem)] flex-col justify-center";

export const padIndex = (n: number) => String(n).padStart(2, "0");

// Offsets a .reveal element's scroll window so siblings enter one after another.
export const stagger = (i: number) => ({ "--reveal-i": i }) as CSSProperties;

// Shared frame for the numbered sections: a hairline on top, the "01/"
// label above the title, and an optional action on the right.
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
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <header className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
        <div>
          <p className="reveal hud-label mb-4 text-muted">{padIndex(index)}/</p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            <MaskedText text={title} />
          </h2>
          {intro && (
            <p className="reveal mt-4 max-w-xl text-muted" style={stagger(2)}>
              {intro}
            </p>
          )}
        </div>
        {action && (
          <div className="reveal" style={stagger(1)}>
            {action}
          </div>
        )}
      </header>
      {children}
    </div>
  </section>
);
