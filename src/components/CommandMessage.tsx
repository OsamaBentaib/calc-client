import {
  Calculation,
  CommandMessageType,
  CommandResponse,
} from "../types/type";
import CommandMessageContent from "./CommandMessageContent";
import CheckMark from "./CheckMark";

interface Props {
  response: CommandResponse;
}

export default function CommandMessage({ response }: Props) {
  const renderMessageResponse = () => {
    switch (response.type) {
      case CommandMessageType.CALCULATION_RESULT:
        return (
          response.result && (
            <CommandMessageContent
              key={response.result._id}
              item={response.result}
            />
          )
        );
      case CommandMessageType.CALCULATION_HISTORY:
        return (
          <>
            <h3 className="ml-4">History</h3>
            {response.history?.map((item: Calculation) => (
              <CommandMessageContent key={item._id} item={item} />
            ))}
          </>
        );
      case CommandMessageType.UNKNOWN_COMMAND:
        return <p>{response.error}</p>;
    }
  };
  return (
    <div className="flex divide-y divide-gray-300/50">
      {!response.error && <CheckMark />}
      <div className="pt-3">{renderMessageResponse()}</div>
    </div>
  );
}
