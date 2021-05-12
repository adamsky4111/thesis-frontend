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

export default {
  get,
  list,
  create,
  update,
  remove,
};
