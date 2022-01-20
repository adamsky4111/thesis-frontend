import { GetterTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store/types";
import { GetterTypes } from "./types";

export type Getters = {
  [GetterTypes.IS_MENU_ACTIVE](state: State): boolean;
};

export const getters: GetterTree<State, RootState> & Getters = {
  [GetterTypes.IS_MENU_ACTIVE]: (state) => {
    return state.isMenuActive;
  },
};
