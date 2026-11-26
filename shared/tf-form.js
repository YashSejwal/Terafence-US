/* =====================================================================
   Terafence US - enquiry form
   Every link to /contact?topic=...&model=... opens this form instead.
   EDIT HERE: the titles and descriptions for each topic, and where
   submissions go (TF.FORM_ENDPOINT).
   ===================================================================== */
window.TF = window.TF || {};

TF.FORM_TOPICS = {
  pilot:      { kicker: "Pilot",        title: "Plan a pilot",           text: "One TFG-121 on your live site, tested against Terafence's written acceptance procedure and signed off in about two weeks.", button: "Plan my pilot" },
  demo:       { kicker: "Demo",         title: "Request a demo",         text: "See the gateway working with your protocols and systems, and ask an engineer anything.", button: "Request demo" },
  quote:      { kicker: "Quote",        title: "Get a quote",            text: "Tell us about your sites and volumes and we will come back with pricing.", button: "Request quote" },
  datasheet:  { kicker: "Datasheet",    title: "Request the datasheet",  text: "We will send the latest datasheet to your inbox.", button: "Send datasheet" },
  certifications: { kicker: "Certifications", title: "Certifications and compliance", text: "Tell us who you are and we will send the assessment and test documentation.", button: "Send request" },
  custom:     { kicker: "Custom build", title: "Custom build", text: "Tell us the protocol, workload or constraint that does not fit a standard box. Our engineers will come back to you.", button: "Send requirement" },
  contact:    { kicker: "Contact",      title: "Talk to Terafence",      text: "Tell us where your boundary sits and what has to cross it. We will help you choose the right device.", button: "Send" }
};
TF.FORM_MODELS = { "tfg-121": "TFG-121", "tfg-1urp": "TFG-1URP", "tfg121-bf": "TFG121-BF", "tfg121-bsg": "TFG121-BSG", "tfg-vsecure": "TFG-VSecure" };

/* Where submissions go: forms/send.php on the same server, found relative to this script
   so it works from sub-folders too. Set to null for demo mode (shows the thank-you, sends nothing). */
TF.FORM_ENDPOINT = (function () { try { return new URL("../forms/send.php", document.currentScript.src).href; } catch (e) { return null; } })();
TF.FORM_ERROR = 'Sorry, your request did not go through. Please try again, or email info@terafence.us.';

/* Shared sender used by the popup and the Support page form. Resolves with the server's reply or rejects. */
TF.sendForm = function (data) {
  if (!TF.FORM_ENDPOINT) return new Promise(res => setTimeout(() => res({ ok: true, ref: "TF-" + (Math.floor(Math.random() * 900000) + 100000) }), 900));
  const ctl = "AbortController" in window ? new AbortController() : null;
  const timer = ctl && setTimeout(() => ctl.abort(), 25000);
  return fetch(TF.FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(Object.assign({ page: location.href.split("#")[0] }, data)), signal: ctl ? ctl.signal : undefined })
    .then(r => r.json().catch(() => ({})).then(j => { if (!r.ok || !j.ok) throw new Error(j.error || r.status); return j; }))
    .finally(() => timer && clearTimeout(timer));
};

