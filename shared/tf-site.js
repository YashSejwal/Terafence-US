/* =====================================================================
   Terafence US - shared site script
   EDIT HERE: navigation menus, footer links and the rotating hero
   messages. Both home page options read from this one file, so a change
   here updates both.
   ===================================================================== */
window.TF = window.TF || {};

/* ---------- 1. Navigation (main bar + BASF-style black layer) ---------- */
TF.NAV = [
  {
    label: "Products",
    intro: { title: "Products", text: "Five FPGA-based gateways built on one principle: data leaves, nothing comes back. Sized for the cabinet, the rack or the product it goes inside.", link: { label: "All products", href: "/products" } },
    cols: [
      { title: "One-way (unidirectional)", links: [
        { label: "TFG-121", sub: "DIN-rail, fan-less, -40 to +80 °C edge isolation", href: "/products/tfg-121" },
        { label: "TFG-1URP", sub: "1U rack: plant boundary and SOC ingestion", href: "/products/tfg-1urp" },
        { label: "TFG121-BF", sub: "1/10 Gbps large-file transfer, beyond 200 GB", href: "/products/tfg121-bf" },
        { label: "TFG-VSecure", sub: "CCTV gateway for RTSP / ONVIF video", href: "/products/tfg-vsecure" }
      ]},
      { title: "Controlled two-way", links: [
        { label: "TFG121-BSG", sub: "Dual-FPGA Layer-2 firewall where acknowledgement is a must", href: "/products/tfg121-bsg" }
      ]},
      { title: "Choose", links: [
        { label: "Build your solution", sub: "Choose a gateway, then add what you need", href: "/products/build-your-solution" },
        { label: "Compare models", sub: "Throughput, form factor and flow side by side", href: "/products/compare" }
      ]},
      { title: "Add-ins", links: [
        { label: "All add-ins", sub: "How the four families extend the core", href: "/add-ins" },
        { label: "TeraSecure", sub: "Cyber defense", href: "/add-ins#terasecure" },
        { label: "TeraObserve", sub: "Intelligence & visibility", href: "/add-ins#teraobserve" },
        { label: "TeraCommunicate", sub: "Secure collaboration", href: "/add-ins#teracommunicate" },
        { label: "TeraQuantum", sub: "Future-ready encryption", href: "/add-ins#teraquantum" }
      ]}
    ]
  },
  {
    label: "Technology",
    intro: { title: "Technology", text: "Enforcement in silicon at OSI Layers 1-2. No IP address, no MAC address, no CPU on the path.", link: { label: "How it works", href: "/technology" } },
    cols: [
      { title: "How it works", links: [
        { label: "The one-way principle", sub: "Why the return path is absent, not denied", href: "/technology#principle" },
        { label: "Why FPGA hardware", sub: "Immutable logic, deterministic throughput", href: "/technology#fpga" },
        { label: "Where diodes sit in a network", sub: "Edge, cell boundary, plant boundary", href: "/technology#placement" }
      ]},
      { title: "Integration", links: [
        { label: "Protocols and integration", sub: "Modbus, IEC-104, OPC UA, Syslog, SFTP, RTSP and more", href: "/technology/protocols-and-integration" },
        { label: "Certifications and compliance", sub: "Standards Terafence is designed to support", href: "/resources/certifications-compliance" }
      ]}
    ]
  },
  {
    label: "Solutions",
    intro: { title: "Solutions", text: "One principle applied wherever operational data must leave and nothing may return.", link: { label: "Solutions overview", href: "/solutions" } },
    cols: [
      { title: "By industry", links: [
        { label: "Energy and Renewables", href: "/industries/energy-renewables" },
        { label: "Oil and Gas", href: "/industries/oil-gas" },
        { label: "Utilities – Water / Electric / Gas", href: "/industries/utilities" },
        { label: "Defense and Government", href: "/industries/defense-government" },
        { label: "Lifescience & Pharmaceuticals", href: "/industries/lifescience-pharma" },
        { label: "Industrial Manufacturing", href: "/industries/industrial-manufacturing" },
        { label: "Transportation", href: "/industries/transportation" }
      ]},
      { title: "By use case", links: [
        { label: "OT data to SIEM and monitoring", href: "/use-cases/ot-data-to-siem" },
        { label: "Secure file transfer into isolated networks", href: "/use-cases/secure-file-transfer" },
        { label: "OT data to the cloud", href: "/use-cases/ot-to-cloud" },
        { label: "CCTV and video export", href: "/use-cases/cctv-video-protection" }
      ]},
      { title: "Services", links: [
        { label: "Associated services", sub: "Assess, integrate, validate and support", href: "/services" }
      ]}
    ]
  },
  {
    label: "Resources",
    intro: { title: "Resources", text: "Datasheets, technical specifications, white papers, case studies and articles.", link: { label: "Resource library", href: "/resources" } },
    cols: [
      { title: "Library", links: [
        { label: "Resource library", sub: "Filter by type and by model", href: "/resources" },
        { label: "Case studies", sub: "Challenge, solution, result", href: "/resources/case-studies" }
      ]},
      { title: "Read", links: [
        { label: "Insights", sub: "Articles on OT security and one-way transfer", href: "/blog" },
        { label: "Certifications and compliance", sub: "Designed to support", href: "/resources/certifications-compliance" }
      ]}
    ]
  },
  {
    label: "About us",
    intro: { title: "About us", text: "Founded in 2015. FPGA engineering in Israel, industrial manufacturing in Taiwan, sales and support across the Americas, Europe and Asia.", link: { label: "About Terafence USA", href: "/about" } },
    cols: [
      { title: "Terafence", links: [
        { label: "About Terafence USA", href: "/about" },
        { label: "Leadership", href: "/about#leadership" },
        { label: "Partners", href: "/partners" }
      ]},
      { title: "Get in touch", links: [
        { label: "Contact and request a quote", href: "/contact" },
        { label: "Support", href: "/support" }
      ]}
    ]
  }
];
TF.UTIL = [ { label: "Support", href: "/support" }, { label: "Partners", href: "/partners" }, { label: "info@terafence.us", href: "mailto:info@terafence.us" } ];
TF.CTA = { primary: { label: "Plan a pilot", href: "/contact?topic=pilot" }, secondary: { label: "Contact", href: "/contact" } };

