import { UserModel } from "@/model/UserModel";
import { SettingsModel } from "@/model/SettingsModel";

export enum MutationTypes {
  REMOVE_SETTINGS = "REMOVE_SETTINGS",
  ADD_SETTINGS = "ADD_SETTINGS",
  EDIT_SETTINGS = "EDIT_SETTINGS",
  SET_SETTINGS = "SET_SETTINGS",
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
  GET_SETTINGS = "GET_SETTINGS",
  GET_TOTAL = "GET_TOTAL",
  GET_PAGES = "GET_PAGES",
}

export interface SettingsState {
  settings: Array<SettingsModel>;
  pages: number;
  total: number;
}
