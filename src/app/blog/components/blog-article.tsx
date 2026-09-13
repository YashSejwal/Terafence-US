import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import type { BlogPost } from "@/app/data/blog/article";
import { formatDate, sectionAnchor, type ArticleContent } from "@/lib/blog";
import ArticleBody from "./article-content";
import ReadingProgress from "./reading-progress";
import TableOfContents, { type TocItem } from "./table-of-contents";
import ShareBar from "./share-bar";
import DownloadArticle from "./download-article";
import ArticleNav from "./article-nav";
import RelatedArticles from "./related-articles";

type Props = {
  post: BlogPost;
  content: ArticleContent;
  relatedPosts: BlogPost[];
  previousPost: BlogPost | null;
  nextPost: BlogPost | null;
  readTime: string;
  publishedAt: string;
  url: string;
};

export default function BlogArticle({
  post,
  content,
  relatedPosts,
  previousPost,
  nextPost,
  readTime,
  publishedAt,
  url,
}: Props) {
  const toc: TocItem[] = [
    ...(content.keyTakeaways?.length ? [{ id: "key-takeaways", title: "The short version" }] : []),
    ...(content.sections ?? []).map((section) => ({
      id: sectionAnchor(section),
      title: section.title,
    })),
    ...(content.comparisonTable
      ? [{ id: "comparison", title: content.comparisonTable.title }]
      : []),
    ...(content.faq?.length ? [{ id: "faq", title: "Common questions" }] : []),
    ...(content.resources?.length ? [{ id: "resources", title: "Take it further" }] : []),
  ];

  return (
    <div className="bg-white">
      <ReadingProgress targetId="article-body" title={post.title} />

      {/* ---------------- Dark header ---------------- */}
      <header className="bg-[var(--v-ink)] py-12 text-white lg:py-14">
        <Wrapper>
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            Knowledge Vault
          </Link>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">
                <Link
                  href={`/blog?category=${encodeURIComponent(post.category)}`}
                  className="text-[var(--v-peri)] hover:underline"
                >
                  {post.category}
                </Link>
                <span aria-hidden>/</span>
                <time dateTime={publishedAt}>{formatDate(publishedAt, "short")}</time>
                <span aria-hidden>/</span>
                <span>{readTime.replace(" read", "")}</span>
                {post.level && (
                  <>
                    <span aria-hidden>/</span>
                    <span>{post.level}</span>
                  </>
                )}
              </div>

              <h1 className="mt-5 text-[2rem] font-bold leading-[1.08] tracking-tight sm:text-[2.6rem] lg:text-[3.1rem]">
                {post.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 lg:text-xl">
                {content.standfirst ?? post.excerpt}
              </p>
            </div>

            <div className="flex flex-col justify-end gap-3 lg:col-span-4">
              <DownloadArticle post={post} />
              <ShareBar url={url} title={post.title} tone="dark" />
            </div>
          </div>
        </Wrapper>
      </header>

      {/* ---------------- Body ---------------- */}
      <Wrapper>
        <div className="grid grid-cols-1 gap-10 py-12 lg:grid-cols-12 lg:py-16">
          <aside className="hidden lg:col-span-3 lg:block">
            <TableOfContents items={toc} />
          </aside>

          <article id="article-body" className="min-w-0 lg:col-span-8 xl:col-span-7">
            <figure className="mb-10">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-[var(--v-mist)]">
                <Image
                  src={`/images/blog/${post.id}/1.png`}
                  alt={content.imageCaptions?.[0] ?? post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover"
                />
              </div>
              {content.imageCaptions?.[0] && (
                <figcaption className="mt-3 text-sm leading-relaxed text-slate-500">
                  {content.imageCaptions[0]}
                </figcaption>
              )}
            </figure>

            <div className="lg:hidden">
              <TableOfContents items={toc} />
            </div>

            <ArticleBody post={post} content={content} />

            <div className="mt-12 border-t border-[var(--v-line)] pt-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
                  Filed under
                </span>
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="rounded border border-[var(--v-line)] px-2.5 py-1 text-sm text-slate-700 transition-colors hover:border-[var(--v-ink)] hover:text-[var(--v-ink)]"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 border-l-2 border-[var(--v-blue)] bg-[var(--v-mist)]/60 p-6 sm:flex-row sm:items-center">
                <div>
                  <p className="font-semibold text-[var(--v-ink)]">
                    {content.author ?? "Terafence"}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--v-slate)]">
                    We build FPGA-based unidirectional gateways for OT and critical
                    infrastructure networks. Certificates, penetration test reports and
                    model-specific specifications are available on request.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="flex-none rounded-lg bg-[var(--v-ink)] px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--v-blue)]"
                >
                  Talk to an engineer
                </Link>
              </div>
            </div>

            <ArticleNav previous={previousPost} next={nextPost} />
          </article>
        </div>
      </Wrapper>

      <RelatedArticles relatedPosts={relatedPosts} />
    </div>
  );
}

