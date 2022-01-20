import { GetterTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store/types";
import { GetterTypes } from "./types";
import { ChannelModel } from "@/model/ChannelModel";
import { ChannelSubscribe } from "@/model/ChannelSubscribe";

export type Getters = {
  [GetterTypes.GET_ITEMS](state: State): Array<ChannelModel>;
  [GetterTypes.GET_PAGES](state: State): number;
  [GetterTypes.GET_TOTAL](state: State): number;
  [GetterTypes.GET_SUBSCRIBED_ITEMS](state: State): Array<ChannelSubscribe>;
  [GetterTypes.GET_SUBSCRIBED_IS_LOADING](state: State): boolean;
  [GetterTypes.GET_SUBSCRIBED_TOTAL](state: State): number;
  [GetterTypes.GET_SUBSCRIBED_PAGES](state: State): number;
};

export const getters: GetterTree<State, RootState> & Getters = {
  [GetterTypes.GET_ITEMS]: (state) => {
    return state.items;
  },
  [GetterTypes.GET_PAGES]: (state) => {
    return state.pages;
  },
  [GetterTypes.GET_TOTAL]: (state) => {
    return state.total;
  },
  [GetterTypes.GET_SUBSCRIBED_ITEMS]: (state) => {
    return state.subscribed.items;
  },
  [GetterTypes.GET_SUBSCRIBED_IS_LOADING]: (state) => {
    return !state.subscribed.loaded;
  },
  [GetterTypes.GET_SUBSCRIBED_TOTAL]: (state) => {
    return state.subscribed.total;
  },
  [GetterTypes.GET_SUBSCRIBED_PAGES]: (state) => {
    return state.subscribed.pages;
  },
};
