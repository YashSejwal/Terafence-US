import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import type { BlogPost } from "@/app/data/blog/article";
import { formatDate } from "@/lib/blog";

type Props = {
  post: BlogPost;
  /** "feature" gets the wide two-column treatment used at the top of the index. */
  variant?: "default" | "compact" | "feature";
  priority?: boolean;
};

export default function BlogCard({ post, variant = "default", priority = false }: Props) {
  const isFeature = variant === "feature";

  return (
    <article className={isFeature ? "group" : "group h-full"}>
      <Link
        href={`/blog/${post.slug}`}
        className={`flex h-full rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 ${
          isFeature ? "flex-col gap-6 md:flex-row md:items-center" : "flex-col"
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-xl bg-slate-100 ${
            isFeature ? "aspect-[16/10] w-full md:w-[55%]" : "aspect-[16/9] w-full"
          }`}
        >
          <Image
            src={`/images/blog/${post.id}.png`}
            alt=""
            fill
            priority={priority}
            sizes={isFeature ? "(max-width: 768px) 100vw, 620px" : "(max-width: 768px) 100vw, 380px"}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className={isFeature ? "md:w-[45%]" : "flex flex-1 flex-col pt-4"}>
          <div className="flex items-center gap-3 text-sm">
            <span className="font-medium text-blue-700">{post.category}</span>
            <span className="text-slate-300" aria-hidden>
              /
            </span>
            <time dateTime={post.publishDate} className="text-slate-500">
              {formatDate(post.publishDate, "short")}
            </time>
          </div>

          <h3
            className={`mt-2 font-semibold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-blue-800 ${
              isFeature ? "text-2xl lg:text-3xl" : "text-lg"
            }`}
          >
            {post.title}
          </h3>

          <p
            className={`mt-3 leading-relaxed text-slate-600 ${
              isFeature ? "text-base" : "line-clamp-3 text-[15px]"
            }`}
          >
            {post.excerpt}
          </p>

          <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {post.readTime}
            </span>
            {post.level && <span>{post.level}</span>}
          </div>
        </div>
      </Link>
    </article>
  );
}
