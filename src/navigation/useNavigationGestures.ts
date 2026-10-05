import { useEffect, useRef } from "react";
import { SectionNavigator } from "./useSectionNavigator";

const WHEEL_THRESHOLD = 50; // ignores small trackpad deltas
const SWIPE_THRESHOLD = 50;
const WHEEL_DEBOUNCE_MS = 50;

// True when `target` or an ancestor can still scroll vertically in the
// direction of `deltaY`, so the gesture belongs to that element, not to
// section navigation.
export const canScrollWithin = (target: EventTarget | null, deltaY: number): boolean => {
    let el = target instanceof Element ? target : null;
    while (el && el !== document.documentElement) {
        const { overflowY } = getComputedStyle(el);
        const scrollable =
            (overflowY === "auto" || overflowY === "scroll") &&
            el.scrollHeight > el.clientHeight;
        if (scrollable) {
            const atTop = el.scrollTop <= 0;
            const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
            if ((deltaY > 0 && !atBottom) || (deltaY < 0 && !atTop)) return true;
        }
        el = el.parentElement;
    }
    return false;
};

// Input adapter: translates wheel, keyboard and touch gestures into
// navigator moves, leaving gestures alone when an inner area can scroll.
export const useNavigationGestures = ({ next, prev }: SectionNavigator) => {
    const touchStart = useRef<{ y: number; target: EventTarget | null } | null>(null);

    useEffect(() => {
        let wheelTimeout: ReturnType<typeof setTimeout> | undefined;
        const move = (delta: number) => (delta > 0 ? next() : prev());

        const handleWheel = (e: WheelEvent) => {
            if (canScrollWithin(e.target, e.deltaY)) return;
            if (Math.abs(e.deltaY) > 10) e.preventDefault();
            if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;

            clearTimeout(wheelTimeout);
            wheelTimeout = setTimeout(() => move(e.deltaY), WHEEL_DEBOUNCE_MS);
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown" || e.key === "PageDown") next();
            else if (e.key === "ArrowUp" || e.key === "PageUp") prev();
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStart.current = { y: e.touches[0].clientY, target: e.target };
        };

        const handleTouchEnd = (e: TouchEvent) => {
            const start = touchStart.current;
            touchStart.current = null;
            if (!start) return;

            const diff = start.y - e.changedTouches[0].clientY;
            if (Math.abs(diff) <= SWIPE_THRESHOLD) return;
            if (canScrollWithin(start.target, diff)) return;
            move(diff);
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
            clearTimeout(wheelTimeout);
        };
    }, [next, prev]);
};
