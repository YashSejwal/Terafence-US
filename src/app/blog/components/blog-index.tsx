"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import Wrapper from "@/components/global/wrapper";
import ArticleRow from "./article-row";
import LeadArticle from "./lead-article";
import { searchPosts, sortPosts, type BlogPost } from "@/app/data/blog/article";

type SortKey = "newest" | "oldest" | "popular";
const PAGE_SIZE = 8;

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const router = useRouter();
  const params = useSearchParams();

  const [query, setQuery] = useState(params.get("q") ?? "");
  const [category, setCategory] = useState(params.get("category") ?? "All");
  const [tag, setTag] = useState(params.get("tag") ?? "");
  const [sort, setSort] = useState<SortKey>((params.get("sort") as SortKey) ?? "newest");
  const [visible, setVisible] = useState(PAGE_SIZE);

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
      ...Array.from(counts, ([name, count]) => ({ name, count })).sort(
        (a, b) => b.count - a.count || a.name.localeCompare(b.name)
      ),
    ];
  }, [posts]);

  const results = useMemo(() => {
    let list = posts;
    if (category !== "All") list = list.filter((post) => post.category === category);
    if (tag) list = list.filter((post) => post.tags.includes(tag));
    if (query.trim()) return searchPosts(list, query);
    return sortPosts(list, sort);
  }, [posts, category, tag, query, sort]);

  useEffect(() => setVisible(PAGE_SIZE), [category, tag, query, sort]);

  const unfiltered = !query && category === "All" && !tag;
  const lead = unfiltered ? results[0] : undefined;
  const listed = lead ? results.slice(1) : results;
  const shown = listed.slice(0, visible);
  const hasFilters = Boolean(query) || category !== "All" || Boolean(tag);

  const clearAll = useCallback(() => {
    setQuery("");
    setCategory("All");
    setTag("");
    setSort("newest");
  }, []);

  return (
    <main className="bg-white">
      {/* ---------------- Masthead ---------------- */}
      <header className="bg-[var(--v-ink)] pb-20 pt-12 text-white lg:pt-16">
        <Wrapper>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h1 className="text-4xl font-bold leading-none tracking-tight lg:text-[2.75rem]">
              Knowledge Vault
            </h1>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--v-peri)]">
              {posts.length} articles
            </span>
          </div>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            What we learn building one-way gateways for plants, ports, grids and pipelines.
            Written by the engineers who ship the hardware.
          </p>

          <div className="mt-9 flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="relative lg:max-w-md lg:flex-1">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search protocols, sectors, standards"
                aria-label="Search articles"
                className="w-full rounded-lg border border-white/15 bg-white/5 py-3 pl-11 pr-10 text-[15px] text-white placeholder:text-white/40 focus:border-[var(--v-peri)] focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/50 hover:text-white"
                >
                  <span className="sr-only">Clear search</span>
                  <X className="h-4 w-4" aria-hidden />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {categoryCounts.map(({ name, count }) => {
                const active = category === name;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setCategory(name)}
                    aria-pressed={active}
                    className={`rounded-lg px-3.5 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--v-peri)] ${
                      active
                        ? "bg-white font-medium text-[var(--v-ink)]"
                        : "border border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    {name}
                    <span className={active ? "ml-1.5 text-slate-400" : "ml-1.5 text-white/40"}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {tag && (
            <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
              Tagged
              <button
                type="button"
                onClick={() => setTag("")}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-medium text-white hover:bg-white/20"
              >
                {tag}
                <X className="h-3.5 w-3.5" aria-hidden />
              </button>
            </div>
          )}
        </Wrapper>
      </header>

      {/* ---------------- Lead ---------------- */}
      {lead && (
        <Wrapper>
          <LeadArticle post={lead} />
        </Wrapper>
      )}

      {/* ---------------- List ---------------- */}
      <Wrapper>
        <section className={lead ? "py-14 lg:py-16" : "py-10"}>
          {results.length === 0 ? (
            <div className="mx-auto max-w-md py-20 text-center">
              <p className="text-lg font-medium text-[var(--v-ink)]">
                Nothing matches “{query || tag || category}”.
              </p>
              <p className="mt-2 text-[var(--v-slate)]">
                Try a broader term, or browse every article in the vault.
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="mt-6 rounded-lg bg-[var(--v-ink)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--v-blue)]"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="mb-2 flex flex-wrap items-end justify-between gap-4 border-b border-[var(--v-line)] pb-4">
                <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  {hasFilters
                    ? `${results.length} ${results.length === 1 ? "result" : "results"}`
                    : "All articles"}
                </h2>
                <div className="flex items-center gap-3">
                  {hasFilters && (
                    <button
                      type="button"
                      onClick={clearAll}
                      className="text-sm font-medium text-[var(--v-blue)] hover:underline"
                    >
                      Clear filters
                    </button>
                  )}
                  <label htmlFor="sort" className="sr-only">
                    Sort articles
                  </label>
                  <select
                    id="sort"
                    value={sort}
                    onChange={(event) => setSort(event.target.value as SortKey)}
                    disabled={Boolean(query.trim())}
                    className="rounded-lg border border-[var(--v-line)] bg-white px-3 py-2 text-sm text-slate-700 focus:border-[var(--v-blue)] focus:outline-none disabled:opacity-50"
                  >
                    <option value="newest">Newest first</option>
                    <option value="oldest">Oldest first</option>
                    <option value="popular">Most read</option>
                  </select>
                </div>
              </div>

              <ol>
                {shown.map((post) => (
                  <ArticleRow key={post.id} post={post} />
                ))}
              </ol>

              {visible < listed.length && (
                <div className="mt-10 text-center">
                  <button
                    type="button"
                    onClick={() => setVisible((value) => value + PAGE_SIZE)}
                    className="rounded-lg border border-[var(--v-line)] px-6 py-3 text-sm font-semibold text-[var(--v-ink)] transition-colors hover:border-[var(--v-ink)] hover:bg-[var(--v-ink)] hover:text-white"
                  >
                    Show {Math.min(PAGE_SIZE, listed.length - visible)} more
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </Wrapper>
    </main>
  );
}

