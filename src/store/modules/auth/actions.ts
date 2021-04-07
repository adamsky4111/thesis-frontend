import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import { ActionTypes, MutationTypes } from "./types";
import { Mutations } from "@/store/modules/auth/mutations";
import { LoginModel } from "@/model/LoginModel";
import security from "@/api/user/security";
import { RootState } from "@/store/types";

export interface Actions {
  [ActionTypes.LOGIN](
    { commit }: AugmentedActionContext,
    payload: LoginModel
  ): void;
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export const actions: ActionTree<State, RootState> & Actions = {
  async [ActionTypes.LOGIN]({ commit }, payload) {
    let status = false;
    await security
      .login(payload.createArrayParams())
      .then((response) => {
        const data = response.data;
        commit(MutationTypes.SET_USER, data.user);
        commit(MutationTypes.SET_TOKEN, data.token);
        commit(MutationTypes.SET_ROLES, data.roles);
        status = true;
      })
      .catch(() => {
        status = false;
      });

    return status;
  },
};