/* ---------- 2. Rotating hero messages (Banner 1) ---------- */
TF.HERO_MESSAGES = [
  { kicker: "Hardware-enforced one-way gateways", title: "Data Out.<br>Nothing Back In.", text: "Operational data reaches the people and systems that use it. The systems that produce it stay out of reach, enforced in hardware." },
  { kicker: "Operational visibility", title: "Share the data.<br>Keep the boundary.", text: "Monitoring, maintenance and reporting continue as normal. The route back into your plant does not exist." },
  { kicker: "Reachability is the risk", title: "If they can reach it,<br>they can disrupt it.", text: "Every sabotage case began with a control system reachable from outside. Terafence removes that path in hardware." },
  { kicker: "A different question", title: "Can the attack path<br>physically exist?", text: "Firewalls decide what to let in. Terafence removes the inbound path in silicon, below the network stack." },
  { kicker: "Regulatory reporting", title: "The regulator reads.<br>Nobody writes back.", text: "Emissions, water and flare data reach authorities in real time, while the plant network stays unreachable." },
  { kicker: "Worst case, by design", title: "Lost telemetry.<br>Never lost control.", text: "With no reverse circuit to open, the worst outcome is a missed reading, not a compromised process." }
];
TF.HERO_INTERVAL_MS = 6000;

