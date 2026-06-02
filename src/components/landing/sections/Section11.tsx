import { SectionWrapper, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

const stats = [
  { title: "Multisucursal", desc: "Gestión centralizada o distribuida, desde una sola plataforma." },
  { title: "Alta Concurrencia", desc: "Cientos de puestos operando en simultáneo, sin fricción." },
  { title: "Escala Real", desc: "Millones de operaciones procesadas sin tener que cambiar de sistema." },
];

export function Section11({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-11">
      <h2 className="font-black uppercase text-zafiro-accent leading-[1.05] tracking-[-0.02em] text-[clamp(28px,4.5vw,60px)] mb-4">
        Listo para multisucursal desde el primer día
      </h2>
      <p className="text-zafiro-accent italic text-base lg:text-xl mb-12 font-light">
        Todo tu negocio en una sola plataforma, con datos en tiempo real. Multiempresa y multisucursal
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map(({ title, desc }) => (
          <div key={title} className="bg-zafiro-surface border border-zafiro-dark rounded-xl px-5 py-5">
            <p className="font-black text-zafiro-accent text-xl leading-none tracking-tight mb-3">{title}</p>
            <p className="text-zafiro-muted text-sm lg:text-base leading-[1.7]">{desc}</p>
          </div>
        ))}
      </div>

      <CommentField sectionId={11} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
