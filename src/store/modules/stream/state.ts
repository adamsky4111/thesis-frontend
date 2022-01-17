import { StreamModel } from "@/model/StreamModel";
import { StreamState } from "@/store/modules/stream/types";
import { SearchFilter } from "@/model/Filter/Search/SearchFilter";

export const state: StreamState = {
  items: new Array<StreamModel>(),
  pages: 1,
  total: 0,
  filter: new SearchFilter(),
};

export type State = typeof state;
