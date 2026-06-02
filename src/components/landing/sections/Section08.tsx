import { SectionWrapper, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

export function Section08({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:items-center">

        <div className="flex-1 flex flex-col gap-8">
          <h2 className="font-black uppercase text-zafiro-accent leading-[1.05] tracking-[-0.02em] text-[clamp(28px,4vw,56px)]">
            Menos trabajo repetitivo,{" "}
            <br className="hidden sm:block" />
            más enfoque en lo valioso
          </h2>

          <div className="space-y-3 text-base lg:text-lg leading-[1.75] text-zafiro-text">
            <p>La IA llegó para quedarse. Por eso, Zafiro integra inteligencia artificial para automatizar tareas repetitivas y liberar al equipo para enfocarse en lo que realmente importa.</p>
            <p>El PDF llega. ZIA lo lee, identifica los productos, los precios, los descuentos, y los precarga en el sistema. El encargado revisa, confirma, y listo.</p>
            <p>Sin tipear. Sin errores de imputación. Sin repetir lo que ya está en el documento.</p>
            <p>No es solo tiempo liberado, es un mundo de nuevas posibilidades. Cada hora que el personal no está con tareas que pueden automatizarse, es una hora más en la que el negocio puede continuar creciendo.</p>
          </div>

          <div className="bg-zafiro-card rounded-xl px-8 py-6">
            <p className="font-black uppercase text-zafiro-accent leading-none tracking-tight text-[clamp(28px,4vw,60px)]">
              De 1 semana
            </p>
            <p className="font-black uppercase text-zafiro-accent leading-none tracking-tight text-[clamp(28px,4vw,60px)]">
              a solo 2 horas
            </p>
            <p className="text-zafiro-text text-xs uppercase tracking-widest mt-3 opacity-70">
              Este es el impacto que tuvo ZIA en uno de nuestros clientes.
            </p>
          </div>
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
