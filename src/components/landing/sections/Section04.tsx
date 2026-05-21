import { SectionWrapper, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

const modules = ["Compras", "Ventas", "Stock", "Contabilidad", "Fondos", "Cajas"];

export function Section04({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-4" slideNum="3/10">
      <div className="bg-zafiro-card rounded-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[45%] p-8 lg:p-12 flex items-center border-b border-zafiro-dark/30 lg:border-b-0 lg:border-r">
            <h2 className="font-black uppercase text-zafiro-accent leading-[0.92] tracking-[-0.02em] text-[clamp(32px,4vw,56px)]">
              Tenés todo en un solo sistema
            </h2>
          </div>

          <div className="flex-1 p-8 lg:p-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {modules.map((m) => (
                <div key={m} className="bg-zafiro-bg/30 rounded-xl px-4 py-3 flex items-center justify-center">
                  <span className="font-black uppercase text-zafiro-text tracking-widest text-sm lg:text-base text-center">
                    {m}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[4vh] space-y-4 text-base lg:text-lg leading-[1.75] text-zafiro-text">
        <p>
          Seis módulos especializados, un solo sistema. Cada uno hace exactamente lo que su nombre indica: Ventas genera ventas, Compras registra comprobantes, Stock gestiona inventario, Contabilidad lleva los libros, Fondos controla el flujo de caja, Cajas registra cada movimiento en el mostrador.
        </p>
        <p>
          Lo que los hace poderosos es que todos comparten los mismos datos en tiempo real. Lo que pasa en Ventas lo sabe Contabilidad. Lo que entra en Compras actualiza Stock. Sin transferencias manuales, sin distintas versiones de la verdad.
        </p>
        <p>
          Podés usar solo los módulos que necesitás. No hay costos adicionales por los que no usás.
        </p>
      </div>

      <CommentField sectionId={4} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