/* ---------- 3. Footer ---------- */
TF.FOOTER = [
  { title: "Products", links: [["TFG-121", "/products/tfg-121"], ["TFG-1URP", "/products/tfg-1urp"], ["TFG121-BF", "/products/tfg121-bf"], ["TFG121-BSG", "/products/tfg121-bsg"], ["TFG-VSecure", "/products/tfg-vsecure"], ["Compare models", "/products/compare"]] },
  { title: "Solutions", links: [["Energy and Renewables", "/industries/energy-renewables"], ["Oil and Gas", "/industries/oil-gas"], ["Utilities – Water / Electric / Gas", "/industries/utilities"], ["Defense and Government", "/industries/defense-government"], ["OT data to SIEM", "/use-cases/ot-data-to-siem"], ["Associated services", "/services"]] },
  { title: "Resources", links: [["Resource library", "/resources"], ["Insights", "/blog"], ["Case studies", "/resources/case-studies"], ["Certifications and compliance", "/resources/certifications-compliance"], ["Protocols and integration", "/technology/protocols-and-integration"]] },
  { title: "About us", links: [["About Terafence USA", "/about"], ["Leadership", "/about#leadership"], ["Partners", "/partners"], ["Contact", "/contact"], ["Support", "/support"]] }
];
TF.LEGAL = [["Privacy policy", "/privacy"], ["Terms of use", "/terms"], ["Cookie policy", "/cookie"]];

/* ---------- 4. Settings ---------- */
/* Pages not built yet: clicking shows a short notice instead of a 404.
   Set to false once the real pages exist on the server. */
TF.PLACEHOLDER_LINKS = true;
TF.LOGO_DARK_BG = "assets/tf-logo-dark-bg.webp";
/* Where the header logo points. "#top" keeps you on the page you are viewing.
   On the live site set this to "/" so it goes to the real home page. */
TF.LOGO_HREF = "#top";
/* Pages that exist as real files in this prototype. While PLACEHOLDER_LINKS is on,
   a link to the address on the left opens the file on the right. Add a line when
   a new page is built; remove all of this once the real site is live. */
TF.REAL_PAGES = { "/about": "about.html", "/": "index.html", "/products": "index.html#products", "/products/tfg-1urp": "tfg-1urp.html", "/products/tfg-121": "tfg-121.html", "/products/build-your-solution": "build-your-solution.html", "/add-ins": "add-ins.html", "/products/tfg121-bf": "tfg121-bf.html", "/products/tfg121-bsg": "tfg121-bsg.html", "/products/compare": "compare.html" };

/* =====================================================================
   Below this line: behaviour. No content to edit.
   ===================================================================== */
