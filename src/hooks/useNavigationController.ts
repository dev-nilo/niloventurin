import { useState, useRef, useCallback, useEffect } from "react";

export const useNavigationController = (totalSections: number) => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const touchStart = useRef<number | null>(null);

    const changeSlide = useCallback((direction: "next" | "prev") => {
        if (isAnimating) return;

        if (direction === "next" && currentSection < totalSections - 1) {
            setIsAnimating(true);
            setCurrentSection((prev) => prev + 1);
            setTimeout(() => setIsAnimating(false), 800);
        } else if (direction === "prev" && currentSection > 0) {
            setIsAnimating(true);
            setCurrentSection((prev) => prev - 1);
            setTimeout(() => setIsAnimating(false), 800);
        }
    }, [currentSection, totalSections, isAnimating]);

    useEffect(() => {
        let wheelTimeout: NodeJS.Timeout;

        const handleWheel = (e: WheelEvent) => {
            // Prevents defaults to avoid browser scroll interference
            if (Math.abs(e.deltaY) > 10) e.preventDefault();

            if (isAnimating) return;

            if (Math.abs(e.deltaY) < 50) return; // Threshold for trackpads

            clearTimeout(wheelTimeout);
            wheelTimeout = setTimeout(() => {
                if (e.deltaY > 0) {
                    changeSlide("next");
                } else {
                    changeSlide("prev");
                }
            }, 50); // Small debounce
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown") changeSlide("next");
            else if (e.key === "ArrowUp") changeSlide("prev");
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStart.current = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (!touchStart.current) return;
            const touchEnd = e.changedTouches[0].clientY;
            const diff = touchStart.current - touchEnd;

            if (Math.abs(diff) > 50) { // Swipe threshold
                if (diff > 0) changeSlide("next");
                else changeSlide("prev");
            }
            touchStart.current = null;
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
    }, [changeSlide, isAnimating]);

    return { currentSection, setCurrentSection };
};
