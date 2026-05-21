import type { ReactNode } from "react";

export function ScriptText({ children }: { children: ReactNode }) {
  return (
    <div className="text-zafiro-text leading-[1.75] mt-[4vh] text-base lg:text-lg w-full space-y-4">
      {children}
    </div>
  );
}
