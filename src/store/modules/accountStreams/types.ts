import { StreamModel } from "@/model/StreamModel";
import { StreamScheduleModel } from "@/model/StreamScheduleModel";

export enum MutationTypes {
  SET_ITEMS = "SET_ITEMS",
  SET_TOTAL = "SET_TOTAL",
  SET_PAGES = "SET_PAGES",
  SET_SCHEDULED = "SET_SCHEDULED",
}

export enum ActionTypes {
  CREATE = "CREATE",
  SCHEDULED = "SCHEDULED",
}

export enum GetterTypes {
  GET_ITEMS = "GET_ITEMS",
  GET_TOTAL = "GET_TOTAL",
  GET_PAGES = "GET_PAGES",
  GET_SCHEDULED = "GET_SCHEDULED",
}

export interface AccountStreamsState {
  items: Array<StreamModel>;
  pages: number;
  total: number;
  schedule: Array<StreamScheduleModel>;
}
