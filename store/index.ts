import create, { State, StateCreator } from "zustand";
import produce, { Draft } from "immer";

const immer = <T extends State>(config: StateCreator<T>): StateCreator<T> => 
    (set, get, api) => config((partial, replace) => {
        const nextState =
            typeof partial === "function"
                ? produce(partial as (state: Draft<T>) => T)
                : partial as T;
        return set(nextState, replace);
    }, get, api);

interface Store {
    state: {
        query: string;
    };
    actions: {
        setQuery: (query: string) => void;
    }
}

export const useStore = create<Store>(immer(set => ({
    state: {
        query: "",
    },
    actions: {
        setQuery: query => set(store => {
            store.state.query = query;
        }),
    },
})));