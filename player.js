// Audio element and controls
const audio = document.getElementById('crt-audio');
const playBtn = document.getElementById('play-btn');
const progress = document.getElementById('progress');

// Play/Pause toggle
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸';
    } else {
        audio.pause();
        playBtn.textContent = '▶';
    }
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

// Seek functionality
progress.addEventListener('click', (e) => {
    const rect = progress.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audio.currentTime = pos * audio.duration;
});
