import { ChannelModel } from "@/model/ChannelModel";
import { AccountChannelsState } from "@/store/modules/accountChannels/types";

export const state: AccountChannelsState = {
  items: new Array<ChannelModel>(),
  pages: 1,
  total: 0,
};

export type State = typeof state;
