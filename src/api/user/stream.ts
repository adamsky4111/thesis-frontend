import axios from "@/plugins/axios";
import { AxiosResponse } from "axios";
import { SearchFilter } from "@/model/Filter/Search/SearchFilter";

const base = "/api/stream";

const urls = {
  search: `${base}/`,
  get: (id: number) => `${base}/${id}`,
};

const list = (params: SearchFilter): Promise<AxiosResponse> => {
  return axios.post(urls.search, params);
};

const get = (id: number): Promise<AxiosResponse> => {
  return axios.get(urls.get(id as number));
};

export default {
  list,
  get,
};
