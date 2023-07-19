import dayjs from "dayjs";
import { CalculationResponse } from "../../types/type";

interface Props {
  item: CalculationResponse;
}

export default function CommandMessageContent({ item }: Props) {
  return (
    <div className={`font-mono border-l-2 border-gray-300 pl-4 ml-4`}>
      <p className="flex items-center space-x-2">
        <span className="text-gray-900">[RESULT]</span>
        <code className="text-sm font-bold">{item.result}</code>
      </p>
      <p className="flex items-center space-x-2">
        <span className="text-gray-900">[OPERATION]</span>
        <code className="text-sm font-bold">
          {item.calculation} = {item.result}
        </code>
      </p>
      <p className="flex items-center space-x-2">
        <span className="text-gray-900">[DATE]</span>
        <span className="text-xs">
          {dayjs(item.date).format("DD-MM-YYYY HH:mm")}
        </span>
      </p>
    </div>
  );
}
