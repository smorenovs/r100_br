import { SectionWrapper, ScriptText, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

export function Section07({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-7">
      <h2 className="font-black uppercase text-zafiro-accent leading-[1.05] tracking-[-0.02em] text-[clamp(28px,4.5vw,60px)] mb-12">
        Comprás mejor cuando tenes información útil a tu disposición
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Modelos de pedido */}
        <div className="bg-zafiro-card rounded-xl p-7">
          <p className="font-black uppercase text-zafiro-accent text-xl tracking-[0.22em] mb-6">
            Modelos de pedido
          </p>
          <div className="space-y-5">
            <div>
              <p className="font-black uppercase text-zafiro-text text-base lg:text-lg tracking-wide">
                Centralizado
              </p>
              <p className="text-zafiro-text text-base leading-[1.7] opacity-80 mt-1">
                Desde la Central, hacia las Sucursales.
              </p>
            </div>
            <div className="h-px bg-zafiro-accent opacity-20" />
            <div>
              <p className="font-black uppercase text-zafiro-text text-base lg:text-lg tracking-wide">
                Distribuido
              </p>
              <p className="text-zafiro-text text-base leading-[1.7] opacity-80 mt-1">
                Pedido desde la Central, entregado por el Proveedor en cada Sucursal.
              </p>
            </div>
            <div className="h-px bg-zafiro-accent opacity-20" />
            <p className="text-zafiro-accent text-m italic">
              El mismo sistema soporta los dos modelos. Y pueden coexistir.
            </p>
          </div>
        </div>

        {/* Proyección de demanda con imagen */}
        <div className="bg-zafiro-surface border border-zafiro-dark rounded-xl overflow-hidden flex flex-col">
          <div className="px-7 pt-7 pb-4">
            <p className="font-black uppercase text-zafiro-accent text-xl tracking-[0.22em] mb-3">
              Proyección de demanda
            </p>
            <p className="text-zafiro-text text-md leading-[1.7]">
              Basado en el historial de ventas, con distinción entre ventas normales y promocionales.
            </p>
          </div>
          {/* Pantalla real de Zafiro — Análisis de Proyección de Ventas */}
          <div className="flex-1 overflow-hidden min-h-[180px] lg:min-h-[220px] rounded-b-xl">
            <img
              src="/img_slide_7.jpg"
              alt="Análisis de Proyección de Ventas — Zafiro"
              className="w-full h-full object-cover object-top"
              draggable={false}
            />
          </div>
        </div>
      </div>

      <ScriptText>
        <p>Comprar bien no es solo comprar rápido. Es comprar lo correcto, en el momento correcto, con proyecciones basadas en el historial real del propio negocio.</p>
        <p>Zafiro cuenta con pronósticos por regresión lineal para estimar cómo va a evolucionar la demanda de cada producto, distinguiendo períodos de precio normal de períodos promocionales.</p>
        <p>Para organizar cómo hacer esos pedidos, el sistema soporta dos modelos: pedidos distribuidos, donde cada sucursal compra según su demanda propia, y pedidos unificados, para aprovechar promociones por volumen. El mismo sistema soporta ambos, y pueden coexistir dentro de una misma empresa.</p>
      </ScriptText>

      <CommentField sectionId={7} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
