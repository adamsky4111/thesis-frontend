import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { StreamState } from "./types";
import { RootState } from "../../types";
import { state } from "./state";

const namespaced = true;

export const streams: Module<StreamState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
