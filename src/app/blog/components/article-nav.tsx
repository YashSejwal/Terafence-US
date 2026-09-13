import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/app/data/blog/article";

type Props = {
  previous: BlogPost | null;
  next: BlogPost | null;
};

/** Keeps readers moving through the vault instead of dead-ending at the footer. */
export default function ArticleNav({ previous, next }: Props) {
  if (!previous && !next) return null;

  return (
    <nav aria-label="More articles" className="mt-12 grid gap-3 border-t border-[var(--v-line)] pt-8 sm:grid-cols-2">
      {previous ? (
        <Link
          href={`/blog/${previous.slug}`}
          className="group rounded-xl border border-[var(--v-line)] p-5 transition-colors hover:border-[var(--v-blue)] hover:bg-[var(--v-mist)]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--v-blue)]"
        >
          <span className="flex items-center gap-1.5 text-sm text-slate-500">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            Earlier
          </span>
          <span className="mt-2 block font-medium leading-snug text-[var(--v-ink)] group-hover:text-[var(--v-blue)]">
            {previous.title}
          </span>
        </Link>
      ) : (
        <span aria-hidden />
      )}

      {next && (
        <Link
          href={`/blog/${next.slug}`}
          className="group rounded-xl border border-[var(--v-line)] p-5 text-right transition-colors hover:border-[var(--v-blue)] hover:bg-[var(--v-mist)]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--v-blue)] sm:col-start-2"
        >
          <span className="flex items-center justify-end gap-1.5 text-sm text-slate-500">
            Later
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </span>
          <span className="mt-2 block font-medium leading-snug text-[var(--v-ink)] group-hover:text-[var(--v-blue)]">
            {next.title}
          </span>
        </Link>
      )}
    </nav>
  );
}

