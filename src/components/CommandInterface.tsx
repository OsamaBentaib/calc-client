import { useEffect, useState } from "react";
import { useSocket } from "./../hooks/socket";
import {
  Calculation,
  CommandMessageType,
  CommandResponse,
} from "./../types/type";
import CommandMessage from "./CommandMessage";

export default function CommandInterface() {
  const socket = useSocket("ws://localhost:3000");
  const [commands, setCommands] = useState<CommandResponse[]>([]);
  const [message, setMessage] = useState("");
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      setConnected(true);
    });

    socket.on("result", (result) => {
      const newCommand: CommandResponse = {
        type: CommandMessageType.CALCULATION_RESULT,
        result: result,
      };
      setCommands([...commands, newCommand]);
    });

    socket.on("calculations", (data: Calculation[]) => {
      const newCommand: CommandResponse = {
        type: CommandMessageType.CALCULATION_HISTORY,
        history: data,
      };
      setCommands([...commands, newCommand]);
    });

    socket.on("error", (errorMessage) => {
      const newCommand: CommandResponse = {
        type: CommandMessageType.UNKNOWN_COMMAND,
        error: errorMessage,
      };
      setCommands([...commands, newCommand]);
    });
  }, [socket, commands]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    socket.emit("message", message);
  };

  return (
    <div className="divide-y divide-gray-300/50 w-full ">
      <div className="space-y-6 h-[60vh] py-8 text-base leading-7 text-gray-600 overflow-scroll w-full">
        <p>{connected ? "Connected!" : "Trying to connect..."}</p>
        <div className="space-y-4">
          {commands.map((command, index) => (
            <CommandMessage key={index} response={command} />
          ))}
        </div>
      </div>
      <div className="pt-8 text-base font-semibold leading-7">
        <form onSubmit={handleSubmit} className="w-full">
          <input
            className="w-full p-2 bg-gray-200 text-black rounded-lg"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your command..."
          />
        </form>
      </div>
    </div>
  );
}
