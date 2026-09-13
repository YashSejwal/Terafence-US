import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import type { BlogPost } from "@/app/data/blog/article";
import { formatDate } from "@/lib/blog";

export default function RelatedArticles({ relatedPosts }: { relatedPosts: BlogPost[] }) {
  if (relatedPosts.length === 0) return null;

  return (
    <section className="border-t border-[var(--v-line)] bg-[var(--v-mist)]/50 py-16 lg:py-20">
      <Wrapper>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[var(--v-line)] pb-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            Keep reading
          </h2>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--v-blue)] hover:underline"
          >
            All articles
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-white">
                  <Image
                    src={`/images/blog/${post.id}.png`}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-500">
                  <span className="text-[var(--v-blue)]">{post.category}</span>
                  <span aria-hidden className="text-[var(--v-line)]">/</span>
                  <span>{formatDate(post.publishDate, "short")}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-[var(--v-ink)] transition-colors group-hover:text-[var(--v-blue)]">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-[var(--v-slate)]">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}

