"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

type Props = {
  /** id of the element whose scroll span defines "the article". */
  targetId: string;
  title: string;
};

export default function ReadingProgress({ targetId, title }: Props) {
  const [progress, setProgress] = useState(0);
  const [showBar, setShowBar] = useState(false);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const update = () => {
      frame.current = null;
      const { top, height } = target.getBoundingClientRect();
      const viewport = window.innerHeight;
      const scrolled = Math.min(Math.max(-top, 0), Math.max(height - viewport, 1));
      const total = Math.max(height - viewport, 1);
      setProgress(Math.min(scrolled / total, 1));
      setShowBar(top < 0);
    };

    const onScroll = () => {
      if (frame.current === null) frame.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, [targetId]);

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-opacity duration-200 ${
          showBar ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="border-b border-[var(--v-line)] bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
          <div className="mx-auto flex h-12 max-w-5xl items-center px-4 lg:px-6">
            <p className="truncate text-sm font-medium text-[var(--v-slate)]">{title}</p>
            <span className="ml-auto pl-4 text-sm tabular-nums text-slate-500">
              {Math.round(progress * 100)}%
            </span>
          </div>
        </div>
        <div
          role="progressbar"
          aria-label="Article reading progress"
          aria-valuenow={Math.round(progress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-0.5 origin-left bg-[var(--v-blue)]"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--v-line)] bg-white text-[var(--v-slate)] shadow-lg transition-all hover:border-[var(--v-blue)] hover:text-[var(--v-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--v-blue)] ${
          progress > 0.15 ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <span className="sr-only">Back to top</span>
        <ArrowUp className="h-5 w-5" aria-hidden />
      </button>
    </>
  );
}

