import { NeoBaseProps } from "../../types";

export const NeoCard = ({ children, className = "" }: Omit<NeoBaseProps, 'href' | 'download'>) => (
    <div
        className={`
      relative border-2 border-zinc-900 dark:border-zinc-100 
      bg-white dark:bg-zinc-900 
      rounded-xl p-6
      shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] 
      dark:shadow-[4px_4px_0px_0px_rgba(6,182,212,1)]
      transition-transform hover:-translate-y-1 hover:translate-x-1
      hover:shadow-[6px_6px_0px_0px_rgba(24,24,27,1)]
      dark:hover:shadow-[6px_6px_0px_0px_rgba(6,182,212,1)]
      ${className}
    `}
    >
        {children}
    </div>
);
