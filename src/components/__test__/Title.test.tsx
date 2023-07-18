import { render, screen } from "@testing-library/react";
import Title from "../Title";

describe("Title", () => {
  it("should render the component", () => {
    render(<Title />);

    expect(screen.getByText("Calculator")).toBeDefined();
  });
});
