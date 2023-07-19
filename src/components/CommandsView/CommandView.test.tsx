import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CommandsView from "./CommandsView";

describe("CommandMessage", () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = jest.fn();
  });
  it("should render calculation result", () => {
    const commands = [
      {
        message: "2+2",
        data: [
          {
            _id: "1",
            calculation: "2+2",
            result: 4,
            date: "2023-07-18",
          },
        ],
      },
    ];

    render(<CommandsView commands={commands} />);

    const calculationResult = screen.getByText("4");
    expect(calculationResult).toBeInTheDocument();
  });

  it("should render calculation history", () => {
    const commands = [
      {
        message: "history",
        data: [
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
      },
    ];

    render(<CommandsView commands={commands} />);

    const historyItem1 = screen.getByText("4");
    const historyItem2 = screen.getByText("9");

    expect(historyItem1).toBeInTheDocument();
    expect(historyItem2).toBeInTheDocument();
  });

  it("should render unknown command error", () => {
    const commands = [
      {
        message: "Unknown command",
        error: "Unknown command",
      },
    ];

    render(<CommandsView commands={commands} />);

    const errorMessage = screen.getByText("Unknown command");
    expect(errorMessage).toBeInTheDocument();
  });
});
