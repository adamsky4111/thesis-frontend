import axios from "@/plugins/axios";
import { AxiosResponse } from "axios";
import { UserModel } from "@/model/UserModel";

const enum urls {
  Login = "/api/login_check",
  Register = "/api/security/register",
  Refresh = "/api/token/refresh",
  Verify = "/api/security/verify",
  RestorePassword = "/api/security/restore-password",
  RestorePasswordToken = "/api/security/restore-password/",
}

const login = (
  params
): Promise<
  AxiosResponse<{
    user: UserModel;
    token: string;
    refresh_token: string;
    roles: Array<string>;
  }>
> => {
  return axios.post(urls.Login, params);
};

const register = (params): Promise<AxiosResponse<never>> => {
  return axios.post(urls.Register, params);
};

const refresh = (
  params
): Promise<AxiosResponse<{ refresh_token: string; token: string }>> => {
  return axios.post(urls.Refresh, params);
};

const verify = (params: {
  email: string;
  token: string;
}): Promise<AxiosResponse> => {
  return axios.post(urls.Verify, params);
};

const passwordRecovery = (params: {
  email: string;
}): Promise<AxiosResponse> => {
  return axios.post(urls.RestorePassword, params);
};

const changePassword = (params: {
  email: string;
  password: string;
  token: string;
}): Promise<AxiosResponse> => {
  return axios.post(urls.RestorePasswordToken + params.token, {
    email: params.email,
    password: params.password,
  });
};

export default {
  login,
  register,
  refresh,
  verify,
  passwordRecovery,
  changePassword,
};
