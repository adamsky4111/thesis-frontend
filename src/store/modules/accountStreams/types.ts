import { StreamModel } from "@/model/StreamModel";

export enum MutationTypes {
  SET_ITEMS = "SET_ITEMS",
  SET_TOTAL = "SET_TOTAL",
  SET_PAGES = "SET_PAGES",
}

export enum ActionTypes {
  CREATE = "CREATE",
}

export enum GetterTypes {
  GET_ITEMS = "GET_ITEMS",
  GET_TOTAL = "GET_TOTAL",
  GET_PAGES = "GET_PAGES",
}

export interface AccountStreamsState {
  items: Array<StreamModel>;
  pages: number;
  total: number;
}
