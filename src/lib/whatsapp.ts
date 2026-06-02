import type { CommentsState } from "@/types";

const WA_PHONE = "5493834538112";

const SECTION_LABELS: Record<number, string> = {
  4: "Sección — ERP (módulos)",
  5: "Sección — Zafiro BI",
  7: "Sección — Compras / Proyección",
  8: "Sección — Zafiro ZIA",
  9: "Sección — Integraciones",
  11: "Sección — Multisucursal / Escala",
};

export function collectNotes(comments: CommentsState): string[] {
  const out: string[] = [];
  const orderedIds = [4, 9, 11, 5, 8, 7] as const;
  for (const id of orderedIds) {
    const value = comments[id];
    if (value && value.trim()) {
      out.push("• " + (SECTION_LABELS[id] ?? String(id)) + ":\n" + value.trim());
    }
  }
  return out;
}

export function buildWhatsAppUrl(comments: CommentsState): string {
  const notes = collectNotes(comments);
  let msg = "Hola Zafiro, vengo de la presentación retail100.";
  if (notes.length) {
    msg += "\n\nMis notas:\n\n" + notes.join("\n\n");
  } else {
    msg += "\n\nMe gustaría que me contacten.";
  }
  return "https://wa.me/" + WA_PHONE + "?text=" + encodeURIComponent(msg);
}
