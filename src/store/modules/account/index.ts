import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { SettingsState } from "./types";
import { RootState } from "../../types";
import { state } from "./state";

const namespaced = true;

export const account: Module<SettingsState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
