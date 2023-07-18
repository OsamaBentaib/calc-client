import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Background from "../Background";

describe("Background", () => {
  it("should render the image", () => {
    render(<Background />);

    const imageElement = screen.getByRole("img", { name: /bg/i });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("width", "1308");
    expect(imageElement).toHaveClass(
      "absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
    );
  });
});
