import dayjs from "dayjs";
import { Calculation } from "../types/type";

interface Props {
  item: Calculation;
}

export default function CommandMessageContent({ item }: Props) {
  return (
    <div>
      <p className="ml-4">
        <code className="text-sm font-bold text-gray-900">
          {item.calculation}
        </code>{" "}
        = <code className="text-sm font-bold text-gray-900">{item.result}</code>
      </p>
      <p className="ml-4">
        at{" "}
        <span className="text-xs">
          {dayjs(item.date).format("DD-MM-YYYY HH:mm")}
        </span>
      </p>
    </div>
  );
}
