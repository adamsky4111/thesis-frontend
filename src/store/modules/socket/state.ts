import { SocketState } from "@/store/modules/socket/types";

export const state: SocketState = {
  socket: null,
  messageHandlers: new Array<(data: Record<any, any>) => void>(),
  registeredHandlers: new Array<string>(),
};

export type State = typeof state;
