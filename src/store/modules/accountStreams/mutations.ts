import { MutationTree } from "vuex";
import { MutationTypes } from "./types";
import { State } from "./state";
import { StreamModel } from "@/model/StreamModel";
import { StreamScheduleModel } from "@/model/StreamScheduleModel";

export type Mutations<S = State> = {
  [MutationTypes.SET_ITEMS](state: S, payload: Array<StreamModel>): void;
  [MutationTypes.SET_SCHEDULED](
    state: S,
    payload: Array<StreamScheduleModel>
  ): void;
  [MutationTypes.SET_PAGES](state: S, payload: number): void;
  [MutationTypes.SET_TOTAL](state: S, payload: number): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_ITEMS](state, payload: Array<StreamModel>) {
    state.items = payload;
  },
  [MutationTypes.SET_SCHEDULED](state, payload: Array<StreamScheduleModel>) {
    state.schedule = payload;
  },
  [MutationTypes.SET_PAGES](state, payload: number) {
    state.pages = payload;
  },
  [MutationTypes.SET_TOTAL](state, payload: number) {
    state.total = payload;
  },
};
