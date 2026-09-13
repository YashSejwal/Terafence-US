"use client";

import { useEffect, useState } from "react";
import { List, ChevronDown } from "lucide-react";

export type TocItem = { id: string; title: string };

type Props = {
  items: TocItem[];
};

export default function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (headings.length === 0) return;

    let frame: number | null = null;

    // The active section is the last heading that has crossed the top third of
    // the viewport — true even while scrolling through one very long section.
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
    const top = target.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
    history.replaceState(null, "", `#${id}`);
    setOpen(false);
  };

  if (items.length === 0) return null;

  const list = (
    <ol className="space-y-1">
      {items.map((item, index) => {
        const isActive = item.id === activeId;
        return (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(event) => go(event, item.id)}
              aria-current={isActive ? "location" : undefined}
              className={`group flex gap-3 rounded-md py-2 pl-3 pr-2 text-sm leading-snug transition-colors ${
                isActive
                  ? "bg-blue-50/70 font-medium text-blue-800"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span
                className={`tabular-nums ${isActive ? "text-blue-600" : "text-slate-400"}`}
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.title}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      {/* Mobile: collapsed by default so it never pushes the article down */}
      <div className="mb-10 rounded-xl border border-slate-200 bg-white xl:hidden">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="flex w-full items-center gap-3 px-4 py-3.5 text-left"
        >
          <List className="h-4 w-4 text-blue-600" aria-hidden />
          <span className="text-sm font-medium text-slate-900">
            In this article
            <span className="ml-2 font-normal text-slate-500">{items.length} sections</span>
          </span>
          <ChevronDown
            className={`ml-auto h-4 w-4 text-slate-400 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden
          />
        </button>
        {open && <div className="border-t border-slate-100 px-2 pb-3 pt-2">{list}</div>}
      </div>

      {/* Desktop: sticky rail */}
      <nav aria-label="Table of contents" className="hidden xl:block">
        <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
          <p className="mb-3 pl-3 text-sm font-medium text-slate-900">In this article</p>
          {list}
        </div>
      </nav>
    </>
  );
}
