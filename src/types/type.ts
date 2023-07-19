export interface CalculationResponse {
  _id: string;
  calculation: string;
  result: number;
  date: string;
}

export interface CommandResponse {
  message: string;
  data?: CalculationResponse[];
  error?: string;
}
