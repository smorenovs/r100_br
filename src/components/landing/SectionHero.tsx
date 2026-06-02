import { SectionWrapper } from "./SectionWrapper";

export function SectionHero() {
  return (
    <SectionWrapper fullHeight className="justify-center">
      <img
        src="/logo_z.svg"
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute right-[6vw] bottom-0 w-[clamp(240px,44vw,640px)] h-auto select-none pointer-events-none hidden lg:block opacity-[0.12]"
      />

      <h1 className="font-black uppercase text-zafiro-accent leading-[1.05] tracking-[-0.02em] max-w-[14ch] text-[clamp(42px,7vw,96px)]">
        ¿Cuánto tardás en saber cómo le fue a cada sucursal?
      </h1>

      <div className="mt-10 flex items-center gap-6">
        <div className="h-px w-12 bg-zafiro-accent opacity-60" />
        <a href="https://www.zafirofarmacias.com.ar" target="_blank" rel="noopener noreferrer" className="text-zafiro-muted text-xs tracking-[0.2em] uppercase hover:text-zafiro-accent transition-colors">
          www.zafirofarmacias.com.ar
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zafiro-dark text-2xl select-none animate-bounce" aria-hidden="true">
        ↓
      </div>
    </SectionWrapper>
  );
}
