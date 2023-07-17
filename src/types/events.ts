import { Calculation } from "./type";

export interface ServerToClientEvents {
  result: (result: Calculation) => void;
  calculations: (calculations: Calculation[]) => void;
  error: (errorMessage: string) => void;
}

export interface ClientToServerEvents {
  message: (message: string) => void;
}
