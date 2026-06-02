import { CommentField } from "@/components/landing/CommentField";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

export function Section07({ commentValue, onCommentChange }: SectionProps) {
  return (
    <section className="section" id="section-7" data-section data-index="06" data-screen-label="Compras">
      <div className="section-inner">
        <h2 className="h-title" data-reveal>
          Proceso de compras optimizado con datos reales
        </h2>
        <p className="eyebrow" data-reveal>
          Reposición inteligente de stock, para que tu inventario no sea un problema ni un costo extra.
        </p>
        <div className="grid grid-3" data-stagger="90" style={{ marginTop: "clamp(32px,5vh,56px)" }}>
          <div className="card" data-reveal>
            <p className="card-title">Pedidos Centralizados</p>
            <p className="card-body">Para que la compra vaya a la Central, y desde allí distribuir a las sucursales.</p>
          </div>
          <div className="card" data-reveal>
            <p className="card-title">Pedidos Distribuidos</p>
            <p className="card-body">Para que el proveedor envíe lo correspondiente a cada sucursal.</p>
          </div>
          <div className="card" data-reveal>
            <p className="card-title">Proyección de demanda con regresión lineal</p>
            <p className="card-body">Para que puedas saber cuánto comprar en base a tu historial de venta y pronósticos basados en datos históricos de tu negocio.</p>
          </div>
        </div>
        <div className="window-wrap" data-reveal data-parallax="0.045" style={{ marginTop: "28px" }}>
          <figure className="window float" style={{ margin: 0 }}>
            <img className="shot" src="/img_slide_7.jpg" alt="Análisis de Proyección de Ventas — Zafiro" draggable={false} />
          </figure>
        </div>
        <CommentField
          sectionId={7}
          commentLabel="Sección — Compras / Proyección"
          value={commentValue}
          onChange={onCommentChange}
        />
      </div>
    </section>
  );
}
