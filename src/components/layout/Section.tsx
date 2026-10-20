import { ReactNode } from "react";

export const padIndex = (n: number) => String(n).padStart(2, "0");

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
  title: ReactNode;
  intro?: string;
  action?: ReactNode;
  children: ReactNode;
}) => (
  <section id={id} className="scroll-mt-12 border-t border-line">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <header className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
        <div>
          <p className="hud-label mb-4 text-muted">{padIndex(index)}/</p>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">{title}</h2>
          {intro && <p className="mt-4 max-w-xl text-muted">{intro}</p>}
        </div>
        {action}
      </header>
      {children}
    </div>
  </section>
);
