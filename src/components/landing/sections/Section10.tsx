import { SectionWrapper, ScriptText, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

const sinZafiro = [
  "Afiliado llega",
  "Ejecutás validación",
  "Ves cobertura",
  "Procesás venta",
];

const conZafiro = [
  "Consultás recetas (antes)",
  "Afiliado llega",
  "Vendés (todo ya validado)",
];

export function Section10({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-10" slideNum="9/10">
      <h2 className="font-black uppercase text-zafiro-accent leading-[0.92] tracking-[-0.02em] text-[clamp(24px,4vw,52px)] mb-12">
        Sabés lo que PAMI le cubre al afiliado antes de que llegue al mostrador
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sin Zafiro */}
        <div className="bg-zafiro-surface border border-zafiro-dark rounded-xl p-7">
          <p className="font-black uppercase text-zafiro-muted text-xs tracking-[0.22em] mb-6">
            Sin Zafiro
          </p>
          <div className="space-y-2">
            {sinZafiro.map((s, i) => (
              <div key={s}>
                <div className="flex items-center gap-3 py-2.5">
                  <span className="text-zafiro-dark font-black text-sm w-5 text-center">{i + 1}</span>
                  <span className="text-zafiro-muted text-sm lg:text-base">{s}</span>
                </div>
                {i < sinZafiro.length - 1 && <div className="h-px bg-zafiro-dark ml-8" />}
              </div>
            ))}
          </div>
        </div>

        {/* Con Zafiro */}
        <div className="bg-zafiro-card rounded-xl p-7">
          <p className="font-black uppercase text-zafiro-accent text-xs tracking-[0.22em] mb-6">
            Con Zafiro
          </p>
          <div className="space-y-2">
            {conZafiro.map((s, i) => (
              <div key={s}>
                <div className="flex items-center gap-3 py-2.5">
                  <span className="text-zafiro-accent font-black text-sm w-5 text-center">{i + 1}</span>
                  <span className="text-zafiro-text text-sm lg:text-base">{s}</span>
                </div>
                {i < conZafiro.length - 1 && <div className="h-px bg-zafiro-accent opacity-20 ml-8" />}
              </div>
            ))}
          </div>
          <p className="text-zafiro-text text-xs italic mt-6 opacity-70">
            La integración con PAMI no es un trámite. Es una ventaja comercial.
          </p>
        </div>
      </div>

      <ScriptText>
        <p>En Zafiro, contamos con una integración de punta a punta con PAMI.</p>
        <p>Por un lado, la validación integrada: cuando llega un afiliado al mostrador, las recetas disponibles se consultan directamente desde Zafiro, sin salir del sistema, sin ventanas adicionales, sin procesos paralelos.</p>
        <p>Pero hay algo más valioso todavía: la consulta de recetas sin validación obligatoria. El equipo puede consultar qué recetas tiene disponibles un afiliado antes de que llegue al mostrador. Esto permite tomar decisiones de venta proactivas, y actuar antes de que el cliente tenga que venir a preguntar.</p>
      </ScriptText>

      <CommentField sectionId={10} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
