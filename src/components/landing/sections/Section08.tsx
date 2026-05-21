import { SectionWrapper, ScriptText, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

export function Section08({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-8" slideNum="7/10">
      <div className="flex flex-col lg:flex-row gap-12 lg:items-center">

        <div className="flex-1 flex flex-col gap-8">
          <h2 className="font-black uppercase text-zafiro-accent leading-[0.92] tracking-[-0.02em] text-[clamp(28px,4vw,56px)]">
            Menos trabajo repetitivo,{" "}
            <br className="hidden sm:block" />
            más enfoque en lo valioso
          </h2>

          <div className="space-y-3 text-base lg:text-lg leading-[1.75] text-zafiro-text">
            <p>El PDF llega. ZIA lo lee, identifica los productos, los precios, los descuentos, y los precarga en el sistema. El encargado revisa, confirma, y listo.</p>
            <p>Sin tipear. Sin errores de imputación. Sin repetir lo que ya está en el documento.</p>
          </div>

          <div className="bg-zafiro-card rounded-xl px-8 py-6">
            <p className="font-black uppercase text-zafiro-accent leading-none tracking-tight text-[clamp(28px,4vw,60px)]">
              1 semana →
            </p>
            <p className="font-black uppercase text-zafiro-accent leading-none tracking-tight text-[clamp(28px,4vw,60px)]">
              2 horas
            </p>
            <p className="text-zafiro-text text-xs uppercase tracking-widest mt-3 opacity-70">
              Historia real · Cliente de Argentina
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

      <ScriptText>
        <p>El ingreso de facturas de compra es una de las tareas más repetitivas del área de compras: alguien recibe el PDF, lee los datos, los tipea en el sistema, verifica, corrige errores. Esto es lo que ocurre en la mayoría de las empresas, todos los días.</p>
        <p>ZIA hace esa parte. Lee la factura directamente desde el PDF o desde un escaneo, identifica los productos, los precios, los descuentos, y los precarga en el sistema. El encargado revisa, confirma, y listo.</p>
        <p>Uno de nuestros clientes pasó de dedicar una semana completa al ingreso de facturas a resolverlo en dos horas. Automatizar lo repetitivo permite que el equipo dedique su tiempo a lo que el sistema no puede hacer por ellos.</p>
      </ScriptText>

      <CommentField sectionId={8} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
