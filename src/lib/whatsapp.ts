import type { CommentsState } from "@/types";

const SECTION_TITLES: Record<number, string> = {
  2:  "Decidir bien no es difícil. Lo difícil es tener la información a tiempo.",
  3:  "Con Zafiro, cumplís todo. Sin armar un proceso aparte para cada cosa.",
  4:  "Tenés todo en un solo sistema",
  5:  "Zafiro BI para que tomes decisiones con calma",
  6:  "Balances contables en minutos",
  7:  "Comprás mejor cuando tenés información útil a tu disposición",
  8:  "Menos trabajo repetitivo, más enfoque en lo valioso",
  9:  "Conectado con las herramientas que ya usás",
  11: "El mismo sistema, sin importar cuánto crezca el negocio",
};

const WHATSAPP_NUMBER = "5493835437049";

export function buildWhatsAppUrl(comments: CommentsState): string {
  const entries = (Object.entries(comments) as [string, string][])
    .filter(([, v]) => v && v.trim().length > 0)
    .sort(([a], [b]) => Number(a) - Number(b));

  if (entries.length === 0) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      "Hola, me interesa conocer más sobre Zafiro."
    )}`;
  }

  const lines: string[] = [
    "Observaciones — Presentación Zafiro Brasil 2026",
    "",
  ];

  for (const [id, value] of entries) {
    lines.push(`*Sección ${id} — ${SECTION_TITLES[Number(id)] ?? ""}*`);
    lines.push(value.trim());
    lines.push("");
  }

  lines.push("---");
  lines.push("Enviado desde la presentación web.");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}