(function () {
  const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  const AR = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.6"/></svg>';
  let root, form, lastFocus, openedAt = Date.now();

  function build() {
    root = document.createElement("div");
    root.className = "tf-fm"; root.setAttribute("role", "dialog"); root.setAttribute("aria-modal", "true"); root.setAttribute("aria-labelledby", "tf-fm-title");
    root.innerHTML = `
      <div class="tf-fm__scrim" data-close></div>
      <div class="tf-fm__card">
        <button class="tf-fm__close" type="button" aria-label="Close" data-close><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.8"/></svg></button>
        <aside class="tf-fm__side">
          <span class="tf-fm__kicker" data-k></span>
          <h3 id="tf-fm-title" data-t></h3>
          <span class="tf-fm__model" data-m></span>
          <p data-x></p>
          <div class="tf-fm__channels">
            <div class="tf-fm__chan">
              <strong>Technical Support</strong>
              <span>Product assistance and debugging</span>
              <b class="tf-mail">support@terafence.us</b>
            </div>
            <div class="tf-fm__chan">
              <strong>Sales Inquiries</strong>
              <span>Demos and product information</span>
              <b class="tf-mail">sales@terafence.us</b>
            </div>
            <div class="tf-fm__chan">
              <strong>General Inquiries</strong>
              <span>Partnership opportunities and QnA</span>
              <b class="tf-mail">info@terafence.us</b>
            </div>
          </div>
        </aside>
        <div class="tf-fm__main">
          <form class="tf-fm__form" novalidate>
            <h4>Your details</h4>
            <p class="tf-fm__sub">Three fields. A Terafence engineer will be in touch.</p>
            <input type="hidden" name="topic"><input type="hidden" name="model">
            <div class="tf-hp" aria-hidden="true"><label>Leave this empty <input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>
            <div class="tf-fld"><input id="tf-fn" name="first_name" type="text" placeholder=" " autocomplete="given-name" required><label for="tf-fn">First name</label><span class="tf-fld__ok">${CHECK}</span><span class="tf-fld__err" aria-live="polite"></span></div>
            <div class="tf-fld"><input id="tf-em" name="email" type="email" placeholder=" " autocomplete="email" required><label for="tf-em">Work email</label><span class="tf-fld__ok">${CHECK}</span><span class="tf-fld__err" aria-live="polite"></span></div>
            <div class="tf-fld"><input id="tf-org" name="organization" type="text" placeholder=" " autocomplete="organization" required><label for="tf-org">Organization name</label><span class="tf-fld__ok">${CHECK}</span><span class="tf-fld__err" aria-live="polite"></span></div>
            <div class="tf-cap" data-cap>
              <button class="tf-cap__btn" type="button" role="checkbox" aria-checked="false"><span class="tf-cap__box">${CHECK}</span>I'm not a robot</button>
              <span class="tf-cap__brand"><b>Verified</b>Privacy &middot; Terms</span>
            </div>
            <button class="tf-btn tf-btn--primary tf-fm__submit" type="submit"><span data-b>Submit</span> ${AR}</button>
            <p class="tf-fm__err" role="alert" hidden></p>
            <p class="tf-fm__legal">By submitting you agree to our <a href="${(TF.ROOT || "") + "privacy.html"}">privacy policy</a>.</p>
          </form>
          <div class="tf-fm__done" aria-live="polite">
            <div class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div>
            <h4 data-thx></h4>
            <p data-thx-text></p>
            <button class="tf-btn tf-btn--indigo" type="button" data-close>Back to the site</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(root);
    form = root.querySelector("form");

    root.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", close));
    document.addEventListener("keydown", e => { if (e.key === "Escape" && root.classList.contains("is-open")) close(); });

    // live validation
    const rules = {
      first_name: v => v.trim().length >= 1 ? "" : "Please enter your first name.",
      email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? "" : "Please enter a valid work email.",
      organization: v => v.trim().length >= 2 ? "" : "Please enter your organization."
    };
    function check(input, show) {
      const msg = rules[input.name](input.value), f = input.closest(".tf-fld");
      f.classList.toggle("is-valid", !msg);
      if (show) { f.classList.toggle("is-error", !!msg); f.querySelector(".tf-fld__err").textContent = msg; }
      else if (!msg) { f.classList.remove("is-error"); f.querySelector(".tf-fld__err").textContent = ""; }
      return !msg;
    }
    form.querySelectorAll(".tf-fld input").forEach(i => {
      i.addEventListener("input", () => check(i, false));
      i.addEventListener("blur", () => { if (i.value) check(i, true); });
    });

    // dummy captcha
    const cap = root.querySelector("[data-cap]"), capBtn = cap.querySelector("button");
    capBtn.addEventListener("click", () => {
      if (cap.classList.contains("is-done") || cap.classList.contains("is-loading")) return;
      cap.classList.remove("is-error"); cap.classList.add("is-loading");
      setTimeout(() => { cap.classList.remove("is-loading"); cap.classList.add("is-done"); capBtn.setAttribute("aria-checked", "true"); }, 900);
    });

    form.addEventListener("submit", e => {
      e.preventDefault();
      const ok = [...form.querySelectorAll(".tf-fld input")].map(i => check(i, true)).every(Boolean);
      const capOk = cap.classList.contains("is-done");
      if (!capOk) cap.classList.add("is-error");
      if (!ok || !capOk) { const bad = form.querySelector(".tf-fld.is-error input"); if (bad) bad.focus(); return; }
      const btn = form.querySelector(".tf-fm__submit"), err = form.querySelector(".tf-fm__err");
      if (btn.disabled) return;
      btn.disabled = true; btn.classList.add("is-busy"); err.hidden = true;
      const data = Object.fromEntries(new FormData(form).entries());
      data.elapsed = Date.now() - openedAt;
      const fail = () => { btn.disabled = false; btn.classList.remove("is-busy"); err.innerHTML = TF.FORM_ERROR; err.hidden = false; };
      const done = () => {
        btn.disabled = false; btn.classList.remove("is-busy");
        const t = TF.FORM_TOPICS[data.topic] || TF.FORM_TOPICS.contact;
        root.querySelector("[data-thx]").textContent = `Thank you, ${data.first_name.trim()}.`;
        root.querySelector("[data-thx-text]").textContent = `We have your ${t.title.toLowerCase().replace(/^(request|get|plan) (a |the )?/, "")} request${data.model ? " for " + (TF.FORM_MODELS[data.model] || data.model) : ""}. A Terafence engineer will contact you at ${data.email.trim()}.`;
        root.classList.add("is-sent");
      };
      TF.sendForm(data).then(done, fail);
    });
  }

  function open(topic, model) {
    if (!root) build();
    const t = TF.FORM_TOPICS[topic] || TF.FORM_TOPICS.contact;
    root.classList.remove("is-sent");
    form.reset();
    openedAt = Date.now();
    const er = form.querySelector(".tf-fm__err"); er.hidden = true; er.textContent = "";
    form.querySelectorAll(".tf-fld").forEach(f => { f.classList.remove("is-valid", "is-error"); f.querySelector(".tf-fld__err").textContent = ""; });
    const cap = root.querySelector("[data-cap]"); cap.classList.remove("is-done", "is-loading", "is-error"); cap.querySelector("button").setAttribute("aria-checked", "false");
    root.querySelector("[data-k]").textContent = t.kicker;
    root.querySelector("[data-t]").textContent = t.title;
    root.querySelector("[data-m]").textContent = model ? (TF.FORM_MODELS[model] || model) : "";
    root.querySelector("[data-x]").textContent = t.text;
    root.querySelector("[data-b]").textContent = t.button;
    form.topic.value = topic in TF.FORM_TOPICS ? topic : "contact";
    form.model.value = model || "";
    lastFocus = document.activeElement;
    document.body.classList.add("tf-noscroll");
    // let the browser paint the closed state first, so the opening animation always plays
    void root.offsetWidth;
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add("is-open")));
    setTimeout(() => root.querySelector("#tf-fn").focus({ preventScroll: true }), 900);
  }
  function close() {
    root.classList.remove("is-open");
    document.body.classList.remove("tf-noscroll");
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }
  TF.openForm = open;

  // Any link to /contact opens the form (runs before the placeholder-link notice).
  document.addEventListener("click", e => {
    const a = e.target.closest('a[href^="/contact"]'); if (!a) return;
    e.preventDefault(); e.stopImmediatePropagation();
    const q = new URLSearchParams(a.getAttribute("href").split("?")[1] || "");
    const mob = document.querySelector(".tf-mobile.is-open"); if (mob) mob.classList.remove("is-open");
    open(q.get("topic") || "contact", q.get("model") || "");
  }, true);
})();
