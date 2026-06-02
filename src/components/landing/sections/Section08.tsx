import { CommentField } from "@/components/landing/CommentField";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

export function Section08({ commentValue, onCommentChange }: SectionProps) {
  return (
    <section className="section" id="section-8" data-section data-index="05" data-screen-label="Zafiro ZIA">
      <div className="section-inner">
        <div className="split">
          <div data-stagger="110" style={{ display: "grid", gap: "24px", alignContent: "start" }}>
            <div data-reveal>
              <h2 className="h-title" style={{ fontSize: "clamp(28px,4vw,56px)" }}>Zafiro ZIA</h2>
              <p className="eyebrow" style={{ marginTop: "8px" }}>Procesos automatizados</p>
            </div>
            <p data-reveal style={{ margin: 0, fontSize: "clamp(16px,1.3vw,19px)", lineHeight: 1.75, color: "var(--text)" }}>
              Automatizá el ingreso de facturas de compras y stock usando Inteligencia Artificial, con lectura directa desde PDFs o escaneos. ZIA identifica productos, precios y descuentos automáticamente, el encargado solo revisa y confirma, sin tipear nada.
            </p>
            <div className="statement" data-reveal>
              <p className="num">
                <span data-counter data-to="95" data-prefix="-" data-suffix="%">-95%</span> de tiempo en tareas poco productivas
              </p>
            </div>
            <p className="eyebrow" data-reveal style={{ margin: 0 }}>
              La salud de tu farmacia está en la gestión
            </p>
          </div>
          <div className="window-wrap" data-reveal data-parallax="0.05">
            <figure className="window float" style={{ margin: 0, background: "#fff" }}>
              <img className="shot" src="/img_slide_8.png" alt="ZIA — procesamiento de factura PDF" draggable={false} />
            </figure>
          </div>
        </div>
        <CommentField
          sectionId={8}
          commentLabel="Sección — Zafiro ZIA"
          value={commentValue}
          onChange={onCommentChange}
        />
      </div>
    </section>
  );
}
