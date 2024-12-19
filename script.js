
const playPauseBtn = document.getElementById('playPauseBtn');
const audio = document.getElementById('audio');
const seekbar = document.getElementById('seekbar');

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Play';
  }
});

audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  seekbar.value = progress;
});

seekbar.addEventListener('input', () => {
  const seekTime = (seekbar.value / 100) * audio.duration;
  audio.currentTime = seekTime;
});
