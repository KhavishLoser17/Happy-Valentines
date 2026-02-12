// Start animations after page load
setTimeout(() => {
  document.body.classList.remove('not-loaded');
}, 100);

// Autoplay music with user interaction fallback
const music = document.getElementById('bgMusic');

// Try to play music automatically
if (music) {
  music.play().catch(error => {
    console.log('Autoplay was prevented. Music will start on user interaction.');
    
    // If autoplay is blocked, play on first user interaction
    const startMusic = () => {
      music.play();
      document.removeEventListener('click', startMusic);
      document.removeEventListener('touchstart', startMusic);
    };
    
    document.addEventListener('click', startMusic);
    document.addEventListener('touchstart', startMusic);
  });
}