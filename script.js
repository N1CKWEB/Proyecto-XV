document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  const numRosas = 5000;
  const imageSrc = 'rosa.png'; 

  const img = new Image();
  img.src = imageSrc;

  img.onload = function() {
    for (let i = 0; i < numRosas; i++) {
      const rosa = document.createElement('div');
      rosa.classList.add('rosa');

      rosa.style.left = `${Math.random() * window.innerWidth}px`;
      rosa.style.top = `${Math.random() * -window.innerHeight}px`;

      const delay = Math.random() * 5;
      rosa.style.animationDelay = `${delay}s`;

      container.appendChild(rosa);
    }
  };

  img.onerror = function() {
    console.error('Error al cargar la imagen de la rosa.');
  };
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

