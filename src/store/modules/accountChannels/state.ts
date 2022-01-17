import { ChannelModel } from "@/model/ChannelModel";
import { AccountChannelsState } from "@/store/modules/accountChannels/types";
import { ChannelSubscribe } from "@/model/ChannelSubscribe";

export const state: AccountChannelsState = {
  items: new Array<ChannelModel>(),
  pages: 1,
  total: 0,
  subscribed: {
    loaded: false,
    items: new Array<ChannelSubscribe>(),
    total: 0,
    pages: 0,
  },
};

export type State = typeof state;