(function () {
  const ARROW = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6"/></svg>';
  const CHEV = '<svg viewBox="0 0 10 10" aria-hidden="true"><path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
  TF.ARROW = ARROW;
  const esc = s => String(s);

  function renderHeader(el) {
    const util = TF.UTIL.map(u => `<a href="${u.href}">${u.label}</a>`).join("");
    const items = TF.NAV.map((m, i) => {
      const cols = m.cols.map(c => `<div class="tf-mega__col"><h4>${c.title}</h4>${c.links.map(l => `<a href="${l.href}"><strong>${l.label}</strong>${l.sub ? `<span>${l.sub}</span>` : ""}</a>`).join("")}</div>`).join("");
      const feat = m.feature ? `<div class="tf-mega__feature"><small>${m.feature.kicker}</small><p>${m.feature.text}</p><a class="tf-link" href="${m.feature.link.href}">${m.feature.link.label} ${ARROW}</a></div>` : "";
      return `<div class="tf-nav__item" data-i="${i}">
        <button class="tf-nav__trigger" aria-expanded="false" aria-controls="tf-mega-${i}">${m.label} ${CHEV}</button>
        <div class="tf-mega" id="tf-mega-${i}" role="region" aria-label="${m.label}">
          <div class="tf-mega__inner">
            <div class="tf-mega__intro"><h3>${m.intro.title}</h3><p>${m.intro.text}</p><a class="tf-link" href="${m.intro.link.href}">${m.intro.link.label} ${ARROW}</a></div>
            <div class="tf-mega__cols">${cols}${feat}</div>
          </div>
        </div></div>`;
    }).join("");
    el.innerHTML = `
      <div class="tf-util"><div class="tf-wrap"><span class="tf-util__tag">Unbreachable <b>by</b> Design</span>${util}</div></div>
      <div class="tf-bar"><div class="tf-wrap">
        <a class="tf-logo" href="${TF.LOGO_HREF || "#top"}" aria-label="Terafence USA home"><img src="${TF.LOGO_DARK_BG}" alt="Terafence - Reliable Transformations!" width="400" height="106" decoding="async"></a>
        <nav class="tf-nav" aria-label="Main">${items}</nav>
        <div class="tf-bar__actions">
          <a class="tf-btn tf-btn--ghost" href="${TF.CTA.secondary.href}">${TF.CTA.secondary.label}</a>
          <a class="tf-btn tf-btn--primary" href="${TF.CTA.primary.href}">${TF.CTA.primary.label}</a>
          <button class="tf-burger" aria-label="Open menu"><svg viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="1.8"/></svg></button>
        </div>
      </div></div>`;

    const mob = document.createElement("div");
    mob.className = "tf-mobile"; mob.setAttribute("aria-label", "Menu");
    mob.innerHTML = `<div class="tf-mobile__top"><img src="${TF.LOGO_DARK_BG}" alt="Terafence" width="400" height="106" decoding="async"><button class="tf-mobile__close" aria-label="Close menu"><svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="1.8"/></svg></button></div>
      ${TF.NAV.map(m => `<details><summary>${m.label}</summary><div class="tf-mobile__group"><a href="${m.intro.link.href}"><strong>${m.intro.link.label}</strong></a>${m.cols.map(c => `<h4>${c.title}</h4>${c.links.map(l => `<a href="${l.href}">${l.label}</a>`).join("")}`).join("")}</div></details>`).join("")}
      <div class="tf-mobile__cta"><a class="tf-btn tf-btn--primary" href="${TF.CTA.primary.href}">${TF.CTA.primary.label}</a><a class="tf-btn tf-btn--ghost" href="${TF.CTA.secondary.href}">${TF.CTA.secondary.label}</a></div>
      <div class="tf-mobile__util">${util}</div>`;
    document.body.appendChild(mob);
    const scrim = document.createElement("div"); scrim.className = "tf-scrim"; document.body.appendChild(scrim);

    const navItems = [...el.querySelectorAll(".tf-nav__item")];
    const bg = document.createElement("div"); bg.className = "tf-megabg"; bg.setAttribute("aria-hidden", "true"); el.appendChild(bg);
    let closeTimer, openTimer, current = null;
    function open(item) {
      clearTimeout(closeTimer); clearTimeout(openTimer);
      current = item;
      navItems.forEach(n => { const on = n === item; n.classList.toggle("is-active", on); n.querySelector(".tf-nav__trigger").setAttribute("aria-expanded", on); });
      if (item && !el.classList.contains("is-open")) {
        // over a light section the layer darkens so the links stay readable
        const y = el.getBoundingClientRect().bottom + 60;
        const under = document.elementsFromPoint(innerWidth / 2, y).find(n => !el.contains(n) && n.closest("section"));
        const sec = under && under.closest("section");
        const c = sec ? getComputedStyle(sec).backgroundColor.match(/\d+/g) : null;
        el.classList.toggle("is-over-light", !!c && (+c[0] + +c[1] + +c[2]) / 3 > 160);
      }
      el.classList.toggle("is-open", !!item); scrim.classList.toggle("is-on", !!item);
      // the shared layer glides to the height of the menu being shown
      bg.style.height = item ? item.querySelector(".tf-mega").scrollHeight + "px" : "0px";
    }
    const closeAll = () => open(null);
    // Hover opens the menu whenever a mouse or pen is used, even on touchscreen laptops
    // (a media-query check alone misses those). Touch still opens with a tap.
    const isMouse = e => e.pointerType === "mouse" || e.pointerType === "pen";
    let hoverOpenedAt = 0;
    navItems.forEach(n => {
      const t = n.querySelector(".tf-nav__trigger");
      n.addEventListener("pointerenter", e => {
        if (!isMouse(e)) return;
        clearTimeout(closeTimer); clearTimeout(openTimer);
        // small delay before the first open (avoids flicker when the cursor passes over); instant when switching
        if (current) { open(n); hoverOpenedAt = Date.now(); }
        else openTimer = setTimeout(() => { open(n); hoverOpenedAt = Date.now(); }, 90);
      });
      n.addEventListener("pointerleave", e => { if (!isMouse(e)) return; clearTimeout(openTimer); closeTimer = setTimeout(closeAll, 260); });
      t.addEventListener("click", e => {
        // a mouse click right after hover-open keeps the menu open instead of toggling it shut
        if (n.classList.contains("is-active")) { if (Date.now() - hoverOpenedAt > 600 || e.detail === 0) closeAll(); }
        else open(n);
      });
    });
    bg.addEventListener("pointerenter", () => clearTimeout(closeTimer));
    addEventListener("resize", () => { if (current) bg.style.height = current.querySelector(".tf-mega").scrollHeight + "px"; });
    scrim.addEventListener("click", closeAll);
    // a link chosen in the menu closes it (matters for links to another spot on the same page)
    el.querySelectorAll(".tf-mega a").forEach(l => l.addEventListener("click", closeAll));
    // Mobile menu: a full-screen dialog. While open, the page behind it cannot scroll,
    // focus moves into the menu, and closing it hands focus back to the burger button.
    const burger = el.querySelector(".tf-burger");
    mob.setAttribute("role", "dialog"); mob.setAttribute("aria-modal", "true");
    burger.setAttribute("aria-expanded", "false");
    function setMob(on) {
      if (mob.classList.contains("is-open") === on) return;
      mob.classList.toggle("is-open", on);
      burger.setAttribute("aria-expanded", String(on));
      document.documentElement.classList.toggle("tf-locked", on);
      (on ? mob.querySelector(".tf-mobile__close") : burger).focus({ preventScroll: true });
    }
    mob.querySelectorAll("a").forEach(l => l.addEventListener("click", () => setMob(false)));
    document.addEventListener("keydown", e => { if (e.key === "Escape") { closeAll(); setMob(false); } });
    burger.addEventListener("click", () => setMob(true));
    mob.querySelector(".tf-mobile__close").addEventListener("click", () => setMob(false));
    addEventListener("resize", () => { if (innerWidth > 1080) setMob(false); });

    const onScroll = () => { const y = scrollY; el.classList.toggle("is-solid", y > 40); el.classList.toggle("is-scrolled", y > 120); };
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  function renderFooter(el) {
    const cols = TF.FOOTER.map(c => `<div><h4>${c.title}</h4><ul>${c.links.map(([l, h]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul></div>`).join("");
    el.innerHTML = `<div class="tf-wrap"><div class="tf-footer__grid">
        <div class="tf-footer__brand"><img src="${TF.LOGO_DARK_BG}" alt="Terafence" width="400" height="106" loading="lazy" decoding="async"><p>FPGA-based data diodes and unidirectional gateways that let operational data out while keeping critical systems unreachable.</p>
          <p><a href="mailto:info@terafence.us">info@terafence.us</a></p><div class="tf-footer__slogan">Unbreachable <b>by</b> Design.</div></div>
        ${cols}</div>
        <div class="tf-footer__base"><span>&copy; ${new Date().getFullYear()} Terafence USA Inc. All rights reserved.</span><nav>${TF.LEGAL.map(([l, h]) => `<a href="${h}">${l}</a>`).join("")}</nav></div></div>`;
  }

  function placeholderLinks() {
    if (!TF.PLACEHOLDER_LINKS) return;
    // links to pages that exist as files open the file, not a notice
    document.querySelectorAll('a[href^="/"]').forEach(a => {
      const h = a.getAttribute("href"), path = h.split(/[?#]/)[0], hash = h.includes("#") ? "#" + h.split("#")[1] : "";
      if (TF.REAL_PAGES && TF.REAL_PAGES[path] && !h.includes("?")) a.setAttribute("href", TF.REAL_PAGES[path] + hash);
    });
    const toast = document.createElement("div"); toast.className = "tf-toast"; document.body.appendChild(toast);
    let t;
    document.addEventListener("click", e => {
      const a = e.target.closest("a[href]"); if (!a) return;
      const h = a.getAttribute("href");
      if (h.startsWith("/")) {
        e.preventDefault();
        toast.textContent = `"${a.textContent.trim().replace(/\s+/g, " ").slice(0, 60)}" is a planned page (${h.split("?")[0]}). It will be built in the next phase.`;
        toast.classList.add("is-on"); clearTimeout(t); t = setTimeout(() => toast.classList.remove("is-on"), 3200);
      }
    });
  }

  function reveal() {
    const els = document.querySelectorAll(".tf-reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("is-in")); return; }
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } }), { threshold: 0.12 });
    els.forEach(e => io.observe(e));
  }

  /* Rotating hero messages. el contains [data-hero-kicker], [data-hero-title], [data-hero-text], [data-hero-dots] */
  TF.heroRotator = function (el) {
    const k = el.querySelector("[data-hero-kicker]"), ti = el.querySelector("[data-hero-title]"), tx = el.querySelector("[data-hero-text]"), dots = el.querySelector("[data-hero-dots]"), box = el.querySelector("[data-hero-msg]");
    const M = TF.HERO_MESSAGES; let i = 0, timer;
    dots.innerHTML = M.map((m, j) => `<button aria-label="Message ${j + 1}"><span></span></button>`).join("");
    const btns = [...dots.children];
    function show(j) {
      i = (j + M.length) % M.length;
      box.classList.add("is-out");
      setTimeout(() => {
        k.textContent = M[i].kicker; ti.innerHTML = M[i].title; tx.textContent = M[i].text;
        box.classList.remove("is-out");
      }, 380);
      btns.forEach((b, n) => b.classList.toggle("is-on", n === i));
      clearTimeout(timer);
      if (!matchMedia("(prefers-reduced-motion: reduce)").matches) timer = setTimeout(() => show(i + 1), TF.HERO_INTERVAL_MS);
    }
    btns.forEach((b, n) => b.addEventListener("click", () => show(n)));
    k.textContent = M[0].kicker; ti.innerHTML = M[0].title; tx.textContent = M[0].text;
    btns[0].classList.add("is-on");
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) timer = setTimeout(() => show(1), TF.HERO_INTERVAL_MS);
  };

  /* Animated boundary: packets flow left to right through a hardware boundary;
     occasional reverse attempts stop at the boundary (red). Draws on a canvas. */
  TF.flowCanvas = function (canvas, opt) {
    opt = Object.assign({ boundaryX: 0.62, lanes: 9, density: 1, light: false }, opt || {});
    const ctx = canvas.getContext("2d");
    let W, H, dpr, packets = [], blocks = [], t0 = performance.now(), grid = [];
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    function size() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      grid = [];
      for (let n = 0; n < 70; n++) grid.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.2 + .3, a: Math.random() * .5 + .1 });
    }
    const laneY = l => H * (0.16 + 0.68 * (l / (opt.lanes - 1)));
    function spawn() {
      const l = Math.floor(Math.random() * opt.lanes);
      packets.push({ x: -20, l, v: 1.1 + Math.random() * 1.6, len: 18 + Math.random() * 40 });
    }
    function spawnReverse() {
      const l = Math.floor(Math.random() * opt.lanes);
      blocks.push({ x: W + 20, l, v: 2.2 + Math.random(), state: "in", life: 0 });
    }
    function frame(now) {
      const t = (now - t0) / 1000, bx = W * opt.boundaryX;
      ctx.clearRect(0, 0, W, H);
      // star grid
      grid.forEach(g => { ctx.fillStyle = `rgba(124,139,230,${g.a * (0.6 + 0.4 * Math.sin(t + g.x))})`; ctx.beginPath(); ctx.arc(g.x, g.y, g.r, 0, 6.28); ctx.fill(); });
      // lanes
      for (let l = 0; l < opt.lanes; l++) {
        const y = laneY(l);
        const grd = ctx.createLinearGradient(0, 0, W, 0);
        grd.addColorStop(0, "rgba(74,92,196,0)"); grd.addColorStop(.35, "rgba(74,92,196,.22)"); grd.addColorStop(1, "rgba(74,92,196,.10)");
        ctx.strokeStyle = grd; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      // boundary (the diode)
      const pulse = 0.55 + 0.45 * Math.sin(t * 2);
      const bg = ctx.createLinearGradient(bx - 40, 0, bx + 40, 0);
      bg.addColorStop(0, "rgba(41,58,146,0)"); bg.addColorStop(.5, `rgba(74,92,196,${0.35 + 0.2 * pulse})`); bg.addColorStop(1, "rgba(41,58,146,0)");
      ctx.fillStyle = bg; ctx.fillRect(bx - 40, 0, 80, H);
      ctx.strokeStyle = `rgba(160,172,240,${0.7 + 0.3 * pulse})`; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(bx, H * .06); ctx.lineTo(bx, H * .94); ctx.stroke();
      // chip ticks
      for (let y = H * .1; y < H * .92; y += 26) { ctx.strokeStyle = "rgba(160,172,240,.35)"; ctx.beginPath(); ctx.moveTo(bx - 7, y); ctx.lineTo(bx + 7, y); ctx.stroke(); }
      // packets (out)
      if (!reduce && Math.random() < 0.09 * opt.density) spawn();
      packets.forEach(p => {
        p.x += p.v * (p.x > bx ? 1.25 : 1);
        const y = laneY(p.l);
        const g = ctx.createLinearGradient(p.x - p.len, 0, p.x, 0);
        g.addColorStop(0, "rgba(124,139,230,0)"); g.addColorStop(1, p.x > bx ? "rgba(235,238,255,.95)" : "rgba(124,139,230,.9)");
        ctx.strokeStyle = g; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(p.x - p.len, y); ctx.lineTo(p.x, y); ctx.stroke();
        ctx.fillStyle = p.x > bx ? "#fff" : "#9DA9F0"; ctx.beginPath(); ctx.arc(p.x, y, 1.8, 0, 6.28); ctx.fill();
      });
      packets = packets.filter(p => p.x - p.len < W + 10);
      // reverse attempts (blocked at the boundary)
      if (!reduce && Math.random() < 0.006 * opt.density && blocks.length < 2) spawnReverse();
      blocks.forEach(b => {
        const y = laneY(b.l);
        if (b.state === "in") { b.x -= b.v; if (b.x <= bx + 10) { b.x = bx + 10; b.state = "stop"; } }
        else b.life += 1;
        const a = b.state === "stop" ? Math.max(0, 1 - b.life / 70) : 0.9;
        const g = ctx.createLinearGradient(b.x, 0, b.x + 40, 0);
        g.addColorStop(0, `rgba(242,26,50,${a})`); g.addColorStop(1, "rgba(242,26,50,0)");
        ctx.strokeStyle = g; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(b.x, y); ctx.lineTo(b.x + 40, y); ctx.stroke();
        if (b.state === "stop") {
          const s = 6 + b.life * 0.08; ctx.strokeStyle = `rgba(242,26,50,${a})`; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(b.x - s, y - s); ctx.lineTo(b.x + s, y + s); ctx.moveTo(b.x + s, y - s); ctx.lineTo(b.x - s, y + s); ctx.stroke();
          ctx.strokeStyle = `rgba(242,26,50,${a * 0.5})`; ctx.beginPath(); ctx.arc(b.x, y, s * 1.8, 0, 6.28); ctx.stroke();
        }
      });
      blocks = blocks.filter(b => b.life < 70);
      if (!reduce) requestAnimationFrame(frame);
    }
    size(); addEventListener("resize", size);
    if (reduce) { for (let n = 0; n < 40; n++) { spawn(); packets[packets.length - 1].x = Math.random() * W; } }
    requestAnimationFrame(frame);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const h = document.querySelector("[data-tf-header]"); if (h) renderHeader(h);
    const f = document.querySelector("[data-tf-footer]"); if (f) renderFooter(f);
    placeholderLinks(); reveal();
    document.querySelectorAll("[data-arrow]").forEach(a => a.insertAdjacentHTML("beforeend", " " + ARROW));
  });
})();
