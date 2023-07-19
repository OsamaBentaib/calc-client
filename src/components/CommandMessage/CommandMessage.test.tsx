import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CommandMessage from "./CommandMessage";

describe("CommandMessage", () => {
  it("should render error message", () => {
    const response = {
      message: "Test Command",
      error: "An error occurred",
    };

    render(<CommandMessage response={response} />);

    expect(screen.getByText("$ Test Command")).toBeInTheDocument();
    expect(screen.getByText("FAILED")).toBeInTheDocument();
    expect(screen.getByText("An error occurred")).toBeInTheDocument();
  });

  it("should render data items", () => {
    const response = {
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
    };

    render(<CommandMessage response={response} />);

    expect(screen.getByText("$ history")).toBeInTheDocument();
    expect(screen.getByText("SUCCEEDED")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
  });
});
