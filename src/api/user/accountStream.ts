import axios from "@/plugins/axios";
import { AxiosResponse } from "axios";
import { StreamModel } from "@/model/StreamModel";

const base = "/api/account/stream";

const urls = {
  Create: `${base}/create`,
};

const create = (params: StreamModel): Promise<AxiosResponse> => {
  return axios.post(urls.Create, params.createArrayParams());
};

export default {
  create,
};
