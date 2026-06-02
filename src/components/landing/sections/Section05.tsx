import { SectionWrapper, CommentField } from "@/components/landing";

interface SectionProps {
  commentValue: string;
  onCommentChange: (v: string) => void;
}

export function Section05({ commentValue, onCommentChange }: SectionProps) {
  return (
    <SectionWrapper id="section-5">
      <div className="flex flex-col lg:flex-row gap-12 lg:items-start">

        <div className="lg:w-[40%]">
          <h2 className="font-black uppercase text-zafiro-accent leading-[1.05] tracking-[-0.02em] text-[clamp(30px,4vw,58px)]">
            Zafiro BI
          </h2>
          <p className="text-zafiro-accent italic text-base lg:text-xl mt-2 font-light">
            Decisiones informadas
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <p className="text-base lg:text-lg leading-[1.75] text-zafiro-text">
            Transformá datos dispersos en información estratégica y visual. Zafiro BI centraliza el rendimiento de tu negocio en un solo lugar, permitiendo tomar decisiones rápidas e informadas, mantener una visión integral de tu farmacia, y con la información disponible cada día de forma automática, sin que nadie tenga que armarla.
          </p>

          <div className="bg-zafiro-card rounded-xl px-8 py-6">
            <p className="font-black uppercase text-zafiro-accent leading-none tracking-tight text-[clamp(24px,3.5vw,48px)]">
              A las 7 a.m. ya tenés tu reporte
            </p>
          </div>

          <p className="text-zafiro-accent italic text-base lg:text-lg font-light">
            La salud de tu farmacia está en la gestión
          </p>
        </div>
      </div>

      <CommentField sectionId={5} value={commentValue} onChange={onCommentChange} />
    </SectionWrapper>
  );
}
