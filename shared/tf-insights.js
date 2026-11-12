/* =====================================================================
   Terafence Insights behaviour: search, sticky sidebar, table of contents
   highlight, analytics events. All article links already exist as plain
   HTML; this file only adds search results and measurement on top.
   ===================================================================== */
window.TF = window.TF || {};

/* ---------- Analytics settings ----------
   GA4 is not connected yet. Set TF.GA4_ID to the Measurement ID (G-XXXXXXX)
   supplied by Terafence and the tag loads automatically. Until then every
   event below is still pushed to window.dataLayer, so it can be checked in
   the browser console or picked up by Google Tag Manager. */
TF.GA4_ID = TF.GA4_ID || null;

(function () {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const ROOT = TF.ROOT || "";
  const article = $("[data-article]"), slug = article ? article.dataset.article : null;
  window.dataLayer = window.dataLayer || [];
  function track(event, params) { window.dataLayer.push(Object.assign({ event }, params || {})); }
  TF.track = track;
  if (TF.GA4_ID) {
    const s = document.createElement("script"); s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(TF.GA4_ID); document.head.appendChild(s);
    window.gtag = function () { window.dataLayer.push(arguments); }; gtag("js", new Date()); gtag("config", TF.GA4_ID);
  }

  /* clean address (/insights/x/) -> file in this prototype (insights/x/index.html) */
  function fileHref(path) {
    if (!TF.PLACEHOLDER_LINKS) return path;
    return ROOT + path.replace(/^\//, "").replace(/\/?$/, "/") + "index.html";
  }

  /* ---------- clicks on Insights links (Latest, Related, topics, TOC, next steps, in-copy links) ---------- */
  /* on window, capture phase: runs before tf-form.js, which stops /contact clicks from going further */
  window.addEventListener("click", e => {
    const a = e.target.closest && e.target.closest("a[data-track]"); if (!a) return;
    const name = (a.dataset.track === "next_step" || a.dataset.track.startsWith("cta_")) ? "insights_cta_click" : a.dataset.track === "contextual" ? "insights_contextual_link" : "insights_click";
    track(name, { module: a.dataset.track, link_text: a.textContent.trim().replace(/\s+/g, " ").slice(0, 100), link_url: a.getAttribute("href"), article_slug: slug || "" });
  }, true);

  /* ---------- scroll depth on article pages (25 / 50 / 75 / 100% of the article body) ---------- */
  if (article) {
    const body = $(".ins-body"), marks = [25, 50, 75, 100], sent = new Set();
    let ticking = false;
    const check = () => {
      ticking = false; const r = body.getBoundingClientRect(); const seen = Math.min(1, Math.max(0, (innerHeight - r.top) / r.height)) * 100;
      marks.forEach(m => { if (seen >= m && !sent.has(m)) { sent.add(m); track("insights_scroll", { percent: m, article_slug: slug }); } });
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(check); } }, { passive: true });
  }

  /* ---------- sidebar: sticky only when it fits on screen, so it never hides content ---------- */
  const side = $(".ins-side");
  if (side) {
    const fit = () => { const inner = $(".ins-side__in", side); const room = innerHeight - 76 - 56;
      side.classList.toggle("is-sticky", innerWidth > 1080 && inner.scrollHeight <= room); };
    addEventListener("resize", fit); fit();
  }

  /* ---------- table of contents: highlight the section being read ---------- */
  const tocLinks = $$(".ins-toc a");
  if (tocLinks.length && "IntersectionObserver" in window) {
    const heads = $$(".ins-body h2[id]"), map = new Map();
    const set = id => tocLinks.forEach(l => l.setAttribute("aria-current", l.getAttribute("href") === "#" + id ? "true" : "false"));
    const io = new IntersectionObserver(es => es.forEach(en => map.set(en.target.id, en.isIntersecting)), { rootMargin: "-90px 0px -60% 0px" });
    heads.forEach(h => io.observe(h));
    addEventListener("scroll", () => {
      let cur = heads[0] && heads[0].id;
      heads.forEach(h => { if (h.getBoundingClientRect().top < 140) cur = h.id; });
      set(cur);
    }, { passive: true });
  }

  /* ---------- search (landing page) ---------- */
  const form = $("[data-search]");
  if (!form) return;
  const input = $("#ins-q", form), clearBtns = $$("[data-clear]"), box = $("[data-results]"), list = $("[data-results-list]"),
        state = $("[data-results-state]"), title = $("[data-results-title]"), browse = $("[data-browse]");
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  let lastLogged = "", logTimer, failed = false;

  function cardHTML(a) {
    return `<article class="ins-card"><a class="ins-card__link" href="${fileHref(a.url)}" data-track="search_result">
      <span class="ins-card__cat">${esc(a.category)}</span><h3 class="ins-card__t">${esc(a.title)}</h3>
      <p class="ins-card__x">${esc(a.excerpt)}</p>
      <span class="ins-card__meta"><span><time datetime="${esc(a.date)}">${esc(a.date_label)}</time></span><span class="ins-dot" aria-hidden="true">&middot;</span><span>${a.read} min read</span></span></a></article>`;
  }
  function search(q) {
    const idx = window.TF_INSIGHTS_INDEX;
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    return idx.map(a => {
      const f = { t: a.title.toLowerCase(), x: a.excerpt.toLowerCase(), c: a.category.toLowerCase(), g: (a.tags || []).join(" ").toLowerCase(), y: (a.type || "").toLowerCase() };
      let score = 0;
      for (const t of terms) {
        const s = (f.t.includes(t) ? 5 : 0) + (f.c.includes(t) ? 3 : 0) + (f.g.includes(t) ? 3 : 0) + (f.x.includes(t) ? 2 : 0) + (f.y.includes(t) ? 1 : 0);
        if (!s) return null; score += s;                       // every word must match somewhere
      }
      return { a, score };
    }).filter(Boolean).sort((p, q2) => q2.score - p.score || (q2.a.date > p.a.date ? 1 : -1)).map(r => r.a);
  }
  function show(q) {
    q = q.trim();
    clearBtns.forEach(b => { if (b.closest(".ins-search")) b.hidden = !q; });
    try { const u = new URL(location.href); q ? u.searchParams.set("q", q) : u.searchParams.delete("q"); history.replaceState(null, "", u); } catch (_) {}
    if (!q) { box.hidden = true; browse.hidden = false; list.innerHTML = ""; return; }
    box.hidden = false; browse.hidden = true;
    title.textContent = "Search results";
    if (!window.TF_INSIGHTS_INDEX) {
      if (failed) { state.textContent = ""; list.innerHTML = '<div class="ins-empty" role="status"><b>Search is unavailable right now.</b>Clear the search to browse by topic.</div>'; }
      else { state.innerHTML = "Loading search&hellip;"; list.innerHTML = ""; }
      return;
    }
    const res = search(q);
    if (res.length) {
      state.innerHTML = `<b>${res.length}</b> result${res.length > 1 ? "s" : ""} for &ldquo;${esc(q)}&rdquo;`;
      list.innerHTML = res.map(cardHTML).join("");
    } else {
      state.innerHTML = "";
      list.innerHTML = `<div class="ins-empty" role="status"><b>No Insights match &ldquo;${esc(q)}&rdquo;.</b>Try a different word, check the spelling, or <a href="#" data-clear-link>clear the search</a> to browse by topic.</div>`;
    }
    clearTimeout(logTimer);
    logTimer = setTimeout(() => { if (q !== lastLogged) { lastLogged = q; track(res.length ? "insights_search" : "insights_search_no_results", { search_term: q, results_count: res.length }); } }, 900);
  }
  function clear() { input.value = ""; show(""); input.focus(); }
  input.addEventListener("input", () => show(input.value));
  input.addEventListener("keydown", e => { if (e.key === "Escape" && input.value) { e.preventDefault(); clear(); } });
  form.addEventListener("submit", e => { e.preventDefault(); show(input.value); });
  clearBtns.forEach(b => b.addEventListener("click", clear));
  list.addEventListener("click", e => { if (e.target.closest("[data-clear-link]")) { e.preventDefault(); clear(); } });

  /* index script loads with defer; if it is missing, say so instead of failing silently */
  function ready() {
    if (!window.TF_INSIGHTS_INDEX) failed = true;
    if (input.value.trim()) show(input.value);
  }
  const q0 = new URLSearchParams(location.search).get("q");
  if (q0) { input.value = q0; show(q0); }
  if (document.readyState === "complete") ready(); else addEventListener("load", ready);
})();
