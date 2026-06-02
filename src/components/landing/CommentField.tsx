import { useState, useRef, useCallback } from "react";
import type { SectionId } from "@/types";

interface CommentFieldProps {
  sectionId: SectionId;
  commentLabel: string;
  value: string;
  onChange: (value: string) => void;
}

export function CommentField({ sectionId, commentLabel, value, onChange }: CommentFieldProps) {
  const [open, setOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const hasNote = value.trim().length > 0;

  const handleToggle = useCallback(() => {
    setOpen((prev) => {
      const next = !prev;
      if (next) setTimeout(() => textareaRef.current?.focus(), 160);
      return next;
    });
  }, []);

  const classes = [
    "comment",
    open ? "open" : "",
    hasNote ? "has-note" : "",
  ].filter(Boolean).join(" ");

  return (
    <div className={classes} data-comment={sectionId} data-comment-label={commentLabel} data-reveal>
      <button type="button" className="comment-toggle" onClick={handleToggle}>
        ¿Tenés algún comentario sobre esta sección?<span className="plus">+</span>
      </button>
      <div className="comment-body">
        <div>
          <textarea
            ref={textareaRef}
            placeholder="Escribí tu observación aquí…"
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
