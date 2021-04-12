import axios from "@/plugins/axios";
import { AxiosResponse } from "axios";

const enum urls {
  edit = "/api/account/edit",
  change_avatar = "api/account/avatar",
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

const changeAvatar = (
  params: any
): Promise<
  AxiosResponse<{
    avatar: string;
  }>
> => {
  return axios.post(urls.change_avatar, params);
};

export default { edit, changeAvatar };
