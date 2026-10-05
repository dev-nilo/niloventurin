import { describe, expect, it } from "vitest";
import { initialNavigatorState, navigate } from "./sectionNavigator";

const TOTAL = 5;

describe("navigate", () => {
    it("moves forward and locks", () => {
        expect(navigate(initialNavigatorState, { type: "next" }, TOTAL)).toEqual({
            index: 1,
            locked: true,
        });
    });

    it("ignores moves while locked", () => {
        const locked = { index: 1, locked: true };
        expect(navigate(locked, { type: "next" }, TOTAL)).toBe(locked);
        expect(navigate(locked, { type: "goTo", index: 3 }, TOTAL)).toBe(locked);
    });

    it("unlocks so the next move goes through", () => {
        const unlocked = navigate({ index: 1, locked: true }, { type: "unlock" }, TOTAL);
        expect(navigate(unlocked, { type: "prev" }, TOTAL)).toEqual({ index: 0, locked: true });
    });

    it("stays in bounds at both ends", () => {
        const first = { index: 0, locked: false };
        const last = { index: TOTAL - 1, locked: false };
        expect(navigate(first, { type: "prev" }, TOTAL)).toBe(first);
        expect(navigate(last, { type: "next" }, TOTAL)).toBe(last);
    });

    it("jumps with goTo but rejects out-of-range and current index", () => {
        const state = { index: 2, locked: false };
        expect(navigate(state, { type: "goTo", index: 4 }, TOTAL)).toEqual({ index: 4, locked: true });
        expect(navigate(state, { type: "goTo", index: 9 }, TOTAL)).toBe(state);
        expect(navigate(state, { type: "goTo", index: 2 }, TOTAL)).toBe(state);
    });
});
