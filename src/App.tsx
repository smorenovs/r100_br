import { useState, useEffect, useCallback, useRef } from "react";
import type { CommentsState, SectionId } from "./types";
import { SectionHero } from "./components/landing/SectionHero";
import { SectionClosing } from "./components/landing/SectionClosing";
import { Divider } from "./components/landing/Divider";
import { DotsNav } from "./components/landing/DotsNav";
import { ScrollBar } from "./components/landing/ScrollBar";
import { Footer } from "./components/landing/Footer";
import {
  Section04, Section05,
  Section07, Section08, Section09, Section11,
} from "./components/landing/sections";

function getStored(key: string, fallback: string): string {
  try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; }
}
function setStored(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch { /* noop */ }
}

export default function App() {
  /* ---------- Comments state ---------- */
  const [comments, setComments] = useState<CommentsState>(() => {
    const initial: CommentsState = {};
    for (const id of [4, 5, 7, 8, 9, 11] as SectionId[]) {
      const saved = getStored("zf-note-" + id, "");
      if (saved) initial[id] = saved;
    }
    return initial;
  });

  const setComment = useCallback((id: SectionId, value: string) => {
    setComments((prev) => ({ ...prev, [id]: value }));
    setStored("zf-note-" + id, value);
  }, []);

  /* ---------- Theme ---------- */
  const [lightTheme, setLightThemeState] = useState(() => getStored("zf-theme", "dark") === "light");

  const toggleTheme = useCallback(() => {
    setLightThemeState((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("theme-light", next);
      setStored("zf-theme", next ? "light" : "dark");
      return next;
    });
  }, []);

  // Set initial theme class and direction attribute
  useEffect(() => {
    document.documentElement.classList.toggle("theme-light", lightTheme);
    document.documentElement.setAttribute("data-direction", "b");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ---------- Scroll progress ---------- */
  const scrollBarRef = useRef<HTMLDivElement>(null);

  /* ---------- Reveal + stagger ---------- */
  const revealDone = useRef(false);

  /* ---------- Parallax ---------- */
  const parallaxElsRef = useRef<HTMLElement[]>([]);

  /* ---------- Counters ---------- */
  const countersDone = useRef(new Set<HTMLElement>());

  /* ---------- Dots ---------- */
  const [activeSectionId, setActiveSectionId] = useState("hero");

  /* ---------- Combined scroll handler ---------- */
  const lastRunRef = useRef(0);
  const revealElsRef = useRef<HTMLElement[]>([]);

  const runScrollWork = useCallback(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scroll bar
    if (scrollBarRef.current) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? (window.scrollY / h) * 100 : 0;
      scrollBarRef.current.style.width = p + "%";
    }

    // Reveals
    if (!revealDone.current) {
      const vh = window.innerHeight;
      revealElsRef.current = revealElsRef.current.filter((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) {
          el.classList.add("in");
          return false;
        }
        return true;
      });
      if (revealElsRef.current.length === 0) revealDone.current = true;
    }

    // Counters
    if (!reduce) {
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => {
        if (countersDone.current.has(el)) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.82 && r.bottom > 0) {
          countersDone.current.add(el);
          animateCount(el, reduce);
        }
      });
    }

    // Parallax
    if (!reduce) {
      const vh = window.innerHeight;
      parallaxElsRef.current.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const factor = parseFloat(el.getAttribute("data-parallax") || "0.08");
        const center = r.top + r.height / 2 - vh / 2;
        el.style.setProperty("--py", (-center * factor).toFixed(1) + "px");
      });
    }

    // Dots - track active section
    const sections = document.querySelectorAll<HTMLElement>("[data-section]");
    const mark = window.innerHeight * 0.4;
    let current: HTMLElement | null = null;
    sections.forEach((s) => {
      if (s.getBoundingClientRect().top <= mark) current = s;
    });
    if (current && (current as HTMLElement).id) {
      setActiveSectionId((current as HTMLElement).id);
    }
  }, []);

  const onScroll = useCallback(() => {
    const now = performance.now();
    if (now - lastRunRef.current < 16) return;
    lastRunRef.current = now;
    runScrollWork();
  }, [runScrollWork]);

  /* ---------- Setup reveals, stagger, parallax, marquee, scroll ---------- */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Gather reveal elements
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduce) {
      els.forEach((el) => el.classList.add("in"));
    } else {
      revealElsRef.current = els;
      revealDone.current = false;
    }

    // Setup stagger delays
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
      const step = parseFloat(group.getAttribute("data-stagger") || "90");
      const children = group.querySelectorAll<HTMLElement>(":scope > [data-reveal]");
      children.forEach((el, i) => {
        el.style.transitionDelay = i * step + "ms";
      });
    });

    // Gather parallax elements
    parallaxElsRef.current = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));

    // Counters — if reduce, set final values immediately
    if (reduce) {
      document.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => {
        animateCount(el, true);
        countersDone.current.add(el);
      });
    }

    // Marquee duplication
    document.querySelectorAll<HTMLElement>(".marquee-track").forEach((track) => {
      track.innerHTML += track.innerHTML;
    });

    // Scroll listener
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial runs
    runScrollWork();
    const t1 = setTimeout(runScrollWork, 120);
    const t2 = setTimeout(runScrollWork, 400);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onScroll, runScrollWork]);

  return (
    <>
      <ScrollBar ref={scrollBarRef} />

      <header className="site-header">
        <div className="brand">
          <img src="/logo.svg" alt="Zafiro Farmacias" draggable={false} />
        </div>
        <div className="header-right">
          <a className="header-url" href="https://www.zafirofarmacias.com.ar" target="_blank" rel="noopener noreferrer">
            www.zafirofarmacias.com.ar
          </a>
          <button
            type="button"
            className="pill"
            onClick={toggleTheme}
            title={lightTheme ? "Cambiar a oscuro" : "Cambiar a claro"}
          >
            <span className="ico">{lightTheme ? "☽" : "☀"}</span>
            <span className="lbl">{lightTheme ? "Oscuro" : "Claro"}</span>
          </button>
        </div>
      </header>

      <DotsNav activeSectionId={activeSectionId} />

      <SectionHero />

      <Divider num="01" label="El producto" />
      <Section04 commentValue={comments[4] ?? ""} onCommentChange={(v) => setComment(4, v)} />

      <Divider num="02" label="Ecosistema" />
      <Section09 commentValue={comments[9] ?? ""} onCommentChange={(v) => setComment(9, v)} />

      <Divider num="03" label="Escala" />
      <Section11 commentValue={comments[11] ?? ""} onCommentChange={(v) => setComment(11, v)} />

      <Divider num="04" label="Inteligencia" />
      <Section05 commentValue={comments[5] ?? ""} onCommentChange={(v) => setComment(5, v)} />

      <Divider num="05" label="Automatización IA" />
      <Section08 commentValue={comments[8] ?? ""} onCommentChange={(v) => setComment(8, v)} />

      <Divider num="06" label="Reposición" />
      <Section07 commentValue={comments[7] ?? ""} onCommentChange={(v) => setComment(7, v)} />

      <Divider num="07" label="Contacto" />
      <SectionClosing comments={comments} />

      <Footer />
    </>
  );
}

/* ---------- Counter animation ---------- */
function animateCount(el: HTMLElement, reduce: boolean) {
  const to = parseFloat(el.getAttribute("data-to") || "0");
  const dur = parseInt(el.getAttribute("data-dur") || "1300", 10);
  const dec = parseInt(el.getAttribute("data-dec") || "0", 10);
  const pre = el.getAttribute("data-prefix") || "";
  const suf = el.getAttribute("data-suffix") || "";

  if (reduce) {
    el.textContent = pre + to.toFixed(dec) + suf;
    return;
  }

  const start = performance.now();
  function tick(now: number) {
    const t = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const v = to * eased;
    el.textContent = pre + v.toFixed(dec) + suf;
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = pre + to.toFixed(dec) + suf;
  }
  requestAnimationFrame(tick);
}
