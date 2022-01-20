import { MutationTree } from "vuex";
import { MutationTypes } from "./types";
import { State } from "./state";

export type Mutations<S = State> = {
  [MutationTypes.SET_IS_MENU_ACTIVE](state: S, payload: boolean): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_IS_MENU_ACTIVE](state, payload: boolean) {
    state.isMenuActive = payload;
  },
};
