import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { CommentsState, SectionId } from "../types";
import { SectionHero, SectionDivider, SectionClosing } from "../components/landing";
import {
  Section02, Section03, Section04, Section05, Section06,
  Section07, Section08, Section09, Section10, Section11,
} from "../components/landing/sections";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Zafiro — Convención Brasil 2026" },
      { name: "description", content: "Conocé Zafiro, el ERP construido para el rubro farmacéutico." },
    ],
  }),
});

function LandingPage() {
  const [comments, setComments] = useState<CommentsState>({});

  const setComment = (id: SectionId, value: string) =>
    setComments((prev) => ({ ...prev, [id]: value }));

  return (
    <div className="bg-zafiro-bg min-h-screen font-sans text-zafiro-text">
      {/* Header fijo — replicando el branding de las slides */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[4vw] lg:px-[10vw] py-3 bg-zafiro-bg/80 backdrop-blur-sm border-b border-zafiro-dark/40">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Zafiro" className="h-7 w-auto select-none" draggable={false} />
          <div className="leading-none">
            <p className="text-zafiro-accent font-black text-[11px] tracking-[0.18em] uppercase">Zafiro Farmacias</p>
            <p className="text-zafiro-muted text-[9px] tracking-[0.14em] uppercase mt-0.5">Sistema de Gestión Farmacéutico</p>
          </div>
        </div>
        <p className="text-zafiro-muted text-[10px] tracking-widest uppercase hidden sm:block">
          www.zafirofarmacias.com.ar
        </p>
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
      <Section10 commentValue={comments[10] ?? ""} onCommentChange={(v) => setComment(10, v)} />

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
