export interface SectionStyle {
    opacity: number;
    scale: number;
    y: number;
    blur: number;
}

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

// Maps how far a section has entered (0 → 1 as its top reaches the top of
// the viewport) and left (0 → 1 as its bottom leaves the top) to the same
// look the old fade transition had at its start and end keyframes.
export const sectionStyleAt = (enter: number, exit: number): SectionStyle => {
    const e = clamp01(enter);
    const x = clamp01(exit);
    return {
        opacity: Math.min(e, 1 - x),
        scale: x > 0 ? 1 + 0.05 * x : 0.95 + 0.05 * e,
        y: 20 * (1 - e) - 20 * x,
        blur: 10 * (1 - e) + 10 * x,
    };
};

// The active section is the last one whose top has crossed the middle of
// the viewport, so tall sections stay active while scrolled through.
export const activeSectionIndex = (tops: number[], scrollTop: number, viewport: number): number => {
    const line = scrollTop + viewport / 2;
    let active = 0;
    tops.forEach((top, i) => {
        if (top <= line) active = i;
    });
    return active;
};
