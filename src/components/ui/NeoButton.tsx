import { ReactNode } from "react";
import { AppLink } from "./AppLink";

type Variant = "solid" | "outline";

type NeoButtonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & (
  | { href: string; download?: boolean; onClick?: never }
  | { onClick: () => void; href?: never; download?: never }
);

const BASE = `
  inline-flex items-center justify-center gap-2 px-6 py-3 font-bold
  border-2 rounded-lg
  active:translate-x-[2px] active:translate-y-[2px]
  transition-all cursor-pointer select-none
`;

const VARIANTS: Record<Variant, string> = {
  solid: `
    bg-cyan-400 hover:bg-cyan-500 text-zinc-900 border-zinc-900
    shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]
    dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
    active:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]
    dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]
  `,
  outline: `
    bg-transparent text-zinc-900 dark:text-zinc-100
    border-zinc-900 dark:border-zinc-100
    hover:bg-zinc-100 dark:hover:bg-zinc-800
    shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]
    dark:shadow-[4px_4px_0px_0px_rgba(6,182,212,1)]
    active:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]
    dark:active:shadow-[2px_2px_0px_0px_rgba(6,182,212,1)]
  `,
};

export const NeoButton = ({
  children,
  variant = "solid",
  className = "",
  ...action
}: NeoButtonProps) => {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;

  if (action.href !== undefined) {
    return (
      <AppLink href={action.href} download={action.download} className={classes}>
        {children}
      </AppLink>
    );
  }

  return (
    <button type="button" onClick={action.onClick} className={classes}>
      {children}
    </button>
  );
};
