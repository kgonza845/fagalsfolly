document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.chapter').forEach(chapter => {
    chapter.addEventListener('click', () => {
      const time = parseInt(chapter.getAttribute('data-time'));
      if (window.player) {
        player.seekTo(time, true);
        player.playVideo();
      }
    });
  });
});