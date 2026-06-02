import { SectionWrapper, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

const modules = [
  { name: "Ventas", desc: "Control inteligente del mostrador, con gestión integrada de Obras Sociales, Cuentas Corrientes, Descuentos y Promociones." },
  { name: "Cajas", desc: "Registro de ingresos y egresos, con cierre de caja controlados, integrados con la caja general de tesorería." },
  { name: "Stock", desc: "Control de stock en tiempo real. Inventarios físicos y teóricos. Reposición diaria centralizada con proyección de demanda." },
  { name: "Compras", desc: "Gestión de proveedores. Control de recepción de compras." },
  { name: "Contabilidad", desc: "Libro diario, mayor y balances. Control de impuestos. Gestión de cuentas por pagar y cobrar." },
  { name: "Fondos", desc: "Gestión de cuentas bancarias." },
];

export function Section04({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-4">
      <h2 className="font-black uppercase text-zafiro-accent leading-[1.05] tracking-[-0.02em] text-[clamp(28px,4.5vw,60px)] mb-4">
        Zafiro Farmacias es el ERP especializado en gestión farmacéutica
      </h2>
      <p className="text-zafiro-accent italic text-base lg:text-xl mb-12 font-light">
        Todo tu negocio en una sola plataforma, con datos en tiempo real. Multiempresa y multisucursal.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map(({ name, desc }) => (
          <div key={name} className="bg-zafiro-card rounded-xl px-5 py-4">
            <p className="font-black uppercase text-zafiro-accent text-base lg:text-lg tracking-wide mb-2">{name}</p>
            <p className="text-zafiro-text text-sm lg:text-base leading-[1.7] opacity-80">{desc}</p>
          </div>
        ))}
      </div>

      <CommentField sectionId={4} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
