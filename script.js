document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video-principal');
    video.play();
});

window.addEventListener('load', function() {
    const numPetals = 100;
    const container = document.querySelector('.informacion-en-general');
  
    for (let i = 0; i < numPetals; i++) {
      const petal = document.createElement('div');
      petal.classList.add('rosa');
      petal.style.setProperty('--left-pos', `${Math.random() * 100}%`);
      petal.style.setProperty('--rotate', Math.random() * 360);
      petal.style.setProperty('--delay', Math.random() * 5); // Retraso aleatorio entre 0 y 5 segundos
      container.appendChild(petal);
    }
  });

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

