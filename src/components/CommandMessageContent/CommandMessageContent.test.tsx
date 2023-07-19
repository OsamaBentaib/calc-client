import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CommandMessageContent from "./CommandMessageContent";

describe("CommandMessageContent", () => {
  it("should render calculation and result", () => {
    const item = {
      _id: "1",
      calculation: "2+2",
      result: 4,
      date: "2023-07-18T00:00:00Z",
    };

    render(<CommandMessageContent item={item} />);

    expect(screen.getByText("18-07-2023 01:00")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });
});
