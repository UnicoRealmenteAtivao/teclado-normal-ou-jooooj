document.querySelectorAll('.botao').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.getAttribute('data-som');
    const audio = document.getElementById(id);
    if (audio) {
      if (!audio.paused) {
        audio.pause();
        audio.currentTime = 0;
      } else {
        document.querySelectorAll('audio').forEach(a => {
          a.pause();
          a.currentTime = 0;
        });
        audio.play();
      }
    }
  });
});