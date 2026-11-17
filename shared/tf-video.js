/* Accessible activation of the centered play artwork on the video poster. */
(function () {
  document.querySelectorAll('.p-video-stage').forEach(stage => {
    const video = stage.querySelector('video');
    const button = stage.querySelector('.p-video-play');
    if (!video || !button) return;
    button.addEventListener('click', () => {
      const result = video.play();
      if (result && result.catch) result.catch(() => { button.hidden = false; });
    });
    video.addEventListener('play', () => { button.hidden = true; });
    video.addEventListener('emptied', () => { button.hidden = false; });
    video.addEventListener('ended', () => { video.load(); button.hidden = false; });
  });
})();

/* Video popup: any [data-open-video] button opens the [data-vmodal] player in the centre of the page. */
(function () {
  const vmodal = document.querySelector("[data-vmodal]");
  const openers = document.querySelectorAll("[data-open-video]");
  if (!vmodal || !openers.length) return;
  const vid = vmodal.querySelector("video");
  let vFocus = null;
  function openVideo() {
    vFocus = document.activeElement;
    vmodal.setAttribute("aria-hidden", "false");
    vmodal.classList.add("is-open");
    document.body.classList.add("tf-noscroll");
    if (vid) { const p = vid.play(); if (p && p.catch) p.catch(() => {}); }
    const close = vmodal.querySelector(".a-vmodal__close"); if (close) close.focus({ preventScroll: true });
  }
  function closeVideo() {
    vmodal.classList.remove("is-open");
    vmodal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("tf-noscroll");
    if (vid) vid.pause();
    if (vFocus) vFocus.focus({ preventScroll: true });
  }
  openers.forEach(b => b.addEventListener("click", openVideo));
  vmodal.querySelectorAll("[data-vmodal-close]").forEach(b => b.addEventListener("click", closeVideo));
  document.addEventListener("keydown", e => { if (e.key === "Escape" && vmodal.classList.contains("is-open")) closeVideo(); });
})();
