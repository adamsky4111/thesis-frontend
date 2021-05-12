import { ChannelModel } from "@/model/ChannelModel";

export enum MutationTypes {
  SET_ITEMS = "SET_ITEMS",
  SET_TOTAL = "SET_TOTAL",
  SET_PAGES = "SET_PAGES",
}

export enum ActionTypes {
  UPDATE = "UPDATE",
  CREATE = "CREATE",
  REMOVE = "REMOVE",
  SEARCH = "SEARCH",
}

export enum GetterTypes {
  GET_ITEMS = "GET_ITEMS",
  GET_TOTAL = "GET_TOTAL",
  GET_PAGES = "GET_PAGES",
}

export interface AccountChannelsState {
  items: Array<ChannelModel>;
  pages: number;
  total: number;
}
