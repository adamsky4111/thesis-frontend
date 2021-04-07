import { AuthState } from "@/store/modules/auth/types";

export const state: AuthState = {
  user: {},
  token: null,
  roles: [],
};

export type State = typeof state;
