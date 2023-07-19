import { useEffect, useState } from "react";
import { useSocket } from "../../hooks/socket";
import { CommandResponse } from "../../types/type";
import CommandsView from "../CommandsView/CommandsView";

export default function CommandInterface() {
  const socket = useSocket("ws://localhost:3000");
  const [commands, setCommands] = useState<CommandResponse[]>([]);
  const [message, setMessage] = useState("");
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      setConnected(true);
    });

    socket.on("calculations", (response: CommandResponse) => {
      setCommands([...commands, response]);
    });

    socket.on("error", (exception: CommandResponse) => {
      setCommands([...commands, exception]);
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
        <div className="flex gap-2">
          <div
            className={` ${connected ? "text-green-400" : "text-yellow-400"}`}
          >
            {connected ? "Connected!" : "Trying to connect..."}
          </div>
          <div>
            <p>
              ⌘ Please enter (e.g., 1 + 1, 5 * 3) or{" "}
              <code className="font-bold">history</code>
            </p>
          </div>
        </div>
        <CommandsView commands={commands} />
      </div>
      <div className="pt-8 text-base font-light leading-7">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex items-center bg-transparent rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-terminal mr-2"
            >
              <polyline points="4 17 10 11 4 5" />
              <line x1="12" y1="19" x2="20" y2="19" />
            </svg>
            <input
              className="w-full p-2 text-black focus:outline-none focus:ring-0 font-mono"
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your command..."
            />
          </div>
        </form>
      </div>
    </div>
  );
}
