import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CheckMark from "../CheckMark";

describe("CheckMark", () => {
  it("renders properly", () => {
    render(<CheckMark />);
    const svgElement = screen.getByTestId("svg");
    expect(svgElement).toBeInTheDocument();
  });
});
