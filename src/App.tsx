import { useEffect, useState } from "react";
import { useSocket } from "./hooks/socket";
import { Calculation, CommandMessageType, CommandResponse } from "./types/type";
import CommandMessage from "./components/CommandMessage";
import bg from "./assets/bg.jpg";
import grid from "./assets/grid.svg";

function App() {
  const socket = useSocket("ws://localhost:3000");
  const [commands, setCommands] = useState<CommandResponse[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
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

  console.log(commands);

  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <img
          src={bg}
          alt="bg"
          className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
          width="1308"
        />
        <div className={`absolute inset-0`}></div>
        <div className="relative h-[80vh] bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:w-11/12 sm:rounded-lg sm:px-10 lg:w-1/2">
          <div className="mx-2">
            <div>
              <h1 className="font-mono text-lg font-extrabold text-gray-900">
                Calculator
              </h1>
            </div>
            <div className="divide-y divide-gray-300/50 w-full ">
              <div className="space-y-6 h-[60vh] py-8 text-base leading-7 text-gray-600 overflow-scroll w-full">
                <p>New Message history</p>
                <ul className="space-y-4">
                  {commands.map((command, index) => (
                    <CommandMessage key={index} response={command} />
                  ))}
                </ul>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
