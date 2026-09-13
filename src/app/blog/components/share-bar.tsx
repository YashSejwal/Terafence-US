"use client";

import { useState } from "react";
import { Linkedin, Link2, Check, Mail } from "lucide-react";

type Props = {
  url: string;
  title: string;
  tone?: "dark" | "light";
};

export default function ShareBar({ url, title, tone = "light" }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const base =
    "flex flex-1 items-center justify-center gap-2 rounded-lg py-2.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const skin =
    tone === "dark"
      ? "border border-white/15 text-white/70 hover:border-white/40 hover:text-white focus-visible:outline-[var(--v-peri)]"
      : "border border-[var(--v-line)] text-slate-600 hover:border-[var(--v-ink)] hover:text-[var(--v-ink)] focus-visible:outline-[var(--v-blue)]";

  return (
    <div className="flex gap-2">
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${skin}`}
      >
        <Linkedin className="h-4 w-4" aria-hidden />
        Share
      </a>
      <a
        href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${title}\n${url}`)}`}
        className={`${base} ${skin}`}
      >
        <Mail className="h-4 w-4" aria-hidden />
        Email
      </a>
      <button type="button" onClick={copy} className={`${base} ${skin}`}>
        {copied ? (
          <Check className="h-4 w-4 text-emerald-400" aria-hidden />
        ) : (
          <Link2 className="h-4 w-4" aria-hidden />
        )}
        {copied ? "Copied" : "Copy link"}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Link copied to clipboard" : ""}
      </span>
    </div>
  );
}

