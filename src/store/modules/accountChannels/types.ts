import { ChannelModel } from "@/model/ChannelModel";
import { ChannelSubscribe } from "@/model/ChannelSubscribe";

export enum MutationTypes {
  SET_ITEMS = "SET_ITEMS",
  SET_TOTAL = "SET_TOTAL",
  SET_PAGES = "SET_PAGES",
  SET_SUBSCRIBED_ITEMS = "SET_SUBSCRIBED_ITEMS",
  SET_SUBSCRIBED_IS_LOADING = "SET_SUBSCRIBED_IS_LOADING",
  SET_SUBSCRIBED_TOTAL = "SET_SUBSCRIBED_TOTAL",
  SET_SUBSCRIBED_PAGES = "SET_SUBSCRIBED_PAGES",
}

export enum ActionTypes {
  UPDATE = "UPDATE",
  CREATE = "CREATE",
  REMOVE = "REMOVE",
  SEARCH = "SEARCH",
  FETCH_SUBSCRIBED = "FETCH_SUBSCRIBED",
}

export enum GetterTypes {
  GET_ITEMS = "GET_ITEMS",
  GET_TOTAL = "GET_TOTAL",
  GET_PAGES = "GET_PAGES",
  GET_SUBSCRIBED_ITEMS = "GET_SUBSCRIBED_ITEMS",
  GET_SUBSCRIBED_IS_LOADING = "GET_SUBSCRIBED_IS_LOADING",
  GET_SUBSCRIBED_TOTAL = "GET_SUBSCRIBED_TOTAL",
  GET_SUBSCRIBED_PAGES = "GET_SUBSCRIBED_PAGES",
}

export interface AccountChannelsState {
  items: Array<ChannelModel>;
  pages: number;
  total: number;
  subscribed: {
    loaded: boolean;
    items: Array<ChannelSubscribe>;
    total: number;
    pages: number;
  };
}
