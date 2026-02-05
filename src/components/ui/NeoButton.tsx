import { NeoBaseProps } from "../../types";

export const NeoButton = ({ children, onClick, className = "", href, download }: NeoBaseProps) => {
    const baseClass = `
    inline-flex items-center justify-center gap-2 px-6 py-3 font-bold
    bg-cyan-400 hover:bg-cyan-500 text-zinc-900
    border-2 border-zinc-900 rounded-lg
    shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]
    dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
    active:translate-x-[2px] active:translate-y-[2px]
    active:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]
    dark:active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]
    transition-all cursor-pointer select-none
    ${className}
  `;

    if (href) {
        return (
            <a href={href} className={baseClass} download={download} target={href.startsWith('http') ? "_blank" : undefined} rel="noreferrer">
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={baseClass}>
            {children}
        </button>
    );
};

export const NeoButtonOutline = ({ children, onClick, className = "", href, download }: NeoBaseProps) => {
    const baseClass = `
    inline-flex items-center justify-center gap-2 px-6 py-3 font-bold
    bg-transparent text-zinc-900 dark:text-zinc-100
    border-2 border-zinc-900 dark:border-zinc-100 rounded-lg
    shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]
    dark:shadow-[4px_4px_0px_0px_rgba(6,182,212,1)]
    hover:bg-zinc-100 dark:hover:bg-zinc-800
    active:translate-x-[2px] active:translate-y-[2px]
    active:shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]
    dark:active:shadow-[2px_2px_0px_0px_rgba(6,182,212,1)]
    transition-all cursor-pointer select-none
    ${className}
  `;

    if (href) {
        return <a href={href} className={baseClass} download={download} target={href.startsWith('http') ? "_blank" : undefined} rel="noreferrer">{children}</a>;
    }
    return <button onClick={onClick} className={baseClass}>{children}</button>;
};
