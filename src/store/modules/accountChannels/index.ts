import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { AccountChannelsState } from "./types";
import { RootState } from "../../types";
import { state } from "./state";

const namespaced = true;

export const accountChannels: Module<AccountChannelsState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
