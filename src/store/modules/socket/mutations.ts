import { MutationTree } from "vuex";
import { MutationTypes } from "./types";
import { State } from "./state";

export type Mutations<S = State> = {
  [MutationTypes.SET_SOCKET](state: S, payload: WebSocket | null): void;
  [MutationTypes.SET_EVENTS](state: S, payload: Array<string>): void;
  [MutationTypes.SET_HANDLERS](
    state: S,
    payload: Array<(...args: any[]) => void>
  ): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_SOCKET](state, payload: WebSocket | null) {
    state.socket = payload;
  },
  [MutationTypes.SET_EVENTS](state, payload) {
    state.registeredHandlers = payload;
  },
  [MutationTypes.SET_HANDLERS](state, payload) {
    state.messageHandlers = payload;
  },
};
