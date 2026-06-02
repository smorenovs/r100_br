import { useState } from "react";
import type { CommentsState, SectionId } from "./types";
import { SectionHero, SectionDivider, SectionClosing } from "./components/landing";
import {
  Section02, Section03, Section04, Section05, Section06,
  Section07, Section08, Section09, Section11,
} from "./components/landing/sections";

export default function App() {
  const [comments, setComments] = useState<CommentsState>({});
  const [lightTheme, setLightTheme] = useState(false);

  const setComment = (id: SectionId, value: string) =>
    setComments((prev) => ({ ...prev, [id]: value }));

  return (
    <div className={`bg-zafiro-bg min-h-screen font-sans text-zafiro-text${lightTheme ? " theme-light" : ""}`}>
      {/* Header fijo — replicando el branding de las slides */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[4vw] lg:px-[10vw] py-3 bg-zafiro-bg/80 backdrop-blur-sm border-b border-zafiro-dark/40">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Zafiro" className="h-7 w-auto select-none" draggable={false} />
          <div className="leading-none">
            <p className="text-zafiro-accent font-black text-[11px] tracking-[0.18em] uppercase">Zafiro Farmacias</p>
            <p className="text-zafiro-muted text-[9px] tracking-[0.14em] uppercase mt-0.5">Sistema de Gestión Farmacéutico</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.zafirofarmacias.com.ar" target="_blank" rel="noopener noreferrer" className="text-zafiro-muted text-[10px] tracking-widest uppercase hidden sm:block hover:text-zafiro-accent transition-colors">
            www.zafirofarmacias.com.ar
          </a>
          <button
            type="button"
            onClick={() => setLightTheme((v) => !v)}
            title={lightTheme ? "Cambiar a oscuro" : "Cambiar a claro"}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zafiro-dark/40 text-zafiro-muted hover:text-zafiro-accent hover:border-zafiro-accent/50 transition-colors text-[10px] tracking-widest uppercase select-none"
          >
            <span className="text-[13px] leading-none">{lightTheme ? "☽" : "☀"}</span>
            <span className="hidden sm:inline">{lightTheme ? "Oscuro" : "Claro"}</span>
          </button>
        </div>
      </header>

      <div className="pt-[52px]">
        <SectionHero />

        <SectionDivider />
        <Section02 commentValue={comments[2] ?? ""} onCommentChange={(v) => setComment(2, v)} />

        <SectionDivider />
        <Section03 commentValue={comments[3] ?? ""} onCommentChange={(v) => setComment(3, v)} />

        <SectionDivider />
        <Section04 commentValue={comments[4] ?? ""} onCommentChange={(v) => setComment(4, v)} />

        <SectionDivider />
        <Section05 commentValue={comments[5] ?? ""} onCommentChange={(v) => setComment(5, v)} />

        <SectionDivider />
        <Section06 commentValue={comments[6] ?? ""} onCommentChange={(v) => setComment(6, v)} />

        <SectionDivider />
        <Section07 commentValue={comments[7] ?? ""} onCommentChange={(v) => setComment(7, v)} />

        <SectionDivider />
        <Section08 commentValue={comments[8] ?? ""} onCommentChange={(v) => setComment(8, v)} />

        <SectionDivider />
        <Section09 commentValue={comments[9] ?? ""} onCommentChange={(v) => setComment(9, v)} />

        <SectionDivider />
        <Section11 commentValue={comments[11] ?? ""} onCommentChange={(v) => setComment(11, v)} />

        <SectionClosing comments={comments} />

        <footer className="text-center text-zafiro-dark text-xs pb-[4vh]">
          Zafiro · V&amp;S Sistemas · Convención Brasil 2026
        </footer>
      </div>
    </div>
  );
}
