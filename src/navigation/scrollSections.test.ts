import { describe, expect, it } from "vitest";
import { activeSectionIndex } from "./scrollSections";

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

    it("picks the last section at the bottom of the page", () => {
        expect(activeSectionIndex([0, 800, 1600, 3300], 2700, 800, 3500)).toBe(3);
        expect(activeSectionIndex([0, 800, 1600, 3300], 2600, 800, 3500)).toBe(2);
    });
});
