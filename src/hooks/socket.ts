import { useRef } from "react";
import io, { ManagerOptions, Socket, SocketOptions } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "../types/events";

export const useSocket = (
  url: string,
  options?: Partial<ManagerOptions & SocketOptions> | undefined
): Socket<ServerToClientEvents, ClientToServerEvents> => {
  const { current: socket } = useRef(io(url, options));

  return socket;
};
