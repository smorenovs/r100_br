import { CommentField } from "@/components/landing/CommentField";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

export function Section04({ commentValue, onCommentChange }: SectionProps) {
  return (
    <section className="section" id="section-4" data-section data-index="01" data-screen-label="ERP">
      <div className="section-inner">
        <h2 className="h-title" data-reveal>
          Zafiro Farmacias es el ERP especializado en gestión farmacéutica
        </h2>
        <p className="eyebrow" data-reveal>
          Todo tu negocio en una sola plataforma, con datos en tiempo real. Multiempresa y multisucursal.
        </p>
        <div className="grid grid-3" data-stagger="80" style={{ marginTop: "clamp(32px,5vh,56px)" }}>
          <div className="card" data-reveal>
            <p className="card-title">Ventas</p>
            <p className="card-body">Control inteligente del mostrador, con gestión integrada de Obras Sociales, Cuentas Corrientes, Descuentos y Promociones.</p>
          </div>
          <div className="card" data-reveal>
            <p className="card-title">Cajas</p>
            <p className="card-body">Registro de ingresos y egresos, con cierre de caja controlados, integrados con la caja general de tesorería.</p>
          </div>
          <div className="card" data-reveal>
            <p className="card-title">Stock</p>
            <p className="card-body">Control de stock en tiempo real. Inventarios físicos y teóricos. Reposición diaria centralizada con proyección de demanda.</p>
          </div>
          <div className="card" data-reveal>
            <p className="card-title">Compras</p>
            <p className="card-body">Gestión de proveedores. Control de recepción de compras.</p>
          </div>
          <div className="card" data-reveal>
            <p className="card-title">Contabilidad</p>
            <p className="card-body">Libro diario, mayor y balances. Control de impuestos. Gestión de cuentas por pagar y cobrar.</p>
          </div>
          <div className="card" data-reveal>
            <p className="card-title">Fondos</p>
            <p className="card-body">Gestión de cuentas bancarias.</p>
          </div>
        </div>
        <CommentField
          sectionId={4}
          commentLabel="Sección — ERP (módulos)"
          value={commentValue}
          onChange={onCommentChange}
        />
      </div>
    </section>
  );
}
