"use client";

import { useEffect, useState } from "react";
import { List, ChevronDown } from "lucide-react";

export type TocItem = { id: string; title: string };

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (headings.length === 0) return;

    let frame: number | null = null;
    const update = () => {
      frame = null;
      const marker = window.innerHeight * 0.3;
      let current = headings[0].id;
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= marker) current = heading.id;
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [items]);

  const go = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 88,
      behavior: reduced ? "auto" : "smooth",
    });
    history.replaceState(null, "", `#${id}`);
    setOpen(false);
  };

  if (items.length === 0) return null;

  const list = (
    <ol className="border-l border-[var(--v-line)]">
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <li key={item.id} className="-ml-px">
            <a
              href={`#${item.id}`}
              onClick={(event) => go(event, item.id)}
              aria-current={isActive ? "location" : undefined}
              className={`block border-l-2 py-2 pl-4 pr-2 text-sm leading-snug transition-colors ${
                isActive
                  ? "border-[var(--v-ink)] font-medium text-[var(--v-ink)]"
                  : "border-transparent text-slate-500 hover:border-[var(--v-line)] hover:text-[var(--v-ink)]"
              }`}
            >
              {item.title}
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      <div className="mb-10 rounded-xl border border-[var(--v-line)] lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
        >
          <List className="h-4 w-4 text-[var(--v-blue)]" aria-hidden />
          <span className="text-sm font-medium text-[var(--v-ink)]">
            Contents
            <span className="ml-2 font-normal text-slate-500">{items.length} sections</span>
          </span>
          <ChevronDown
            className={`ml-auto h-4 w-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
        {open && <div className="px-4 pb-4">{list}</div>}
      </div>

      <nav aria-label="Table of contents" className="hidden lg:block">
        <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">
            Contents
          </p>
          {list}
        </div>
      </nav>
    </>
  );
}

