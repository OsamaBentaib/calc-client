import { render, fireEvent, waitFor } from "@testing-library/react";
import CommandInterface from "../CommandInterface";
import { useSocket } from "../../hooks/socket";

jest.mock("../../hooks/socket");

describe("CommandInterface", () => {
  let mockSocket: any;

  beforeEach(() => {
    mockSocket = {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    };

    (useSocket as jest.Mock).mockReturnValue(mockSocket);
  });

  it("connects to the socket when the component is mounted", () => {
    render(<CommandInterface />);
    expect(useSocket).toHaveBeenCalled();
  });

  it("submits a message when the form is submitted", async () => {
    const { getByPlaceholderText } = render(<CommandInterface />);

    fireEvent.change(getByPlaceholderText("Enter your command..."), {
      target: { value: "test command" },
    });

    fireEvent.submit(getByPlaceholderText("Enter your command..."));

    await waitFor(() => {
      expect(mockSocket.emit).toHaveBeenCalledWith("message", "test command");
    });
  });
});
