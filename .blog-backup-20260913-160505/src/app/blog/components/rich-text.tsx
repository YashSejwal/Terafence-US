import React from "react";
import Link from "next/link";

/**
 * A deliberately small block/inline renderer for article bodies.
 *
 * Existing articles are plain paragraphs separated by blank lines and keep
 * rendering exactly as before. New articles can opt into richer structure
 * without adding a markdown dependency or changing the data pipeline:
 *
 *   ## Subheading
 *   - bullet item
 *   1. numbered item
 *   > Callout worth pulling out of the flow
 *   **bold**, *italic*, `code`, [link](https://example.com)
 */

type Props = {
  text: string;
  className?: string;
};

const INLINE = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  return text
    .split(INLINE)
    .filter(Boolean)
    .map((token, index) => {
      const key = `${keyPrefix}-${index}`;

      if (token.startsWith("**") && token.endsWith("**")) {
        return (
          <strong key={key} className="font-semibold text-slate-900">
            {token.slice(2, -2)}
          </strong>
        );
      }

      if (token.startsWith("*") && token.endsWith("*")) {
        return <em key={key}>{token.slice(1, -1)}</em>;
      }

      if (token.startsWith("`") && token.endsWith("`")) {
        return (
          <code
            key={key}
            className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.9em] text-slate-800"
          >
            {token.slice(1, -1)}
          </code>
        );
      }

      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const [, label, href] = link;
        const isExternal = /^https?:\/\//.test(href);
        return isExternal ? (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors hover:decoration-blue-600"
          >
            {label}
          </a>
        ) : (
          <Link
            key={key}
            href={href}
            className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors hover:decoration-blue-600"
          >
            {label}
          </Link>
        );
      }

      return <React.Fragment key={key}>{token}</React.Fragment>;
    });
}

export default function RichText({ text, className = "" }: Props) {
  const blocks = text.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);

  return (
    <div className={className}>
      {blocks.map((block, blockIndex) => {
        const lines = block.split("\n").map((line) => line.trim());
        const key = `block-${blockIndex}`;

        if (lines.every((line) => /^[-*]\s+/.test(line))) {
          return (
            <ul key={key} className="mb-7 space-y-3 pl-1">
              {lines.map((line, i) => (
                <li key={`${key}-${i}`} className="flex gap-3 text-slate-700">
                  <span
                    aria-hidden
                    className="mt-[0.7em] h-1.5 w-1.5 flex-none rounded-full bg-blue-600"
                  />
                  <span>{renderInline(line.replace(/^[-*]\s+/, ""), `${key}-${i}`)}</span>
                </li>
              ))}
            </ul>
          );
        }

        if (lines.every((line) => /^\d+[.)]\s+/.test(line))) {
          return (
            <ol key={key} className="mb-7 space-y-3">
              {lines.map((line, i) => (
                <li key={`${key}-${i}`} className="flex gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700">
                    {i + 1}
                  </span>
                  <span>{renderInline(line.replace(/^\d+[.)]\s+/, ""), `${key}-${i}`)}</span>
                </li>
              ))}
            </ol>
          );
        }

        if (lines[0].startsWith("## ")) {
          return (
            <h3
              key={key}
              className="mb-4 mt-10 text-xl font-semibold tracking-tight text-slate-900"
            >
              {renderInline(lines[0].slice(3), key)}
            </h3>
          );
        }

        if (lines.every((line) => line.startsWith(">"))) {
          return (
            <blockquote
              key={key}
              className="mb-8 border-l-2 border-blue-600 bg-slate-50/80 px-6 py-5 text-lg leading-relaxed text-slate-800"
            >
              {renderInline(lines.map((line) => line.replace(/^>\s?/, "")).join(" "), key)}
            </blockquote>
          );
        }

        return (
          <p key={key} className="mb-7 text-slate-700">
            {renderInline(block.replace(/\n/g, " "), key)}
          </p>
        );
      })}
    </div>
  );
}
