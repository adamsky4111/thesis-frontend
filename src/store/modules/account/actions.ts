import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import { ActionTypes, MutationTypes } from "./types";
import { Mutations } from "./mutations";
import { RootState } from "@/store/types";
import api from "@/api/user";
import { SettingsModel } from "@/model/SettingsModel";
import { SettingsFilter } from "@/model/Filter/Settings/SettingsFilter";

export interface Actions {
  [ActionTypes.CREATE](
    { commit }: AugmentedActionContext,
    payload: SettingsModel
  ): void;
  [ActionTypes.REMOVE](
    { commit }: AugmentedActionContext,
    payload: SettingsModel
  ): void;
  [ActionTypes.UPDATE](
    { commit }: AugmentedActionContext,
    payload: SettingsModel
  ): void;
  [ActionTypes.SEARCH](
    { commit }: AugmentedActionContext,
    payload: SettingsFilter
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
    await api.ACCOUNT_SETTINGS.create(payload).then((response) => {
      if (response.status) {
        commit(MutationTypes.ADD_SETTINGS, response.data.settings);
      }
    });
  },
  async [ActionTypes.UPDATE]({ commit }, payload) {
    await api.ACCOUNT_SETTINGS.update(payload).then((response) => {
      if (response.status) {
        commit(MutationTypes.EDIT_SETTINGS, response.data.settings);
      }
    });
  },
  async [ActionTypes.REMOVE]({ commit }, payload) {
    await api.ACCOUNT_SETTINGS.create(payload).then((response) => {
      if (response.status) {
        commit(MutationTypes.REMOVE_SETTINGS, response.data.settings);
      }
    });
  },
  async [ActionTypes.SEARCH]({ commit }, payload) {
    await api.ACCOUNT_SETTINGS.list(payload).then((response) => {
      if (response.status) {
        const data = response.data.items.map((item) => {
          return new SettingsModel(item);
        });
        commit(MutationTypes.SET_SETTINGS, data);
        commit(MutationTypes.SET_TOTAL, response.data.total);
        commit(MutationTypes.SET_PAGES, response.data.pages);
      }
    });
  },
};
