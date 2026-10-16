import { ENVIRONMENT, environmentLabel } from "../../environment/environment";

export const EnvironmentBanner = () => {
    const label = environmentLabel(ENVIRONMENT);
    if (!label) return null;

    return (
        <div className="fixed top-0 right-0 z-50 pointer-events-none m-2 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-950 shadow">
            {label}
        </div>
    );
};
