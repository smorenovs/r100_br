import { CommentField } from "@/components/landing/CommentField";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

export function Section05({ commentValue, onCommentChange }: SectionProps) {
  return (
    <section className="section" id="section-5" data-section data-index="04" data-screen-label="Zafiro BI">
      <div className="section-inner">
        <div className="split">
          <div className="lead-col">
            <h2 className="h-title" data-reveal>Zafiro BI</h2>
            <p className="eyebrow" data-reveal>Decisiones informadas</p>
          </div>
          <div data-stagger="110" style={{ display: "grid", gap: "24px" }}>
            <p data-reveal style={{ margin: 0, fontSize: "clamp(16px,1.3vw,19px)", lineHeight: 1.75, color: "var(--text)" }}>
              Transformá datos dispersos en información estratégica y visual. Zafiro BI centraliza el rendimiento de tu negocio en un solo lugar, permitiendo tomar decisiones rápidas e informadas, mantener una visión integral de tu farmacia, y con la información disponible cada día de forma automática, sin que nadie tenga que armarla.
            </p>
            <div className="statement" data-reveal>
              <p>A las 7 a.m. ya tenés tu reporte</p>
            </div>
            <p className="eyebrow" data-reveal style={{ margin: 0 }}>
              La salud de tu farmacia está en la gestión
            </p>
          </div>
        </div>
        <CommentField
          sectionId={5}
          commentLabel="Sección — Zafiro BI"
          value={commentValue}
          onChange={onCommentChange}
        />
      </div>
    </section>
  );
}
