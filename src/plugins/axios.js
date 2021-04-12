import apiAxios from "axios";
import createdStore from "../store";
import { GetterTypes } from "../store/modules/auth/AuthStoreTypes";

const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: "http://localhost:1000/",
};

const axios = apiAxios.create(config);

const requestOnFulfilled = (config) => {
  const token = createdStore.getters[GetterTypes.GET_TOKEN];

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

axios.interceptors.request.use(requestOnFulfilled);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axios;
