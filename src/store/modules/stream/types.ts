import { StreamModel } from "@/model/StreamModel";
import { SearchFilter } from "@/model/Filter/Search/SearchFilter";

export enum MutationTypes {
  SET_ITEMS = "SET_ITEMS",
  SET_TOTAL = "SET_TOTAL",
  SET_PAGES = "SET_PAGES",
}

export enum ActionTypes {
  SEARCH = "SEARCH",
}

export enum GetterTypes {
  GET_ITEMS = "GET_ITEMS",
  GET_TOTAL = "GET_TOTAL",
  GET_PAGES = "GET_PAGES",
}

export interface StreamState {
  items: Array<StreamModel>;
  pages: number;
  total: number;
  filter: SearchFilter;
}
