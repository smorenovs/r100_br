export function SectionHero() {
  return (
    <section className="hero" id="hero" data-section data-screen-label="Hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="bg-glow"></div>
        <img className="bg-mark" src="/logo_z.svg" alt="" />
        <div className="bg-grid"></div>
        <div className="bg-aurora">
          <span className="blob b1"></span>
          <span className="blob b2"></span>
          <span className="blob b3"></span>
        </div>
      </div>
      <div className="hero-inner">
        <h1 data-reveal>VS Ingeniería en Sistemas</h1>
        <div className="hero-lead" data-stagger="120">
          <p data-reveal>
            Desde 1998, brindando control absoluto, visibilidad total y un crecimiento ilimitado a farmacias y droguerías de todo el país.
          </p>
          <p data-reveal>
            Con la <strong>Atención al Cliente</strong> y la <strong>Mejora Continua</strong> como horizonte, nuestro <strong>compromiso</strong> es construir el sistema que permite a farmacias y droguerías gestionar su operación por completo, tomar decisiones informadas y crecer sin límites.
          </p>
        </div>
        <div className="hero-foot" data-reveal>
          <span className="rule"></span>
          <a href="https://www.zafirofarmacias.com.ar" target="_blank" rel="noopener noreferrer">
            www.zafirofarmacias.com.ar
          </a>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">↓</div>
    </section>
  );
}
