import axios from "@/plugins/axios";
import { AxiosResponse } from "axios";
import { AccountChannelsFilter } from "@/model/Filter/AccountChannels/AccountChannelsFilter";
import { ChannelModel } from "@/model/ChannelModel";

const base = "/api/account/channel";

const urls = {
  Get: (id: number): string => {
    return `${base}/show/${id}`;
  },
  List: `${base}/`,
  Create: `${base}/create`,
  Update: (id: number): string => {
    return `${base}/edit/${id}`;
  },
  Delete: (id: number): string => {
    return `${base}/delete/${id}`;
  },
  Subscribe: (id: number): string => {
    return `${base}/subscribe/${id}`;
  },
  Unsubscribe: (id: number): string => {
    return `${base}/unsubscribe/${id}`;
  },
  subscribed: (): string => {
    return `${base}/subscribed`;
  },
};

const get = (id: number): Promise<AxiosResponse> => {
  return axios.get(urls.Get(id));
};

const list = (params: AccountChannelsFilter): Promise<AxiosResponse> => {
  return axios.post(urls.List, params);
};

const create = (params: ChannelModel): Promise<AxiosResponse> => {
  return axios.post(urls.Create, params.createArrayParams());
};

const update = (params: ChannelModel): Promise<AxiosResponse> => {
  return axios.put(
    urls.Update(params.id as number),
    params.createArrayParams()
  );
};

const remove = (params: ChannelModel): Promise<AxiosResponse> => {
  return axios.delete(urls.Delete(params.id as number), {});
};

const subscribe = (params: ChannelModel): Promise<AxiosResponse> => {
  return axios.put(urls.Subscribe(params.id as number));
};

const unsubscribe = (params: ChannelModel): Promise<AxiosResponse> => {
  return axios.put(urls.Unsubscribe(params.id as number));
};

const subscribed = (): Promise<AxiosResponse> => {
  return axios.get(urls.subscribed());
};

export default {
  get,
  list,
  create,
  update,
  remove,
  subscribe,
  unsubscribe,
  subscribed,
};
