import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import { ActionTypes, MutationTypes } from "./types";
import { Mutations } from "./mutations";
import { RootState } from "@/store/types";

export interface Actions {
  [ActionTypes.TOGGLE_MENU]({ commit }: AugmentedActionContext): void;
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export const actions: ActionTree<State, RootState> & Actions = {
  [ActionTypes.TOGGLE_MENU]({ state, commit }) {
    commit(MutationTypes.SET_IS_MENU_ACTIVE, !state.isMenuActive);
  },
};
