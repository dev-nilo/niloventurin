import { ReactNode } from "react";
import { AppLink } from "./AppLink";

type Variant = "solid" | "outline";

const BASE = `
  inline-flex h-11 items-center justify-center gap-2 px-5
  font-mono text-[11px] font-bold uppercase tracking-[0.12em] whitespace-nowrap
  border border-ink transition-colors duration-150 cursor-pointer select-none
`;

const VARIANTS: Record<Variant, string> = {
  solid: "bg-ink text-bg hover:bg-transparent hover:text-ink",
  outline: "bg-transparent text-ink hover:bg-ink hover:text-bg",
};

export const Button = ({
  children,
  href,
  download,
  variant = "solid",
  className = "",
}: {
  children: ReactNode;
  href: string;
  download?: boolean;
  variant?: Variant;
  className?: string;
}) => (
  <AppLink href={href} download={download} className={`${BASE} ${VARIANTS[variant]} ${className}`}>
    {children}
  </AppLink>
);
