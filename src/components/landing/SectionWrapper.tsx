import type { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  fullHeight?: boolean;
  slideNum?: string;
}

export function SectionWrapper({ children, id, className = "", fullHeight = false, slideNum }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={[
        "relative px-[4vw] py-[8vh] sm:px-[6vw] sm:py-[10vh] lg:px-[10vw] lg:py-[12vh]",
        fullHeight ? "min-h-svh flex flex-col justify-center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
      {slideNum && (
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zafiro-dark text-xs tracking-widest font-medium select-none">
          {slideNum}
        </span>
      )}
    </section>
  );
}
