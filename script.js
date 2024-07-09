

  const miVideo = document.getElementById('imagen-2');

// Detener el video en una sección específica (ejemplo)

if (seccionDetener) {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      miVideo.pause();
    } else {
      miVideo.play();
    }
  });

  observer.observe(seccionDetener);
}

