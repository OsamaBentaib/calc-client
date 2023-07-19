import { CommandResponse } from "./type";

export interface ServerToClientEvents {
  calculations: (response: CommandResponse) => void;
  error: (exception: CommandResponse) => void;
}

export interface ClientToServerEvents {
  message: (message: string) => void;
}
