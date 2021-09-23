import axios from "@/plugins/axios";
import { AxiosResponse } from "axios";
import { MessageModel } from "@/model/MessageModel";

const base = "/api/chat";

const urls = {
  get: (id: number) => `${base}/${id}`,
  addMessage: (id: number) => `${base}/${id}/add-message`,
};

const getChat = (id: number): Promise<AxiosResponse> => {
  return axios.get(urls.get(id));
};

const addMessage = (
  model: MessageModel,
  streamId: number
): Promise<AxiosResponse> => {
  return axios.post(
    urls.addMessage(streamId as number),
    model.createArrayParams()
  );
};

export default {
  getChat,
  addMessage,
};
