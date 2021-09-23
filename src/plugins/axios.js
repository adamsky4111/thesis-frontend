import apiAxios from "axios";
import createdStore from "../store";
import { GetterTypes, ActionTypes } from "../store/modules/auth/AuthStoreTypes";

const config = {
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
  baseURL: "http://localhost/",
};

const axios = apiAxios.create(config);

const requestOnFulfilled = (config) => {
  const token = createdStore.getters[GetterTypes.GET_TOKEN];

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

const restoreTokenAndRepeatRequest = async (error) => {
  if (error.response.status === 401) {
    const originalRequest = error.config;
    await createdStore.dispatch(ActionTypes.REFRESH_TOKEN);
    const token = createdStore.getters[GetterTypes.GET_TOKEN];
    if (token) {
      return axios(originalRequest);
    } else {
      return error;
    }
  }
};

axios.interceptors.request.use(requestOnFulfilled);

axios.interceptors.response.use(function (response) {
  return response;
}, restoreTokenAndRepeatRequest);

export default axios;
