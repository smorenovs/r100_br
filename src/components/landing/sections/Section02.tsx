import { SectionWrapper, ScriptText, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

export function Section02({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-2" slideNum="1/10">
      <div className="flex flex-col lg:flex-row gap-12 lg:items-center">

        <div className="flex-1 relative">
          <h2 className="font-black uppercase text-zafiro-accent leading-[0.95] tracking-[-0.02em] text-[clamp(32px,4.5vw,64px)] relative z-10">
            En Argentina, la información que llega tarde ya no sirve
          </h2>

          <ul className="mt-8 space-y-4 text-base lg:text-lg leading-[1.75] text-zafiro-text relative z-10">
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zafiro-accent flex-shrink-0" />
              La inflación cambia el valor de tu stock mientras estás mirando el número de ayer.
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zafiro-accent flex-shrink-0" />
              Los plazos de cobro de las obras sociales no esperan a que estés listo para decidir.
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zafiro-accent flex-shrink-0" />
              ARCA y ANMAT no dan advertencia. O estás al día, o estás en falta.
            </li>
          </ul>
        </div>

        <div className="lg:w-[38%] bg-zafiro-card rounded-xl p-8 flex flex-col gap-4">
          <p className="font-black uppercase text-zafiro-accent text-[clamp(28px,3vw,42px)] leading-[0.95] tracking-tight">
            Este no es trabajo para un sistema genérico
          </p>
          <div className="h-px bg-zafiro-accent opacity-30" />
          <p className="text-zafiro-text text-sm lg:text-base leading-[1.7]">
            Zafiro no fue <em>adaptado</em> al rubro farmacéutico. Fue construido para él, desde el día uno.
          </p>
        </div>
      </div>

      <ScriptText>
        <p>Operar en Argentina no es fácil.</p>
        <p>La inflación cambia el valor del stock constantemente. Los plazos de cobro de obras sociales son largos, pero los pagos no esperan. ARCA y ANMAT exigen cumplimiento exacto, sin margen de error.</p>
        <p>En este contexto, quien tarda en tener información, tarda en decidir. Y quien decide tarde, pierde.</p>
        <p>Zafiro nació para dar respuestas al sector farmacéutico con estas problemáticas.</p>
      </ScriptText>

      <CommentField sectionId={2} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
