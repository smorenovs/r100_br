import type { CommentsState } from "@/types";

const SECTION_TITLES: Record<number, string> = {
  2:  "En Argentina, quien decide tarde, pierde",
  3:  "Todo lo que el rubro exige, Zafiro ya lo tiene",
  4:  "Seis módulos, un solo sistema",
  5:  "El gerente ve todo el negocio antes del desayuno",
  6:  "El balance ya está hecho cuando el contador lo necesita",
  7:  "Comprás mejor cuando el sistema ya analizó qué necesitás",
  8:  "Menos tiempo en lo repetitivo. Más tiempo en lo que importa.",
  9:  "Conectado con las herramientas que ya usás",
  10: "Zafiro sabe lo que PAMI cubre antes de que llegue al afiliado",
  11: "El mismo sistema cuando sean el doble de grandes",
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
