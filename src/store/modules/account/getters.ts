import { GetterTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store/types";
import { GetterTypes } from "./types";
import { SettingsModel } from "@/model/SettingsModel";

export type Getters = {
  [GetterTypes.GET_SETTINGS](state: State): Array<SettingsModel>;
  [GetterTypes.GET_PAGES](state: State): number;
  [GetterTypes.GET_TOTAL](state: State): number;
};

export const getters: GetterTree<State, RootState> & Getters = {
  [GetterTypes.GET_SETTINGS]: (state) => {
    return state.settings;
  },
  [GetterTypes.GET_PAGES]: (state) => {
    return state.pages;
  },
  [GetterTypes.GET_TOTAL]: (state) => {
    return state.total;
  },
};
