interface DotsNavProps {
  activeSectionId: string;
}

const dots = [
  { href: "#hero", label: "Inicio" },
  { href: "#section-4", label: "ERP" },
  { href: "#section-9", label: "Integraciones" },
  { href: "#section-11", label: "Escala" },
  { href: "#section-5", label: "Zafiro BI" },
  { href: "#section-8", label: "Zafiro ZIA" },
  { href: "#section-7", label: "Compras" },
  { href: "#closing", label: "Contacto" },
];

export function DotsNav({ activeSectionId }: DotsNavProps) {
  const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 40, behavior: reduce ? "auto" : "smooth" });
    }
  };

  return (
    <nav className="dots" aria-label="Secciones">
      {dots.map(({ href, label }) => {
        const id = href.slice(1);
        return (
          <a
            key={id}
            href={href}
            className={activeSectionId === id ? "active" : ""}
            onClick={(e) => handleClick(e, id)}
          >
            <span className="dot-label">{label}</span>
            <span className="dot"></span>
          </a>
        );
      })}
    </nav>
  );
}
