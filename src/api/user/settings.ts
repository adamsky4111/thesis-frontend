import axios from "@/plugins/axios";
import { AxiosResponse } from "axios";
import { SettingsFilter } from "@/model/Filter/Settings/SettingsFilter";
import { SettingsModel } from "@/model/SettingsModel";

const enum urls {
  Get = "/api/settings/get/",
  List = "/api/settings/",
  Create = "/api/settings/create",
  Update = "/api/settings/edit/",
  Delete = "/api/settings/delete/",
}

const get = (id: number): Promise<AxiosResponse> => {
  return axios.get(urls.Get + id);
};

const list = (params: SettingsFilter): Promise<AxiosResponse> => {
  return axios.post(urls.List, params);
};

const create = (params: SettingsModel): Promise<AxiosResponse> => {
  return axios.post(urls.Create, params.createArrayParams());
};

const update = (params: SettingsModel): Promise<AxiosResponse> => {
  return axios.put(urls.Update + params.id, params.createArrayParams());
};

const remove = (params: SettingsModel): Promise<AxiosResponse> => {
  return axios.delete(urls.Delete + params.id, {});
};

export default {
  get,
  list,
  create,
  update,
  remove,
};
