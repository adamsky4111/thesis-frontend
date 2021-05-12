import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import { ActionTypes, MutationTypes } from "./types";
import { Mutations } from "./mutations";
import { RootState } from "@/store/types";
import api from "@/api/user";
import { StreamModel } from "@/model/StreamModel";

export interface Actions {
  [ActionTypes.CREATE](
    { commit }: AugmentedActionContext,
    payload: StreamModel
  ): void;
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export const actions: ActionTree<State, RootState> & Actions = {
  async [ActionTypes.CREATE]({ commit }, payload) {
    await api.ACCOUNT_STREAM.create(payload);
  },
};
