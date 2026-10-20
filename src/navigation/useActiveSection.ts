import { useEffect, useState } from "react";
import { activeSectionIndex } from "./scrollSections";

// Returns the index into `ids` of the section on screen, recomputed at most
// once per frame while the window scrolls or resizes.
export const useActiveSection = (ids: string[]): number => {
    const [index, setIndex] = useState(0);
    const key = ids.join(",");

    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            const tops = key
                .split(",")
                .map((id) => (document.getElementById(id)?.getBoundingClientRect().top ?? 0) + window.scrollY);
            setIndex(
                activeSectionIndex(
                    tops,
                    window.scrollY,
                    window.innerHeight,
                    document.documentElement.scrollHeight,
                ),
            );
        };
        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", schedule);
        };
    }, [key]);

    return index;
};
