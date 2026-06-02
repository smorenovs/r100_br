import { CommentField } from "@/components/landing/CommentField";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

const row1 = [
  "Facturación electrónica",
  "Medios de pago",
  "Validación de Bonos y Obras Sociales",
  "Robots",
  "eCommerce",
];

const row2 = [
  "CRM",
  "Droguerías",
  "Proveedores no farmacéuticos",
  "Colectores de datos",
];

export function Section09({ commentValue, onCommentChange }: SectionProps) {
  return (
    <section className="section" id="section-9" data-section data-index="02" data-screen-label="Integraciones">
      <div className="section-inner">
        <h2 className="h-title" data-reveal>
          Contamos con un potente ecosistema de integraciones
        </h2>
        <p className="eyebrow" data-reveal>
          Lo que le funciona a tu empresa, lo conectamos y potenciamos
        </p>
      </div>
      <div style={{ marginTop: "clamp(36px,6vh,64px)" }} data-reveal>
        <div className="marquee">
          <div className="marquee-track">
            {[...row1, ...row1].map((name, i) => (
              <span className="chip" key={i}>
                <span className="ck">✓</span>{name}
              </span>
            ))}
          </div>
        </div>
        <div className="marquee rtl">
          <div className="marquee-track">
            {[...row2, ...row2].map((name, i) => (
              <span className="chip" key={i}>
                <span className="ck">✓</span>{name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="section-inner">
        <CommentField
          sectionId={9}
          commentLabel="Sección — Integraciones"
          value={commentValue}
          onChange={onCommentChange}
        />
      </div>
    </section>
  );
}
