import { SectionWrapper, ScriptText, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

const steps = [
  { label: "Operaciones diarias", desc: "Cada módulo va generando datos a medida que se trabaja." },
  { label: "Pre-asientos por operación", desc: "Simulando el uso de sub-diarios, con trazabilidad en cada movimiento." },
  { label: "Asientos resumen por período", desc: "Enviados directo al Libro Diario. El contador decide cuándo hacerlos." },
  { label: "Balances contables", desc: "Con unos pocos clicks, en formato excel o pdf, cuando el contador lo desee." },
];

export function Section06({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-6">
      <h2 className="font-black uppercase text-zafiro-accent leading-[1.05] tracking-[-0.02em] text-[clamp(28px,4.5vw,60px)] mb-12">
        Balances contables en minutos
      </h2>

      {/* Timeline horizontal al estilo slide 6 */}
      <div className="relative">
        {/* Línea de conexión */}
        <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-zafiro-accent opacity-30" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ label, desc }, i) => (
            <div key={label} className="flex flex-col gap-3">
              {/* Nodo */}
              <div className="hidden lg:flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-zafiro-accent flex-shrink-0 relative z-10" />
              </div>
              <div>
                <p className="font-black uppercase text-zafiro-accent text-[21px] lg:text-2xl tracking-wide mb-2">
                  {String(i + 1).padStart(2, "0")} — {label}
                </p>
                <p className="text-zafiro-text text-[22px] lg:text-[24px] leading-[1.6] opacity-80">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ScriptText>
        <p>El cierre contable no es el resultado de un proceso tedioso de fin de mes. Es la consecuencia natural de haber operado durante el mes.</p>
      </ScriptText>

      <CommentField sectionId={6} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
