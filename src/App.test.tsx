import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import { useSocket } from "../hooks/socket";

jest.mock("../hooks/socket");

describe("App", () => {
  let mockSocket: any;

  beforeEach(() => {
    mockSocket = {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    };

    (useSocket as jest.Mock).mockReturnValue(mockSocket);
    window.HTMLElement.prototype.scrollIntoView = function () {};
  });

  it("should render Title component", () => {
    render(<App />);
    const titleElement = screen.getByText("Calculator");
    expect(titleElement).toBeInTheDocument();
  });

  it("should render Background component", () => {
    render(<App />);
    const backgroundElement = screen.getByRole("img");
    expect(backgroundElement).toBeInTheDocument();
  });

  it("should render CommandInterface component", () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText("Enter your command...")
    ).toBeInTheDocument();
  });
});
