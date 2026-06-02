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
        VS Ingeniería en Sistemas
      </h1>

      <div className="mt-10 space-y-4 text-base lg:text-lg leading-[1.75] text-zafiro-text max-w-[60ch]">
        <p>
          Desde 1998, brindando control absoluto, visibilidad total y un crecimiento ilimitado a farmacias y droguerías de todo el país.
        </p>
        <p>
          Con la <strong>Atención al Cliente</strong> y la <strong>Mejora Continua</strong> como horizonte, nuestro <strong>compromiso</strong> es construir el sistema que permite a farmacias y droguerías gestionar su operación por completo, tomar decisiones informadas y crecer sin límites.
        </p>
      </div>

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
