import { describe, expect, it } from "vitest";
import { activeSectionIndex, sectionStyleAt } from "./scrollSections";

describe("sectionStyleAt", () => {
    it("is fully visible once entered and before leaving", () => {
        expect(sectionStyleAt(1, 0)).toEqual({ opacity: 1, scale: 1, y: 0, blur: 0 });
    });

    it("matches the old enter keyframe before entering", () => {
        expect(sectionStyleAt(0, 0)).toEqual({ opacity: 0, scale: 0.95, y: 20, blur: 10 });
    });

    it("matches the old exit keyframe once gone", () => {
        expect(sectionStyleAt(1, 1)).toEqual({ opacity: 0, scale: 1.05, y: -20, blur: 10 });
    });

    it("interpolates linearly with scroll", () => {
        const half = sectionStyleAt(0.5, 0);
        expect(half.opacity).toBe(0.5);
        expect(half.scale).toBeCloseTo(0.975);
        expect(half.blur).toBe(5);
    });

    it("clamps out-of-range progress", () => {
        expect(sectionStyleAt(2, -1)).toEqual(sectionStyleAt(1, 0));
    });
});

describe("activeSectionIndex", () => {
    const tops = [0, 800, 1600, 3000];

    it("starts on the first section", () => {
        expect(activeSectionIndex(tops, 0, 800)).toBe(0);
    });

    it("switches once a section crosses the middle of the viewport", () => {
        expect(activeSectionIndex(tops, 399, 800)).toBe(0);
        expect(activeSectionIndex(tops, 400, 800)).toBe(1);
    });

    it("keeps a tall section active while scrolling through it", () => {
        expect(activeSectionIndex(tops, 2400, 800)).toBe(2);
        expect(activeSectionIndex(tops, 2600, 800)).toBe(3);
    });
});
