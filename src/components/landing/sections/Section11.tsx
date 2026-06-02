import { SectionWrapper, ScriptText, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

export function Section11({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-11">
      <div className="flex flex-col lg:flex-row gap-12 lg:items-start">

        {/* Texto izquierda */}
        <div className="lg:w-[45%] flex flex-col gap-8">
          <h2 className="font-black uppercase text-zafiro-accent leading-[1.05] tracking-[-0.02em] text-[clamp(30px,4.5vw,62px)]">
            El mismo sistema, sin importar cuánto crezca el negocio
          </h2>

          <ul className="space-y-3 text-base lg:text-lg leading-[1.75] text-zafiro-text">
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zafiro-accent flex-shrink-0" />
              Sin migración cuando abran la próxima sucursal.
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zafiro-accent flex-shrink-0" />
              Sin tener las sucursales desconectadas.
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zafiro-accent flex-shrink-0" />
              Todas tus operaciones, centralizadas en un solo sistema.
            </li>
          </ul>

        <p>Zafiro es capaz de acompañar el crecimiento de tu negocio sin romper la plataforma. Cada nueva sucursal o puesto se integra sin interrumpir las operaciones existentes.</p>
        </div>

        {/* Imagen + stats derecha */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="rounded-xl overflow-hidden bg-white/5 border border-zafiro-dark min-h-[220px] lg:min-h-[320px] flex items-center justify-center p-8">
            <img
              src="/img_slide_11.png"
              alt="Zafiro — escalabilidad multisucursal"
              className="w-full max-w-[400px] h-auto object-contain"
              draggable={false}
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-zafiro-surface border border-zafiro-dark rounded-xl px-4 py-4">
              <p className="font-black text-zafiro-accent text-xl leading-none tracking-tight">Multi empresas y sucursales</p>
              <p className="text-zafiro-muted text-xs uppercase tracking-widest mt-2">Gestión centralizada desde una sola plataforma</p>
            </div>
            <div className="bg-zafiro-surface border border-zafiro-dark rounded-xl px-4 py-4">
              <p className="font-black text-zafiro-accent text-xl leading-none tracking-tight">Alta concurrencia</p>
              <p className="text-zafiro-muted text-xs uppercase tracking-widest mt-2">Cientos de puestos operando en simultáneo sin fricción</p>
            </div>
            <div className="bg-zafiro-surface border border-zafiro-dark rounded-xl px-4 py-4">
              <p className="font-black text-zafiro-accent text-xl leading-none tracking-tight">Escala real</p>
              <p className="text-zafiro-muted text-xs uppercase tracking-widest mt-2">Millones de operaciones procesadas sin problemas</p>
            </div>
          </div>
        </div>
      </div>

      <ScriptText>
        <p>Nuestro compromiso para acompañar tu crecimiento es mantener el sistema actualizado, para que puedas operar siempre como corresponde. Las actualizaciones son mejoras, no costos agregados.</p>
      </ScriptText>

      <CommentField sectionId={11} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
