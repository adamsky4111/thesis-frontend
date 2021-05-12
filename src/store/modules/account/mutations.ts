import { MutationTree } from "vuex";
import { MutationTypes } from "./types";
import { State } from "./state";
import { SettingsModel } from "@/model/SettingsModel";

export type Mutations<S = State> = {
  [MutationTypes.ADD_SETTINGS](state: S, payload: SettingsModel): void;
  [MutationTypes.REMOVE_SETTINGS](state: S, payload: SettingsModel): void;
  [MutationTypes.EDIT_SETTINGS](state: S, payload: SettingsModel): void;
  [MutationTypes.SET_SETTINGS](state: S, payload: Array<SettingsModel>): void;
  [MutationTypes.SET_PAGES](state: S, payload: number): void;
  [MutationTypes.SET_TOTAL](state: S, payload: number): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.ADD_SETTINGS](state, payload: SettingsModel) {
    state.settings.push(payload);
  },
  [MutationTypes.REMOVE_SETTINGS](state, payload: SettingsModel) {
    const index = state.settings.findIndex(({ id }) => id === payload.id);
    state.settings.splice(index, 1);
  },
  [MutationTypes.EDIT_SETTINGS](state, payload: SettingsModel) {
    const index = state.settings.findIndex(({ id }) => id === payload.id);
    state.settings[index] = payload;
  },
  [MutationTypes.SET_SETTINGS](state, payload: Array<SettingsModel>) {
    state.settings = payload;
  },
  [MutationTypes.SET_PAGES](state, payload: number) {
    state.pages = payload;
  },
  [MutationTypes.SET_TOTAL](state, payload: number) {
    state.total = payload;
  },
};
