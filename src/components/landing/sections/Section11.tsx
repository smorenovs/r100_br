import { CommentField } from "@/components/landing/CommentField";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

export function Section11({ commentValue, onCommentChange }: SectionProps) {
  return (
    <section className="section" id="section-11" data-section data-index="03" data-screen-label="Multisucursal">
      <div className="section-inner">
        <h2 className="h-title" data-reveal>
          Listo para multisucursal desde el primer día
        </h2>
        <p className="eyebrow" data-reveal>
          Todo tu negocio en una sola plataforma, con datos en tiempo real. Multiempresa y multisucursal
        </p>
        <div className="split rev" style={{ marginTop: "clamp(32px,5vh,56px)" }}>
          <div className="grid" data-stagger="100" style={{ alignContent: "start" }}>
            <div className="stat-card" data-reveal>
              <p className="st-title">Multisucursal</p>
              <p className="st-body">Gestión centralizada o distribuida, desde una sola plataforma.</p>
            </div>
            <div className="stat-card" data-reveal>
              <p className="st-title">Alta Concurrencia</p>
              <p className="st-body">Cientos de puestos operando en simultáneo, sin fricción.</p>
            </div>
            <div className="stat-card" data-reveal>
              <p className="st-title">Escala Real</p>
              <p className="st-body">Millones de operaciones procesadas sin tener que cambiar de sistema.</p>
            </div>
          </div>
          <div className="diagram-wrap" data-reveal data-parallax="0.05" style={{ display: "grid", placeItems: "center" }}>
            <img
              src="/img_slide_11.png"
              alt="Arquitectura multisucursal: central, sucursales y puestos de trabajo"
              style={{ width: "100%", maxWidth: "480px", height: "auto" }}
              draggable={false}
            />
          </div>
        </div>
        <CommentField
          sectionId={11}
          commentLabel="Sección — Multisucursal / Escala"
          value={commentValue}
          onChange={onCommentChange}
        />
      </div>
    </section>
  );
}
