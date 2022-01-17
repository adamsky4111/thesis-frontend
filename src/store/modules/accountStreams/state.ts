import { StreamModel } from "@/model/StreamModel";
import { AccountStreamsState } from "@/store/modules/accountStreams/types";
import { StreamScheduleModel } from "@/model/StreamScheduleModel";

export const state: AccountStreamsState = {
  items: new Array<StreamModel>(),
  pages: 1,
  total: 0,
  schedule: new Array<StreamScheduleModel>(),
};

export type State = typeof state;
