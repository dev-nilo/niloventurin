export const TopBar = ({ onLogoClick }: { onLogoClick: () => void }) => (
    <div className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex items-center justify-between pointer-events-none">
        <button
            onClick={onLogoClick}
            className="flex items-center gap-1 pointer-events-auto bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 transition-all hover:bg-white dark:hover:bg-zinc-900"
        >

            <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Nilo Venturin
            </span>
        </button>
    </div>
);
