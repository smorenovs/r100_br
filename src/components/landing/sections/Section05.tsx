import { SectionWrapper, ScriptText, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

export function Section05({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-5" slideNum="4/10">
      <div className="flex flex-col lg:flex-row gap-12 lg:items-start">

        <div className="lg:w-[40%]">
          <h2 className="font-black uppercase text-zafiro-accent leading-[0.92] tracking-[-0.02em] text-[clamp(30px,4vw,58px)]">
            Zafiro BI para que tomes decisiones con calma
          </h2>
        </div>

        <div className="flex-1 flex flex-col gap-5">
          {/* Sin Zafiro BI */}
          <div className="bg-zafiro-surface rounded-xl p-6 border border-zafiro-dark">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-4 rounded-full bg-zafiro-dark flex items-center px-0.5">
                <div className="w-3 h-3 rounded-full bg-zafiro-muted" />
              </div>
              <p className="font-black uppercase text-zafiro-muted tracking-widest text-xs lg:text-sm">
                Lunes · Sin Zafiro BI
              </p>
            </div>
            <ul className="space-y-1.5 text-base lg:text-lg text-zafiro-muted leading-[1.7]">
              <li>7 a.m. — No sabés cómo cerró el fin de semana</li>
              <li>10 a.m. — Seguís esperando reportes</li>
              <li>13 a.m. — Llega el reporte de la semana pasada</li>
            </ul>
          </div>

          {/* Con Zafiro BI */}
          <div className="bg-zafiro-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-4 rounded-full bg-zafiro-accent flex items-center justify-end px-0.5">
                <div className="w-3 h-3 rounded-full bg-zafiro-bg" />
              </div>
              <p className="font-black uppercase text-zafiro-accent tracking-widest text-xs lg:text-sm">
                Lunes · Con Zafiro BI
              </p>
            </div>
            <p className="text-zafiro-text text-base lg:text-lg mb-3">
              7 a.m. — El reporte del período anterior ya está en tu bandeja.
            </p>
            <ul className="space-y-1.5 text-base lg:text-lg text-zafiro-text leading-[1.7]">
              <li className="flex gap-2"><span className="text-zafiro-accent">✓</span> Sin incertidumbre</li>
              <li className="flex gap-2"><span className="text-zafiro-accent">✓</span> Sin esperar</li>
              <li className="flex gap-2"><span className="text-zafiro-accent">✓</span> Con datos precisos</li>
            </ul>
          </div>
        </div>
      </div>

      <ScriptText>
        <p>Si dependés de que vos mismo o alguien más te genere los reportes para poder tomar decisiones, corrés el riesgo de tener tarde la información que necesitás.</p>
        <p>Con Zafiro BI, ese riesgo desaparece: podés recibir reportes diarios, cada mañana, con información actualizada desde el día anterior, sobre ventas por sucursal, ticket promedio, familias más vendidas, y otros indicadores, sin tener que pedírselo a nadie ni ponerte a armarlo.</p>
        <p>El valor no está solo en tener el dato. Está en tenerlo antes de que empiece el día, para que las decisiones se tomen con información fresca.</p>
      </ScriptText>

      <CommentField sectionId={5} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
