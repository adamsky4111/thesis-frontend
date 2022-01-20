import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import { ActionTypes } from "./types";
import { Mutations } from "./mutations";
import { RootState } from "@/store/types";
import api from "@/api/user";
import { MutationTypes } from "@/store/modules/accountChannels/types";
import { StreamModel } from "@/model/StreamModel";

export interface Actions {
  [ActionTypes.SEARCH]({ commit }: AugmentedActionContext): void;
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export const actions: ActionTree<State, RootState> & Actions = {
  async [ActionTypes.SEARCH]({ commit, state }) {
    await api.STREAM.list(state.filter).then((response) => {
      if (response.status) {
        const data = response.data.items.map((item) => {
          return new StreamModel(item);
        });
        commit(MutationTypes.SET_ITEMS, data);
        commit(MutationTypes.SET_TOTAL, response.data.total);
        commit(MutationTypes.SET_PAGES, response.data.pages);
      }
    });
  },
};
