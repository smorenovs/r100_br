import { SectionWrapper, ScriptText, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

const integrations = [
  { name: "Mercado Pago", category: "Medios de pago" },
  { name: "Tiendastic", category: "eCommerce" },
  { name: "Drubbit", category: "eCommerce" },
  { name: "Sud", category: "Droguerías / Proveedores" },
  { name: "WoowUp", category: "CRM" },
  { name: "WIBI", category: "CRM" },
  { name: "Akeron", category: "Depósitos y Logística" },
  { name: "Monroe", category: "Droguerías / Proveedores" },
  { name: "Colfarma", category: "Servicio de validaciones" },
  { name: "Farmalink", category: "Servicio de validaciones" },
  { name: "IMED", category: "Servicio de validaciones" },
  { name: "Suizo", category: "Droguerías / Proveedores" },
];

export function Section09({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-9" slideNum="8/10">
      <h2 className="font-black uppercase text-zafiro-accent leading-[0.92] tracking-[-0.02em] text-[clamp(28px,4.5vw,60px)] mb-4">
        Conectado con las herramientas que ya usás
      </h2>
      <p className="text-zafiro-accent italic text-base lg:text-xl mb-12 font-light">
        No reemplazamos lo que ya funciona. Lo conectamos. Los datos fluyen en ambas direcciones.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {integrations.map(({ name, category }) => (
          <div key={name} className="bg-zafiro-card rounded-xl px-5 py-4">
            <p className="font-black uppercase text-zafiro-text text-base lg:text-lg tracking-tight leading-tight">{name}</p>
            <p className="text-zafiro-accent text-xs uppercase tracking-wider mt-2 leading-snug opacity-80">{category}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-zafiro-muted text-sm text-center italic">
        Entre otras, y se sumarán más
      </p>

      <ScriptText>
        <p>Zafiro no reemplaza las herramientas que ya funcionan en el negocio. Las conecta.</p>
        <p>Tenemos integraciones con Mercado Pago, WoowUp, Tiendastic, Drubbit, WIBI, Akeron, Sud, Monroe, Suizo, y validación directa con Colfarma, Farmalink e IMED, entre otras. El ecosistema de integraciones sigue creciendo.</p>
        <p>Lo importante es que cuando se conecta una herramienta a Zafiro, los datos fluyen en ambas direcciones. Los sistemas se hablan y los datos se centralizan.</p>
      </ScriptText>

      <CommentField sectionId={9} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
