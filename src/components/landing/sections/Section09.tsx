import { SectionWrapper, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

const integrations = [
  "Facturación electrónica",
  "Medios de pago",
  "Validación de Bonos y Obras Sociales",
  "Robots",
  "eCommerce",
  "CRM",
  "Droguerías",
  "Proveedores no farmacéuticos",
  "Colectores de datos",
];

export function Section09({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-9">
      <h2 className="font-black uppercase text-zafiro-accent leading-[1.05] tracking-[-0.02em] text-[clamp(28px,4.5vw,60px)] mb-4">
        Contamos con un potente ecosistema de integraciones
      </h2>
      <p className="text-zafiro-accent italic text-base lg:text-xl mb-12 font-light">
        Lo que le funciona a tu empresa, lo conectamos y potenciamos
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
        {integrations.map((name) => (
          <div key={name} className="bg-zafiro-card rounded-xl px-5 py-4">
            <p className="font-black uppercase text-zafiro-text text-base lg:text-xl tracking-tight leading-tight text-center">{name}</p>
          </div>
        ))}
      </div>

      <CommentField sectionId={9} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
