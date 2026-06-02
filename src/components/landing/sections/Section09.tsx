import { SectionWrapper, ScriptText, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

const integrations = [
  { name: "Facturación electrónica"},
  { name: "Validación de Obras Sociales"},
  { name: "Robots dispensadores"},
  { name: "Droguerías"},
  { name: "eCommerce"},
  { name: "CRM"},
  { name: "Proveedores de art. no farmacéuticos"},
  { name: "Medios de pago"},
  { name: "Colectores de datos"}
];

export function Section09({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-9">
      <h2 className="font-black uppercase text-zafiro-accent leading-[1.05] tracking-[-0.02em] text-[clamp(28px,4.5vw,60px)] mb-4">
        Conectado con las herramientas que ya usás
      </h2>
      <p className="text-zafiro-accent italic text-base lg:text-xl mb-12 font-light">
        No reemplazamos lo que ya funciona. Lo conectamos. Los datos fluyen en ambas direcciones.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
        {integrations.map(({ name }) => (
          <div key={name} className="bg-zafiro-card rounded-xl px-5 py-4">
            <p className="font-black uppercase text-zafiro-text text-base lg:text-xl tracking-tight leading-tight text-center">{name}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-zafiro-muted text-sm text-center italic">
        Entre otras, y se sumarán más
      </p>

      <ScriptText>
        <p>Tenemos integraciones con empresas como Mercado Pago, WoowUp, Tiendastic, Drubbit, WIBI o Akeron, proveedores como Sud, Monroe y Suizo, y validación directa con Colfarma, Farmalink e IMED, entre otras. </p>
        <p>Y esto no es todo, el ecosistema de integraciones sigue creciendo. Nuestra filosofía es conectar herramientas para potenciar y simplificar la operativa diaria.</p>
      </ScriptText>

      <CommentField sectionId={9} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
