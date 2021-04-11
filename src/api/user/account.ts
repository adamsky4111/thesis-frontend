import axios from "@/plugins/axios";
import { AxiosResponse } from "axios";

const enum urls {
  edit = "/api/account/edit",
}

const edit = (
  params: Record<never, never>
): Promise<
  AxiosResponse<{
    user: Record<never, never>;
  }>
> => {
  return axios.post(urls.edit, params);
};
export default { edit };
