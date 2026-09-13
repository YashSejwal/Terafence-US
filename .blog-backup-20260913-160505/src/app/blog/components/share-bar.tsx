"use client";

import { useState } from "react";
import { Linkedin, Link2, Mail, Check, Printer } from "lucide-react";

type Props = {
  url: string;
  title: string;
  orientation?: "vertical" | "horizontal";
};

export default function ShareBar({ url, title, orientation = "vertical" }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (insecure context or permissions) — select-and-copy still works.
      setCopied(false);
    }
  };

  const links = [
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      icon: Linkedin,
    },
    {
      label: "Share by email",
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
        `Thought this might be useful:\n\n${title}\n${url}`
      )}`,
      icon: Mail,
    },
  ];

  const buttonClass =
    "flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-blue-300 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";

  return (
    <div
      className={
        orientation === "vertical"
          ? "sticky top-24 flex flex-col items-center gap-2"
          : "flex items-center gap-2"
      }
    >
      {orientation === "vertical" && (
        <span className="mb-1 text-xs font-medium text-slate-500">Share</span>
      )}

      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className={buttonClass}
          title={label}
        >
          <span className="sr-only">{label}</span>
          <Icon className="h-4 w-4" aria-hidden />
        </a>
      ))}

      <button type="button" onClick={copy} className={buttonClass} title="Copy link">
        <span className="sr-only">{copied ? "Link copied" : "Copy link"}</span>
        {copied ? (
          <Check className="h-4 w-4 text-emerald-600" aria-hidden />
        ) : (
          <Link2 className="h-4 w-4" aria-hidden />
        )}
      </button>

      <button
        type="button"
        onClick={() => window.print()}
        className={`${buttonClass} hidden lg:flex`}
        title="Print or save as PDF"
      >
        <span className="sr-only">Print or save as PDF</span>
        <Printer className="h-4 w-4" aria-hidden />
      </button>

      <span aria-live="polite" className="sr-only">
        {copied ? "Link copied to clipboard" : ""}
      </span>
    </div>
  );
}
