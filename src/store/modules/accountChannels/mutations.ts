import { MutationTree } from "vuex";
import { MutationTypes } from "./types";
import { State } from "./state";
import { ChannelModel } from "@/model/ChannelModel";

export type Mutations<S = State> = {
  [MutationTypes.SET_ITEMS](state: S, payload: Array<ChannelModel>): void;
  [MutationTypes.SET_PAGES](state: S, payload: number): void;
  [MutationTypes.SET_TOTAL](state: S, payload: number): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_ITEMS](state, payload: Array<ChannelModel>) {
    state.items = payload;
  },
  [MutationTypes.SET_PAGES](state, payload: number) {
    state.pages = payload;
  },
  [MutationTypes.SET_TOTAL](state, payload: number) {
    state.total = payload;
  },
};
