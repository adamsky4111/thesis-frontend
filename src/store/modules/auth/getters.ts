import { GetterTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store/types";

export type Getters = {
  user(state: State): Record<never, never>;
  roles(state: State): Array<string>;
  token(state: State): string | null;
};

export const getters: GetterTree<State, RootState> & Getters = {
  user: (state) => {
    return state.user;
  },
  roles: (state) => {
    return state.roles;
  },
  token: (state) => {
    return state.token;
  },
};
