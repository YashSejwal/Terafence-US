"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X, SlidersHorizontal } from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import BlogCard from "./blog-card";
import { searchPosts, sortPosts, type BlogPost } from "@/app/data/blog/article";

type SortKey = "newest" | "oldest" | "popular";
const PAGE_SIZE = 6;

type Props = {
  posts: BlogPost[];
};

export default function BlogIndex({ posts }: Props) {
  const router = useRouter();
  const params = useSearchParams();

  const [query, setQuery] = useState(params.get("q") ?? "");
  const [category, setCategory] = useState(params.get("category") ?? "All");
  const [tag, setTag] = useState(params.get("tag") ?? "");
  const [sort, setSort] = useState<SortKey>((params.get("sort") as SortKey) ?? "newest");
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Keep the URL shareable without pushing a history entry per keystroke.
  useEffect(() => {
    const next = new URLSearchParams();
    if (query) next.set("q", query);
    if (category !== "All") next.set("category", category);
    if (tag) next.set("tag", tag);
    if (sort !== "newest") next.set("sort", sort);
    const search = next.toString();
    const timer = window.setTimeout(() => {
      router.replace(search ? `/blog?${search}` : "/blog", { scroll: false });
    }, 250);
    return () => window.clearTimeout(timer);
  }, [query, category, tag, sort, router]);

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const post of posts) counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
    return [
      { name: "All", count: posts.length },
      ...Array.from(counts, ([name, count]) => ({ name, count })).sort((a, b) =>
        b.count - a.count || a.name.localeCompare(b.name)
      ),
    ];
  }, [posts]);

  const results = useMemo(() => {
    let list = posts;
    if (category !== "All") list = list.filter((post) => post.category === category);
    if (tag) list = list.filter((post) => post.tags.includes(tag));
    if (query.trim()) return searchPosts(list, query); // relevance order wins over sort
    return sortPosts(list, sort);
  }, [posts, category, tag, query, sort]);

  useEffect(() => setVisible(PAGE_SIZE), [category, tag, query, sort]);

  const featured = !query && category === "All" && !tag ? results[0] : undefined;
  const listed = featured ? results.slice(1) : results;
  const shown = listed.slice(0, visible);

  const clearAll = useCallback(() => {
    setQuery("");
    setCategory("All");
    setTag("");
    setSort("newest");
  }, []);

  const hasFilters = Boolean(query) || category !== "All" || Boolean(tag);

  return (
    <main className="min-h-screen bg-white">
      {/* ---------- Header ---------- */}
      <section className="border-b border-slate-200 bg-slate-50/60 py-14 lg:py-20">
        <Wrapper>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
              Knowledge Vault
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              What we have learned building one-way gateways for plants, ports, grids and
              pipelines. Written by the engineers who ship the hardware.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1 sm:max-w-md">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search articles, topics or protocols"
                aria-label="Search articles"
                className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-10 pr-10 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-0.5 text-slate-400 hover:text-slate-700"
                >
                  <span className="sr-only">Clear search</span>
                  <X className="h-4 w-4" aria-hidden />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-slate-400" aria-hidden />
              <label htmlFor="sort" className="sr-only">
                Sort articles
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                disabled={Boolean(query.trim())}
                className="rounded-lg border border-slate-300 bg-white py-3 pl-3 pr-8 text-[15px] text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50"
              >
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
                <option value="popular">Most read</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {categoryCounts.map(({ name, count }) => {
              const active = category === name;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setCategory(name)}
                  aria-pressed={active}
                  className={`rounded-full px-3.5 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    active
                      ? "bg-slate-900 text-white"
                      : "border border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                  }`}
                >
                  {name}
                  <span className={active ? "ml-1.5 text-slate-300" : "ml-1.5 text-slate-400"}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {tag && (
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
              Tagged
              <button
                type="button"
                onClick={() => setTag("")}
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-800 hover:bg-blue-100"
              >
                {tag}
                <X className="h-3.5 w-3.5" aria-hidden />
              </button>
            </div>
          )}
        </Wrapper>
      </section>

      {/* ---------- Results ---------- */}
      <section className="py-12 lg:py-16">
        <Wrapper>
          {results.length === 0 ? (
            <div className="mx-auto max-w-md py-16 text-center">
              <p className="text-lg font-medium text-slate-900">
                Nothing matches “{query || tag || category}”.
              </p>
              <p className="mt-2 text-slate-600">
                Try a broader term, or browse every article in the vault.
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-6 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8 flex items-center justify-between gap-4">
                <p className="text-sm text-slate-500">
                  {results.length} {results.length === 1 ? "article" : "articles"}
                  {query && " matching your search"}
                </p>
                {hasFilters && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="text-sm font-medium text-blue-700 hover:text-blue-900"
                  >
                    Clear filters
                  </button>
                )}
              </div>

              {featured && (
                <div className="mb-12 border-b border-slate-200 pb-12">
                  <BlogCard post={featured} variant="feature" priority />
                </div>
              )}

              <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {shown.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {visible < listed.length && (
                <div className="mt-12 text-center">
                  <button
                    type="button"
                    onClick={() => setVisible((value) => value + PAGE_SIZE)}
                    className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                  >
                    Show {Math.min(PAGE_SIZE, listed.length - visible)} more
                  </button>
                </div>
              )}
            </>
          )}
        </Wrapper>
      </section>
    </main>
  );
}
