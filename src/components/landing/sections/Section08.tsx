import { SectionWrapper, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

export function Section08({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:items-start">

        <div className="flex-1 flex flex-col gap-6">
          <div>
            <h2 className="font-black uppercase text-zafiro-accent leading-[1.05] tracking-[-0.02em] text-[clamp(28px,4vw,56px)]">
              Zafiro ZIA
            </h2>
            <p className="text-zafiro-accent italic text-base lg:text-xl mt-2 font-light">
              Procesos automatizados
            </p>
          </div>

          <p className="text-base lg:text-lg leading-[1.75] text-zafiro-text">
            Automatizá el ingreso de facturas de compras y stock usando Inteligencia Artificial, con lectura directa desde PDFs o escaneos. ZIA identifica productos, precios y descuentos automáticamente, el encargado solo revisa y confirma, sin tipear nada.
          </p>

          <div className="bg-zafiro-card rounded-xl px-8 py-6">
            <p className="font-black uppercase text-zafiro-accent leading-none tracking-tight text-[clamp(24px,3.5vw,48px)]">
              -95% de tiempo en tareas poco productivas
            </p>
          </div>

          <p className="text-zafiro-accent italic text-base lg:text-lg font-light">
            La salud de tu farmacia está en la gestión
          </p>
        </div>

        <div className="lg:w-[44%]">
          <div className="rounded-xl overflow-hidden border border-zafiro-dark bg-white">
            <img
              src="/img_slide_8.png"
              alt="ZIA — procesamiento de factura PDF"
              className="w-full h-auto"
              draggable={false}
            />
          </div>
        </div>
      </div>

      <CommentField sectionId={8} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
