import { MutationTree } from "vuex";
import { MutationTypes } from "./types";
import { State } from "./state";
import { UserModel } from "@/model/UserModel";

export type Mutations<S = State> = {
  [MutationTypes.SET_ROLES](state: S, payload: Array<string>): void;
  [MutationTypes.SET_TOKEN](state: S, payload: string): void;
  [MutationTypes.SET_USER](state: S, payload: UserModel): void;
  [MutationTypes.SET_AVATAR](state: S, payload: string): void;
  [MutationTypes.SET_REFRESH_TOKEN](state: S, payload: string): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_ROLES](state, payload: Array<string>) {
    state.roles = payload;
  },
  [MutationTypes.SET_TOKEN](state, payload: string) {
    state.token = payload;
  },
  [MutationTypes.SET_USER](state, payload: UserModel) {
    state.user = payload;
  },
  [MutationTypes.SET_AVATAR](state, payload: string) {
    state.user.avatar = payload;
  },
  [MutationTypes.SET_REFRESH_TOKEN](state, payload: string) {
    state.refreshToken = payload;
  },
};
