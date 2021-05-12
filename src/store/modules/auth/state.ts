import { AuthState } from "@/store/modules/auth/types";
import { UserModel } from "@/model/UserModel";

export const state: AuthState = {
  user: new UserModel(),
  token: null,
  refreshToken: null,
  roles: [],
};

export type State = typeof state;
