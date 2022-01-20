export enum MutationTypes {
  SET_SOCKET = "SET_SOCKET",
  SET_HANDLERS = "SET_HANDLERS",
  SET_EVENTS = "SET_EVENTS",
}

export enum ActionTypes {
  ADD_CHAT_MESSAGE = "ADD_CHAT_MESSAGE",
  CONNECT_AS_VIEWER = "CONNECT_AS_VIEWER",
  HANDLE_EVENT = "HANDLE_EVENT",
  START_STREAM = "START_STREAM",
}

export enum GetterTypes {
  GET_SOCKET = "GET_SOCKET",
}

export interface SocketState {
  socket: WebSocket | null;
  messageHandlers: Array<(data: Record<any, any>) => void>;
  registeredHandlers: Array<string>;
}
