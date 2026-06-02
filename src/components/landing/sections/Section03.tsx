import { SectionWrapper, ScriptText, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

const items = [
  {
    num: "01",
    label: "ARCA",
    desc: "CAE en el momento. Si ARCA cae, el operador puede cambiar a una caja CAEA para que el punto de venta no se detenga.",
  },
  {
    num: "02",
    label: "Obras Sociales",
    desc: "El cajero no calcula nada. El sistema conoce el convenio y aplica el descuento.",
  },
  {
    num: "03",
    label: "ANMAT",
    desc: "Trazabilidad integrada. El registro de ingresos y egresos con lector QR está dentro del mismo sistema. Sin herramientas separadas, sin reportes manuales desde otro lado.",
  },
  {
    num: "04",
    label: "Contabilidad",
    desc: "Preasientos por operación, asiento resumen por período. El contador no carga dos veces lo que el sistema ya sabe.",
  },
];

export function Section03({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-3">
      <h2 className="font-black uppercase text-zafiro-accent leading-[1.05] tracking-[-0.02em] text-[clamp(28px,4.5vw,60px)] mb-12">
        Con Zafiro, cumplís todo.{" "}
        <br className="hidden sm:block" />
        Sin procesos externos para cada cosa.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {items.map(({ num, label, desc }) => (
          <div key={num} className="bg-zafiro-card rounded-xl p-6 flex flex-col gap-3">
            <span className="font-black text-[clamp(36px,4vw,52px)] leading-none text-zafiro-accent opacity-60 tracking-tight">
              {num}
            </span>
            <p className="font-black uppercase text-zafiro-text text-lg lg:text-xl tracking-wide">
              {label}
            </p>
            <p className="text-zafiro-text text-sm lg:text-base leading-[1.7] opacity-80">
              {desc}
            </p>
          </div>
        ))}
      </div>

      <ScriptText>
        <p>Todo esto ya viene integrado en Zafiro. No tenes que hacer nada extra, ninguna configuración, ni costos adicionales. Es lo indispensable para que tu farmacia pueda funcionar como debe.</p>
      </ScriptText>

      <CommentField sectionId={3} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
