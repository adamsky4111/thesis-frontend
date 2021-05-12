import { StreamModel } from "@/model/StreamModel";
import { AccountStreamsState } from "@/store/modules/accountStreams/types";

export const state: AccountStreamsState = {
  items: new Array<StreamModel>(),
  pages: 1,
  total: 0,
};

export type State = typeof state;
