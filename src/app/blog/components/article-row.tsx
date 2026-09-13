import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/app/data/blog/article";
import { formatDate } from "@/lib/blog";

/**
 * The index list row. A dense, scannable line — date and sector on the left,
 * the argument in the middle, length on the right — rather than another card.
 */
export default function ArticleRow({ post }: { post: BlogPost }) {
  return (
    <li className="group border-b border-[var(--v-line)]">
      <Link
        href={`/blog/${post.slug}`}
        className="grid grid-cols-1 gap-4 py-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--v-blue)] sm:grid-cols-12 sm:gap-8"
      >
        <div className="font-mono text-[11px] uppercase leading-5 tracking-[0.14em] text-slate-500 sm:col-span-2">
          {formatDate(post.publishDate, "short")}
          <span className="mt-1 block text-[var(--v-blue)]">{post.category}</span>
        </div>

        <div className="sm:col-span-7">
          <h3 className="text-xl font-semibold leading-snug text-[var(--v-ink)] transition-colors group-hover:text-[var(--v-blue)]">
            {post.title}
          </h3>
          <p className="mt-2 leading-relaxed text-[var(--v-slate)]">{post.excerpt}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded border border-[var(--v-line)] px-2 py-0.5 text-xs text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 sm:col-span-3 sm:justify-end">
          {post.pdf && (
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--v-blue)]">
              PDF
            </span>
          )}
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
            {post.readTime.replace(" read", "")}
          </span>
          <span
            aria-hidden
            className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-[var(--v-line)] text-slate-400 transition-colors group-hover:border-[var(--v-ink)] group-hover:bg-[var(--v-ink)] group-hover:text-white"
          >
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </li>
  );
}

