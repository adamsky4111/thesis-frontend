import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { AccountStreamsState } from "./types";
import { RootState } from "../../types";
import { state } from "./state";

const namespaced = true;

export const accountStreams: Module<AccountStreamsState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
