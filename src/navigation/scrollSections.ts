// The active section is the last one whose top has crossed the middle of
// the viewport, so tall sections stay active while scrolled through. At the
// very bottom the last section wins, since a short one may never reach the
// middle.
export const activeSectionIndex = (
    tops: number[],
    scrollTop: number,
    viewport: number,
    scrollHeight = Infinity,
): number => {
    if (tops.length > 0 && scrollTop + viewport >= scrollHeight - 1) return tops.length - 1;
    const line = scrollTop + viewport / 2;
    let active = 0;
    tops.forEach((top, i) => {
        if (top <= line) active = i;
    });
    return active;
};
