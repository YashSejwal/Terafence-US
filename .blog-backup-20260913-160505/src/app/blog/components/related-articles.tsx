import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import type { BlogPost } from "@/app/data/blog/article";
import BlogCard from "./blog-card";

type Props = {
  relatedPosts: BlogPost[];
};

export default function RelatedArticles({ relatedPosts }: Props) {
  if (relatedPosts.length === 0) return null;

  return (
    <section className="border-t border-slate-200 bg-slate-50/60 py-16 lg:py-20">
      <Wrapper>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Keep reading
            </h2>
            <p className="mt-1 text-slate-600">
              Picked by shared topics, not just the same category.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 transition-colors hover:text-blue-900"
          >
            All articles
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
