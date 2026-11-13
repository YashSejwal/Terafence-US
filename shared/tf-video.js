/* Accessible activation of the centered play artwork on the video poster. */
(function () {
  document.querySelectorAll('.p-video-stage').forEach(stage => {
    const video = stage.querySelector('video');
    const button = stage.querySelector('.p-video-play');
    button.addEventListener('click', () => {
      const result = video.play();
      if (result && result.catch) result.catch(() => { button.hidden = false; });
    });
    video.addEventListener('play', () => { button.hidden = true; });
    video.addEventListener('emptied', () => { button.hidden = false; });
    video.addEventListener('ended', () => { video.load(); button.hidden = false; });
  });
})();
