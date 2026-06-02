import { SectionWrapper, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

const features = [
  { title: "Pedidos Centralizados", desc: "Para que la compra vaya a la Central, y desde allí distribuir a las sucursales." },
  { title: "Pedidos Distribuidos", desc: "Para que el proveedor envíe lo correspondiente a cada sucursal." },
  { title: "Proyección de demanda con regresión lineal", desc: "Para que puedas saber cuánto comprar en base a tu historial de venta y pronósticos basados en datos históricos de tu negocio." },
];

export function Section07({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-7">
      <h2 className="font-black uppercase text-zafiro-accent leading-[1.05] tracking-[-0.02em] text-[clamp(28px,4.5vw,60px)] mb-4">
        Proceso de compras optimizado con datos reales
      </h2>
      <p className="text-zafiro-accent italic text-base lg:text-xl mb-12 font-light">
        Reposición inteligente de stock, para que tu inventario no sea un problema ni un costo extra.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {features.map(({ title, desc }) => (
          <div key={title} className="bg-zafiro-card rounded-xl p-7">
            <p className="font-black uppercase text-zafiro-accent text-base lg:text-lg tracking-wide mb-3">
              {title}
            </p>
            <p className="text-zafiro-text text-base leading-[1.7] opacity-80">
              {desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl overflow-hidden min-h-[180px] lg:min-h-[220px]">
        <img
          src="/img_slide_7.jpg"
          alt="Análisis de Proyección de Ventas — Zafiro"
          className="w-full h-full object-cover object-top rounded-xl"
          draggable={false}
        />
      </div>

      <CommentField sectionId={7} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
