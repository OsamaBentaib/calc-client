import {
  Calculation,
  CommandMessageType,
  CommandResponse,
} from "../types/type";

interface Props {
  response: CommandResponse;
}
export default function CommandMessage({ response }: Props) {
  const renderMessageResponse = () => {
    switch (response.type) {
      case CommandMessageType.CALCULATION_RESULT:
        return (
          <li className="flex divide-y divide-gray-300/50">
            <div>
              <svg
                className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
            </div>
            <div>
              <p className="ml-4">
                <code className="text-sm font-bold text-gray-900">
                  {response.result?.calculation}
                </code>{" "}
                ={" "}
                <code className="text-sm font-bold text-gray-900">
                  {response.result?.result}
                </code>
              </p>
              <p className="ml-4">
                at <span className="text-xs"> {response.result?.date}</span>
              </p>
            </div>
          </li>
        );
      case CommandMessageType.CALCULATION_HISTORY:
        return (
          <li className="flex divide-y divide-gray-300/50">
            <div>
              <svg
                className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
            </div>
            <div>
              <h3 className="ml-4">History</h3>
              {response.history?.map((ele: Calculation) => (
                <div key={ele._id}>
                  <p className="ml-4">
                    <code className="text-sm font-bold text-gray-900">
                      {ele.calculation}
                    </code>{" "}
                    ={" "}
                    <code className="text-sm font-bold text-gray-900">
                      {ele.result}
                    </code>
                  </p>
                  <p className="ml-4">
                    at <span className="text-xs">{ele.date}</span>
                  </p>
                </div>
              ))}
            </div>
          </li>
        );
      case CommandMessageType.UNKNOWN_COMMAND:
        return (
          <div className="ml-4 divide-y divide-gray-300/50">
            <p>{response.error}</p>
          </div>
        );
    }
  };
  return <>{renderMessageResponse()}</>;
}
