import axios from "@/plugins/axios";
import { AxiosResponse } from "axios";
import { StreamModel } from "@/model/StreamModel";

const base = "/api/account/stream";

const urls = {
  Create: `${base}/create`,
  Schedule: `${base}/schedule`,
};

const create = (params: StreamModel): Promise<AxiosResponse> => {
  return axios.post(urls.Create, params.createArrayParams());
};

const scheduleList = (): Promise<AxiosResponse> => {
  return axios.get(urls.Schedule);
};

export default {
  create,
  scheduleList,
};
