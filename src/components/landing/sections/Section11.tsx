import { SectionWrapper, ScriptText, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

export function Section11({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-11" slideNum="10/10">
      <div className="flex flex-col lg:flex-row gap-12 lg:items-start">

        {/* Texto izquierda */}
        <div className="lg:w-[45%] flex flex-col gap-8">
          <h2 className="font-black uppercase text-zafiro-accent leading-[0.92] tracking-[-0.02em] text-[clamp(30px,4.5vw,62px)]">
            El mismo sistema, sin importar cuánto crezca el negocio
          </h2>

          <ul className="space-y-3 text-base lg:text-lg leading-[1.75] text-zafiro-text">
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zafiro-accent flex-shrink-0" />
              Sin migración cuando abran la próxima sucursal.
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zafiro-accent flex-shrink-0" />
              Sin empezar de cero cuando el negocio cambie.
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zafiro-accent flex-shrink-0" />
              Todas tus operaciones, centralizadas en un solo sistema.
            </li>
          </ul>
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
              <p className="font-black text-zafiro-accent text-[clamp(20px,2.5vw,34px)] leading-none tracking-tight">+30</p>
              <p className="text-zafiro-muted text-xs uppercase tracking-widest mt-2">Sucursales</p>
            </div>
            <div className="bg-zafiro-surface border border-zafiro-dark rounded-xl px-4 py-4">
              <p className="font-black text-zafiro-accent text-[clamp(20px,2.5vw,34px)] leading-none tracking-tight">500+</p>
              <p className="text-zafiro-muted text-xs uppercase tracking-widest mt-2">Puestos conectados</p>
            </div>
            <div className="bg-zafiro-surface border border-zafiro-dark rounded-xl px-4 py-4">
              <p className="font-black text-zafiro-accent text-[clamp(20px,2.5vw,34px)] leading-none tracking-tight">+8.5M</p>
              <p className="text-zafiro-muted text-xs uppercase tracking-widest mt-2">Operaciones registradas</p>
            </div>
          </div>
        </div>
      </div>

      <ScriptText>
        <p>Zafiro acompaña el crecimiento sin que el negocio tenga que cambiar de plataforma.</p>
        <p>Hoy pueden estar operando con una sucursal y diez puestos. Mañana pueden tener treinta sucursales y quinientos puestos conectados. El sistema es el mismo. No hay migración, no hay reinicio, no hay pérdida de historia operativa.</p>
        <p>Más de ocho millones y medio de operaciones registradas. Todo conectado en un único sistema. Todo en un único cliente.</p>
        <p>Y cuando cambia la normativa de ARCA, cuando se lanza una nueva funcionalidad, cuando hay una actualización regulatoria, el sistema se actualiza. Eso no es un servicio adicional ni genera costos adicionales. Nuestro compromiso es mantenerlos al día, cuanto antes, con cada cambio que sea necesario.</p>
      </ScriptText>

      <CommentField sectionId={11} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
