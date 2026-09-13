import Image from "next/image";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";
import type { BlogPost } from "@/app/data/blog/article";
import { formatDate } from "@/lib/blog";
import DownloadArticle from "./download-article";

/** The lead article, lifted into the dark masthead so it reads as the front page. */
export default function LeadArticle({ post }: { post: BlogPost }) {
  return (
    <article className="-mt-10 grid grid-cols-1 gap-8 rounded-2xl border border-[var(--v-line)] bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,20,53,0.35)] lg:grid-cols-12 lg:p-8">
      <div className="lg:col-span-7">
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[var(--v-mist)]">
            <Image
              src={`/images/blog/${post.id}/1.png`}
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover"
            />
            {post.category === "Critical Infrastructure" && (
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-md bg-[var(--v-ink)]/85 px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white backdrop-blur">
                <AlertTriangle className="h-3 w-3 text-[var(--v-alert)]" aria-hidden />
                Latest
              </span>
            )}
          </div>
        </Link>
      </div>

      <div className="flex flex-col justify-center lg:col-span-5">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
          <span className="text-[var(--v-blue)]">{post.category}</span>
          <span className="text-[var(--v-line)]" aria-hidden>
            /
          </span>
          <span>{formatDate(post.publishDate, "short")}</span>
        </div>

        <h2 className="mt-3 text-2xl font-bold leading-[1.14] tracking-tight text-[var(--v-ink)] lg:text-3xl">
          <Link href={`/blog/${post.slug}`} className="hover:text-[var(--v-blue)]">
            {post.title}
          </Link>
        </h2>

        <p className="mt-4 leading-relaxed text-[var(--v-slate)]">{post.excerpt}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--v-ink)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--v-blue)]"
          >
            Read the analysis
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <DownloadArticle post={post} variant="inline" />
        </div>
      </div>
    </article>
  );
}

