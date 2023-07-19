import { useEffect, useRef } from "react";
import { CommandResponse } from "../../types/type";
import CommandMessage from "../CommandMessage/CommandMessage";

interface Props {
  commands: CommandResponse[];
}

export default function CommandsView({ commands }: Props) {
  const bottom = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (bottom) {
      bottom.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [commands]);
  return (
    <div className="space-y-4 font-mono">
      {commands.map((response) => (
        <CommandMessage key={response.message} response={response} />
      ))}
      <div ref={bottom}></div>
    </div>
  );
}
