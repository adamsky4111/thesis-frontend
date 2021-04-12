import { ActionTree, ActionContext } from "vuex";
import { State } from "./state";
import { ActionTypes, MutationTypes } from "./types";
import { Mutations } from "@/store/modules/auth/mutations";
import { LoginModel } from "@/model/LoginModel";
import security from "@/api/user/security";
import { RootState } from "@/store/types";
import { UserProfileModel } from "@/model/UserProfileModel";
import api from "@/api/user";
import { UserModel } from "@/model/UserModel";

export interface Actions {
  [ActionTypes.LOGIN](
    { commit }: AugmentedActionContext,
    payload: LoginModel
  ): void;
  [ActionTypes.EDIT_ACCOUNT](
    { commit }: AugmentedActionContext,
    payload: UserProfileModel
  );
  [ActionTypes.CHANGE_AVATAR]({ commit }: AugmentedActionContext, payload: any);
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
        commit(MutationTypes.SET_REFRESH_TOKEN, data.refresh_token);
        status = true;
      })
      .catch(() => {
        status = false;
      });

    return status;
  },
  async [ActionTypes.LOGOUT]({ commit }) {
    commit(MutationTypes.SET_REFRESH_TOKEN, null);
    commit(MutationTypes.SET_TOKEN, null);
    commit(MutationTypes.SET_ROLES, []);
    commit(MutationTypes.SET_USER, new UserModel());
  },
  async [ActionTypes.REFRESH_TOKEN]({ state, commit }, payload) {
    await api.SECURITY.refresh({ refresh_token: state.refreshToken }).then(
      (response) => {
        if (response.status) {
          console.log(response.data.refresh_token);
          commit(MutationTypes.SET_REFRESH_TOKEN, response.data.refresh_token);
          commit(MutationTypes.SET_TOKEN, response.data.token);
        }
      }
    );
  },
  async [ActionTypes.EDIT_ACCOUNT]({ commit }, payload) {
    await api.ACCOUNT.edit(payload.createArrayParams()).then((response) => {
      if (response.status) {
        commit(MutationTypes.SET_USER, new UserModel(response.data.user));
      }
    });
  },
  async [ActionTypes.CHANGE_AVATAR]({ commit }, payload) {
    await api.ACCOUNT.changeAvatar(payload).then((response) => {
      if (response.status) {
        commit(MutationTypes.SET_AVATAR, response.data.avatar);
      }
    });
  },
};
