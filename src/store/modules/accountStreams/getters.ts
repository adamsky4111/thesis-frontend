import { GetterTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store/types";
import { GetterTypes } from "./types";
import { StreamModel } from "@/model/StreamModel";

export type Getters = {
  [GetterTypes.GET_ITEMS](state: State): Array<StreamModel>;
  [GetterTypes.GET_PAGES](state: State): number;
  [GetterTypes.GET_TOTAL](state: State): number;
};

export const getters: GetterTree<State, RootState> & Getters = {
  [GetterTypes.GET_ITEMS]: (state) => {
    return state.items;
  },
  [GetterTypes.GET_PAGES]: (state) => {
    return state.pages;
  },
  [GetterTypes.GET_TOTAL]: (state) => {
    return state.total;
  },
};
