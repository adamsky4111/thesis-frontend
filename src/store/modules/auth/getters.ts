import { GetterTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store/types";
import { GetterTypes } from "@/store/modules/auth/types";
import { UserModel } from "@/model/UserModel";

export type Getters = {
  [GetterTypes.GET_USER](state: State): UserModel;
  [GetterTypes.GET_ROLES](state: State): Array<string>;
  [GetterTypes.GET_TOKEN](state: State): string | null;
  [GetterTypes.IS_LOGGED](state: State): boolean;
};

export const getters: GetterTree<State, RootState> & Getters = {
  [GetterTypes.GET_USER]: (state) => {
    const user = state.user;
    // return user as UserModel
    return new UserModel(user);
  },
  [GetterTypes.GET_ROLES]: (state) => {
    return state.roles;
  },
  [GetterTypes.GET_TOKEN]: (state) => {
    return state.token;
  },
  [GetterTypes.IS_LOGGED]: (state) => {
    return state.token !== null;
  },
};
