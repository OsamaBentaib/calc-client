import { CalculationResponse, CommandResponse } from "../../types/type";
import CommandMessageContent from "../CommandMessageContent/CommandMessageContent";

interface Props {
  response: CommandResponse;
}

export default function CommandMessage({ response }: Props) {
  const renderContent = () => {
    if (response.data) {
      return response.data?.map((item: CalculationResponse) => (
        <div key={item._id} className="border-l-2 border-gray-300 pl-4">
          <CommandMessageContent item={item} />
          {response.data?.length!! > 1 && (
            <div className="border-t-2 border-gray-200 w-full ml-6"></div>
          )}
        </div>
      ));
    } else {
      return (
        <div className="border-l-2 border-gray-300 pl-4">
          <p className="font-mono">{response.error}</p>
        </div>
      );
    }
  };

  return (
    <div className="flex border-t-[1px] divide-gray-300/50 p-4">
      {response.error ? (
        <div className="inline-block px-2 py-1 text-white bg-red-400 h-8">
          FAILED
        </div>
      ) : (
        <div className="inline-block px-2 py-1 text-white bg-green-400 h-8">
          SUCCEEDED
        </div>
      )}
      <div className="ml-2 pl-4">
        <p className="font-mono">$ {response.message}</p>
        {renderContent()}
      </div>
    </div>
  );
}
