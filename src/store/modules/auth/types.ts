export enum MutationTypes {
  SET_USER = "SET_USER",
  SET_TOKEN = "SET_TOKEN",
  SET_ROLES = "SET_ROLES",
}

export enum ActionTypes {
  LOGIN = "LOGIN",
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
}
