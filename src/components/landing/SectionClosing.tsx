import { SectionWrapper } from "./SectionWrapper";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { CommentsState } from "@/types";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

interface SectionClosingProps {
  comments: CommentsState;
}

export function SectionClosing({ comments }: SectionClosingProps) {
  const handleSend = () => {
    const url = buildWhatsAppUrl(comments);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <SectionWrapper fullHeight className="items-center text-center" id="closing">
      <img
        src="/logo.svg"
        alt="Zafiro Farmacia"
        className="w-[100px] sm:w-[130px] mx-auto mb-10 select-none"
        draggable={false}
      />

      <h2 className="font-black uppercase text-zafiro-accent leading-[0.92] tracking-[-0.02em] text-[clamp(28px,4vw,54px)] max-w-[14ch] mb-6 mx-auto">
        ¿Algo de lo que viste merece una conversación?
      </h2>

      <p className="text-zafiro-muted text-base lg:text-lg leading-[1.7] max-w-[44ch] mb-4 mx-auto">
        Si alguna sección generó una pregunta o un "esto nos pasa", escribilo. El equipo de Zafiro lo va a leer y se va a poner en contacto con vos.
      </p>

      {/* Aviso de acción requerida */}
      <div className="flex items-center gap-2 justify-center mb-10 bg-zafiro-surface border border-zafiro-dark rounded-xl px-5 py-3 max-w-[44ch] mx-auto">
        <WhatsAppIcon />
        <p className="text-zafiro-text text-sm leading-snug text-left">
          <strong>Importante:</strong> tus notas solo llegan si presionás "Enviar mis notas". Si solo las escribiste en la página, el equipo no las va a ver.
        </p>
      </div>

      <button
        type="button"
        onClick={handleSend}
        className="flex items-center gap-3 bg-[#25D366] text-white font-black uppercase tracking-wider rounded-full px-8 py-4 lg:px-10 lg:py-[18px] text-sm lg:text-base min-h-[52px] hover:opacity-90 active:opacity-80 transition-opacity duration-150 mx-auto cursor-pointer"
      >
        <WhatsAppIcon />
        Enviar mis notas
      </button>

      <p className="text-zafiro-dark text-xs mt-6 uppercase tracking-widest">
        Solo se enviarán las secciones donde hayas escrito comentarios.
      </p>
    </SectionWrapper>
  );
}
