import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, RefreshCw } from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import type { BlogPost } from "@/app/data/blog/article";
import { formatDate, sectionAnchor, type ArticleContent } from "@/lib/blog";
import ArticleBody from "./article-content";
import ReadingProgress from "./reading-progress";
import TableOfContents, { type TocItem } from "./table-of-contents";
import ShareBar from "./share-bar";
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

      {/* ---------------- Header ---------------- */}
      <header className="border-b border-slate-200 bg-slate-50/60 pb-10 pt-10 lg:pb-14 lg:pt-14">
        <Wrapper>
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-700"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Knowledge Vault
              </Link>
            </nav>

            <div className="mb-5 flex flex-wrap items-center gap-2">
              <Link
                href={`/blog?category=${encodeURIComponent(post.category)}`}
                className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 transition-colors hover:bg-blue-100"
              >
                {post.category}
              </Link>
              {post.level && (
                <span className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600">
                  {post.level}
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
              {post.title}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {content.standfirst ?? post.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
              <span className="font-medium text-slate-700">
                {content.author ?? "Terafence"}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" aria-hidden />
                <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
              </span>
              {content.updatedDate && (
                <span className="inline-flex items-center gap-1.5">
                  <RefreshCw className="h-3.5 w-3.5" aria-hidden />
                  Updated {formatDate(content.updatedDate)}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                {readTime}
              </span>
            </div>

            <div className="mt-7 lg:hidden">
              <ShareBar url={url} title={post.title} orientation="horizontal" />
            </div>
          </div>
        </Wrapper>
      </header>

      {/* ---------------- Body ---------------- */}
      <Wrapper>
        <div className="grid grid-cols-1 gap-x-10 py-12 lg:grid-cols-[3.5rem_minmax(0,1fr)] lg:py-16 xl:grid-cols-[3.5rem_minmax(0,44rem)_16rem]">
          <div className="hidden lg:block">
            <ShareBar url={url} title={post.title} />
          </div>

          <article id="article-body" className="min-w-0">
            <figure className="mb-12">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={`/images/blog/${post.id}/1.png`}
                  alt={content.imageCaptions?.[0] ?? post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 704px"
                  className="object-cover"
                />
              </div>
            </figure>

            <div className="xl:hidden">
              <TableOfContents items={toc} />
            </div>

            <ArticleBody post={post} content={content} />

            <div className="mt-12 border-t border-slate-200 pt-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-slate-500">Filed under</span>
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 transition-colors hover:bg-slate-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 rounded-xl border border-slate-200 p-6 sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-white">
                  TF
                </div>
                <div>
                  <p className="font-medium text-slate-900">{content.author ?? "Terafence"}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    We build FPGA-based unidirectional gateways for OT and critical
                    infrastructure networks. Certificates and test reports are available on
                    request.
                  </p>
                </div>
              </div>
            </div>

            <ArticleNav previous={previousPost} next={nextPost} />
          </article>

          <aside className="hidden xl:block">
            <TableOfContents items={toc} />
          </aside>
        </div>
      </Wrapper>

      <RelatedArticles relatedPosts={relatedPosts} />
    </div>
  );
}
