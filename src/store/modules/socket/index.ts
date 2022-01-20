import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { SocketState } from "./types";
import { RootState } from "../../types";
import { state } from "./state";

const namespaced = true;

export const socket: Module<SocketState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
