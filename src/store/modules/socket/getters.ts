import { GetterTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store/types";
import { GetterTypes } from "@/store/modules/socket/types";

export type Getters = {
  [GetterTypes.GET_SOCKET](state: State): WebSocket | null;
};

export const getters: GetterTree<State, RootState> & Getters = {
  [GetterTypes.GET_SOCKET]: (state) => {
    return state.socket;
  },
};
