export enum MutationTypes {
  SET_USER = "SET_USER",
  SET_TOKEN = "SET_TOKEN",
  SET_ROLES = "SET_ROLES",
}

export enum ActionTypes {
  LOGIN = "LOGIN",
}

export interface AuthState {
  user: Record<never, never>;
  token: string | null;
  roles: Array<string>;
}
