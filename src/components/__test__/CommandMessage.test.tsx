import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CommandMessage from "../CommandMessage";
import { CommandMessageType } from "../../types/type";

describe("CommandMessage", () => {
  it("should render calculation result", () => {
    const response = {
      type: CommandMessageType.CALCULATION_RESULT,
      result: {
        _id: "1",
        calculation: "2+2",
        result: 4,
        date: "2023-07-18",
      },
    };

    render(<CommandMessage response={response} />);

    const calculationResult = screen.getByText("2+2");
    expect(calculationResult).toBeInTheDocument();
  });

  it("should render calculation history", () => {
    const response = {
      type: CommandMessageType.CALCULATION_HISTORY,
      history: [
        {
          _id: "1",
          calculation: "2+2",
          result: 4,
          date: "2023-07-18",
        },
        {
          _id: "2",
          calculation: "3*3",
          result: 9,
          date: "2023-07-18",
        },
      ],
    };

    render(<CommandMessage response={response} />);

    const historyItem1 = screen.getByText("2+2");
    const historyItem2 = screen.getByText("3*3");

    expect(historyItem1).toBeInTheDocument();
    expect(historyItem2).toBeInTheDocument();
  });

  it("should render unknown command error", () => {
    const response = {
      type: CommandMessageType.UNKNOWN_COMMAND,
      error: "Unknown command",
    };

    render(<CommandMessage response={response} />);

    const errorMessage = screen.getByText("Unknown command");
    expect(errorMessage).toBeInTheDocument();
  });
});
