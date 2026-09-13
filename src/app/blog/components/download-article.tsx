"use client";

import { Download, Printer } from "lucide-react";
import type { BlogPost } from "@/app/data/blog/article";

type Props = {
  post: BlogPost;
  /** "panel" is the boxed version for the dark article header. */
  variant?: "panel" | "inline";
};

/**
 * One control, two behaviours:
 *  - post.pdf present  -> downloads the real file, no dialog
 *  - post.pdf absent   -> opens the browser print dialog, which the print
 *                         stylesheet turns into a clean PDF of the article
 */
export default function DownloadArticle({ post, variant = "panel" }: Props) {
  const filename = `terafence-${post.slug}.pdf`;

  if (variant === "inline") {
    return post.pdf ? (
      <a
        href={post.pdf.url}
        download={filename}
        className="inline-flex items-center gap-2 rounded-lg border border-[var(--v-line)] px-4 py-3 text-sm font-medium text-[var(--v-ink)] transition-colors hover:border-[var(--v-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--v-blue)]"
      >
        <Download className="h-4 w-4" aria-hidden />
        PDF · {post.pdf.pages} pages
      </a>
    ) : (
      <button
        type="button"
        onClick={() => window.print()}
        className="inline-flex items-center gap-2 rounded-lg border border-[var(--v-line)] px-4 py-3 text-sm font-medium text-[var(--v-ink)] transition-colors hover:border-[var(--v-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--v-blue)]"
      >
        <Printer className="h-4 w-4" aria-hidden />
        Save as PDF
      </button>
    );
  }

  if (post.pdf) {
    return (
      <a
        href={post.pdf.url}
        download={filename}
        className="group flex items-center justify-between gap-4 rounded-xl bg-white p-5 text-[var(--v-ink)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--v-peri)]"
      >
        <span>
          <span className="block font-semibold">Download the brief</span>
          <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-slate-500">
            PDF · {post.pdf.pages} pages · {post.pdf.size}
          </span>
        </span>
        <Download className="h-5 w-5 flex-none text-[var(--v-blue)]" aria-hidden />
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="group flex w-full items-center justify-between gap-4 rounded-xl border border-white/20 bg-white/5 p-5 text-left text-white transition-colors hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--v-peri)]"
    >
      <span>
        <span className="block font-semibold">Save as PDF</span>
        <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">
          Opens your print dialog
        </span>
      </span>
      <Printer className="h-5 w-5 flex-none text-[var(--v-peri)]" aria-hidden />
    </button>
  );
}

