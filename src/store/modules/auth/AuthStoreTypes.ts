export enum MutationTypes {
  SET_USER = "auth/SET_USER",
  SET_TOKEN = "auth/SET_TOKEN",
  SET_ROLES = "auth/SET_ROLES",
}

export enum ActionTypes {
  LOGIN = "auth/LOGIN",
  LOGOUT = "auth/LOGOUT",
  EDIT_ACCOUNT = "auth/EDIT_ACCOUNT",
  CHANGE_AVATAR = "auth/CHANGE_AVATAR",
  REFRESH_TOKEN = "auth/REFRESH_TOKEN",
}

export enum GetterTypes {
  GET_USER = "auth/GET_USER",
  GET_TOKEN = "auth/GET_TOKEN",
  GET_ROLES = "auth/GET_ROLES",
}
