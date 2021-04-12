import { UserModel } from "@/model/UserModel";

export enum MutationTypes {
  SET_USER = "SET_USER",
  SET_TOKEN = "SET_TOKEN",
  SET_ROLES = "SET_ROLES",
  SET_AVATAR = "SET_AVATAR",
  SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN",
}

export enum ActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  EDIT_ACCOUNT = "EDIT_ACCOUNT",
  CHANGE_AVATAR = "CHANGE_AVATAR",
  REFRESH_TOKEN = "REFRESH_TOKEN",
}

export enum GetterTypes {
  GET_USER = "GET_USER",
  GET_TOKEN = "GET_TOKEN",
  GET_ROLES = "GET_ROLES",
}

export const Getters = {
  GET_USER: "GET_USER",
  GET_TOKEN: "GET_TOKEN",
  GET_ROLES: "GET_ROLES",
};

export interface AuthState {
  user: UserModel;
  token: string | null;
  roles: Array<string>;
  refreshToken: string | null;
}
