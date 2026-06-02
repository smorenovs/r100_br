import { forwardRef } from "react";

export const ScrollBar = forwardRef<HTMLDivElement>(function ScrollBar(_props, ref) {
  return <div className="scroll-bar" ref={ref} aria-hidden="true" />;
});
