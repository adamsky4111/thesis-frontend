import { ActionContext, ActionTree } from "vuex";
import { State } from "./state";
import { ActionTypes, MutationTypes } from "./types";
import { Mutations } from "./mutations";
import { RootState } from "@/store/types";
import { GetterTypes } from "@/store/modules/auth/AuthStoreTypes";

export interface Actions {
  [ActionTypes.ADD_CHAT_MESSAGE](
    { state, rootGetters }: AugmentedActionContext,
    payload: {
      streamId: number;
      message: string;
    }
  ): void;
  [ActionTypes.CONNECT_AS_VIEWER](
    { state, rootGetters }: AugmentedActionContext,
    payload: { streamId: number }
  ): void;
  [ActionTypes.START_STREAM](
    { state, rootGetters }: AugmentedActionContext,
    payload: { streamId: number }
  ): void;
  [ActionTypes.HANDLE_EVENT](
    { state, rootGetters }: AugmentedActionContext,
    payload: {
      event: string;
      callback: (...args: any[]) => void;
    }
  ): void;
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, "commit">;

export const actions: ActionTree<State, RootState> & Actions = {
  [ActionTypes.ADD_CHAT_MESSAGE]({ state, commit, rootGetters }, payload) {
    console.log("start");
    if (!state.socket) {
      return;
    }
    const token = rootGetters[GetterTypes.GET_TOKEN];
    state.socket.send(
      JSON.stringify({
        streamId: payload.streamId,
        jwt: token,
        message: payload.message,
        event: "chat_message",
      })
    );
  },
  [ActionTypes.CONNECT_AS_VIEWER]({ state, commit, rootGetters }, payload) {
    console.log("test");
    let socket = state.socket;
    if (!(socket instanceof WebSocket)) {
      socket = new WebSocket("ws://localhost:9090");
      socket.onclose = () => {
        commit(MutationTypes.SET_SOCKET, null);
        commit(
          MutationTypes.SET_HANDLERS,
          new Array<(data: Record<any, any>) => void>()
        );
        commit(MutationTypes.SET_EVENTS, new Array<string>());
      };
    }
    const token = rootGetters[GetterTypes.GET_TOKEN];
    commit(MutationTypes.SET_SOCKET, socket);
    socket.addEventListener("open", () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      socket.send(JSON.stringify({ streamId: payload.streamId, jwt: token }));
      console.log("Otworzono połączenie");
    });
  },
  [ActionTypes.START_STREAM]({ state, commit, rootGetters }, payload) {
    console.log("start");
  },
  [ActionTypes.HANDLE_EVENT]({ state, commit }, payload) {
    console.log("handler");
    const handlers = state.messageHandlers;
    if (!(state.socket instanceof WebSocket)) {
      return;
    }
    const newHandler = (data: Record<any, any>): void => {
      if (payload.event !== data.event) {
        return;
      }
      return payload.callback(data);
    };
    handlers.push(newHandler);
    const events = state.registeredHandlers;
    events.push(payload.event);
    commit(MutationTypes.SET_HANDLERS, handlers);
    commit(MutationTypes.SET_EVENTS, events);
    state.socket.onmessage = async (event) => {
      const data = JSON.parse(event.data);
      handlers.forEach((handler) => {
        handler(data);
      });
    };
  },
};
