import { MutationTree } from "vuex";
import { MutationTypes } from "./types";
import { State } from "./state";
import { ChannelModel } from "@/model/ChannelModel";
import { ChannelSubscribe } from "@/model/ChannelSubscribe";

export type Mutations<S = State> = {
  [MutationTypes.SET_ITEMS](state: S, payload: Array<ChannelModel>): void;
  [MutationTypes.SET_PAGES](state: S, payload: number): void;
  [MutationTypes.SET_TOTAL](state: S, payload: number): void;
  [MutationTypes.SET_SUBSCRIBED_ITEMS](
    state: S,
    payload: Array<ChannelSubscribe>
  ): void;
  [MutationTypes.SET_SUBSCRIBED_IS_LOADING](state: S, payload: boolean): void;
  [MutationTypes.SET_SUBSCRIBED_TOTAL](state: S, payload: number): void;
  [MutationTypes.SET_SUBSCRIBED_PAGES](state: S, payload: number): void;
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
  [MutationTypes.SET_SUBSCRIBED_ITEMS](
    state,
    payload: Array<ChannelSubscribe>
  ) {
    state.subscribed.items = payload;
  },
  [MutationTypes.SET_SUBSCRIBED_IS_LOADING](state, payload: boolean) {
    state.subscribed.loaded = !payload;
  },
  [MutationTypes.SET_SUBSCRIBED_TOTAL](state, payload: number) {
    state.subscribed.total = payload;
  },
  [MutationTypes.SET_SUBSCRIBED_PAGES](state, payload: number) {
    state.subscribed.pages = payload;
  },
};
