import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Textarea } from "@/components/ui/textarea";
import type { SectionId } from "@/types";

interface CommentFieldProps {
  sectionId: SectionId;
  value: string;
  onChange: (value: string) => void;
}

export function CommentField({ sectionId, value, onChange }: CommentFieldProps) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="mt-[4vh]">
      <CollapsibleTrigger asChild>
        <button
          type="button"
          className="w-full flex items-center justify-between border border-dashed border-zafiro-dark rounded-xl px-5 py-[14px] bg-zafiro-surface hover:border-zafiro-accent transition-colors duration-150 min-h-[48px] cursor-pointer"
        >
          <span className="text-zafiro-accent text-sm lg:text-base font-normal text-left">
            ¿Tenés algún comentario sobre esta sección?
          </span>
          <span className="text-zafiro-muted text-lg ml-4 flex-shrink-0 leading-none">
            {open ? "−" : "+"}
          </span>
        </button>
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
        <Textarea
          id={`comment-${sectionId}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Escribí tu observación aquí…"
          className="mt-2 bg-zafiro-bg border-zafiro-dark text-zafiro-text placeholder:text-zafiro-muted placeholder:italic focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none min-h-[120px] lg:min-h-[100px] text-base resize-y"
        />
      </CollapsibleContent>
    </Collapsible>
  );
}
