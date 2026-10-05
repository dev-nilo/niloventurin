import { useCallback, useEffect, useReducer } from "react";
import {
    initialNavigatorState,
    navigate,
    NavigatorIntent,
    NavigatorState,
} from "./sectionNavigator";

export interface SectionNavigator {
    index: number;
    next: () => void;
    prev: () => void;
    goTo: (index: number) => void;
}

const LOCK_MS = 800;

export const useSectionNavigator = (total: number): SectionNavigator => {
    const [state, dispatch] = useReducer(
        (s: NavigatorState, intent: NavigatorIntent) => navigate(s, intent, total),
        initialNavigatorState,
    );

    useEffect(() => {
        if (!state.locked) return;
        const timer = setTimeout(() => dispatch({ type: "unlock" }), LOCK_MS);
        return () => clearTimeout(timer);
    }, [state.locked]);

    const next = useCallback(() => dispatch({ type: "next" }), []);
    const prev = useCallback(() => dispatch({ type: "prev" }), []);
    const goTo = useCallback((index: number) => dispatch({ type: "goTo", index }), []);

    return { index: state.index, next, prev, goTo };
};
