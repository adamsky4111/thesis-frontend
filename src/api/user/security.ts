import axios from "@/plugins/axios";
import { AxiosResponse } from "axios";
import { UserModel } from "@/model/UserModel";

const enum urls {
  Login = "/api/login_check",
  Register = "/api/security/register",
  Verify = "/api/security/verify",
  RestorePassword = "/api/security/restore-password",
}

const login = (
  params
): Promise<
  AxiosResponse<{
    user: UserModel;
    token: string;
    roles: Array<string>;
  }>
> => {
  return axios.post(urls.Login, params);
};

const register = (params): Promise<AxiosResponse<never>> => {
  return axios.post(urls.Register, params);
};

export default { login, register };
