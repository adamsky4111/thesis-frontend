import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import { ActionTypes, MutationTypes } from "./types";
import { Mutations } from "./mutations";
import { RootState } from "@/store/types";
import api from "@/api/user";
import { SettingsModel } from "@/model/SettingsModel";
import { ChannelModel } from "@/model/ChannelModel";
import { AccountChannelsFilter } from "@/model/Filter/AccountChannels/AccountChannelsFilter";

export interface Actions {
  [ActionTypes.CREATE](
    { commit }: AugmentedActionContext,
    payload: ChannelModel
  ): void;
  [ActionTypes.REMOVE](
    { commit }: AugmentedActionContext,
    payload: ChannelModel
  ): void;
  [ActionTypes.UPDATE](
    { commit }: AugmentedActionContext,
    payload: ChannelModel
  ): void;
  [ActionTypes.SEARCH](
    { commit }: AugmentedActionContext,
    payload: AccountChannelsFilter
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
    await api.ACCOUNT_CHANNELS.create(payload);
  },
  async [ActionTypes.UPDATE]({ commit }, payload) {
    await api.ACCOUNT_CHANNELS.update(payload);
  },
  async [ActionTypes.REMOVE]({ commit }, payload) {
    await api.ACCOUNT_CHANNELS.remove(payload);
  },
  async [ActionTypes.SEARCH]({ commit }, payload) {
    await api.ACCOUNT_CHANNELS.list(payload).then((response) => {
      if (response.status) {
        const data = response.data.items.map((item) => {
          return new SettingsModel(item);
        });
        commit(MutationTypes.SET_ITEMS, data);
        commit(MutationTypes.SET_TOTAL, response.data.total);
        commit(MutationTypes.SET_PAGES, response.data.pages);
      }
    });
  },
};
