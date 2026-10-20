import { createRef, RefObject, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { activeSectionIndex } from "./scrollSections";

export interface SectionNavigator {
    index: number;
    next: () => void;
    prev: () => void;
    goTo: (index: number) => void;
}

export interface ScrollSections extends SectionNavigator {
    containerRef: RefObject<HTMLElement | null>;
    sectionRefs: RefObject<HTMLElement | null>[];
}

const isTyping = (target: EventTarget | null) =>
    target instanceof HTMLElement &&
    (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

// Sections live in one natively scrolling container; the active index is
// derived from the scroll position and navigation just scrolls there.
export const useScrollSections = (total: number): ScrollSections => {
    const containerRef = useRef<HTMLElement>(null);
    const sectionRefs = useMemo(
        () => Array.from({ length: total }, () => createRef<HTMLElement>()),
        [total],
    );
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const reduceMotion = useReducedMotion();

    const { scrollY } = useScroll({ container: containerRef });
    useMotionValueEvent(scrollY, "change", (y) => {
        const container = containerRef.current;
        if (!container) return;
        const tops = sectionRefs.map((ref) => ref.current?.offsetTop ?? 0);
        setIndex(activeSectionIndex(tops, y, container.clientHeight));
    });

    const goTo = useCallback(
        (target: number) => {
            if (target < 0 || target >= total) return;
            sectionRefs[target].current?.scrollIntoView({
                behavior: reduceMotion ? "auto" : "smooth",
                block: "start",
            });
        },
        [sectionRefs, total, reduceMotion],
    );
    const next = useCallback(() => goTo(indexRef.current + 1), [goTo]);
    const prev = useCallback(() => goTo(indexRef.current - 1), [goTo]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isTyping(e.target)) return;
            if (e.key === "ArrowDown" || e.key === "PageDown") {
                e.preventDefault();
                next();
            } else if (e.key === "ArrowUp" || e.key === "PageUp") {
                e.preventDefault();
                prev();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [next, prev]);

    return { index, next, prev, goTo, containerRef, sectionRefs };
};
