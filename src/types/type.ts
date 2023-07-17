export interface Calculation {
  _id: string;
  calculation: string;
  result: number;
  date: string;
}

export enum CommandMessageType {
  CALCULATION_RESULT = "CALCULATION_RESULT",
  CALCULATION_HISTORY = "CALCULATION_HISTORY",
  UNKNOWN_COMMAND = "UNKNOWN_COMMAND",
}

export interface CommandResponse {
  type: CommandMessageType;
  result?: Calculation;
  history?: Calculation[];
  error?: string;
}
