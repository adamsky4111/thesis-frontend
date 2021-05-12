import { StreamModel } from "@/model/StreamModel";
import { StreamState } from "@/store/modules/stream/types";

export const state: StreamState = {
  items: new Array<StreamModel>(),
  pages: 1,
  total: 0,
};

export type State = typeof state;
