export interface NavigatorState {
    index: number;
    locked: boolean;
}

export type NavigatorIntent =
    | { type: "next" }
    | { type: "prev" }
    | { type: "goTo"; index: number }
    | { type: "unlock" };

export const initialNavigatorState: NavigatorState = { index: 0, locked: false };

// Pure transition: keeps the index in bounds and ignores moves while an
// animation is running. Any successful move locks until "unlock".
export const navigate = (
    state: NavigatorState,
    intent: NavigatorIntent,
    total: number,
): NavigatorState => {
    if (intent.type === "unlock") {
        return state.locked ? { ...state, locked: false } : state;
    }
    if (state.locked) return state;

    const target =
        intent.type === "next"
            ? state.index + 1
            : intent.type === "prev"
              ? state.index - 1
              : intent.index;

    if (target < 0 || target >= total || target === state.index) return state;
    return { index: target, locked: true };
};
