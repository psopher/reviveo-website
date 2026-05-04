(function () {
  const carousel = document.getElementById('hero-carousel');
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll('.hero-slide'));
  if (slides.length < 2) return;

  let currentIndex = slides.findIndex((el) => el.classList.contains('is-active'));
  if (currentIndex < 0) {
    currentIndex = 0;
    slides[0].classList.add('is-active');
  }

  function pickNextIndex() {
    if (slides.length <= 1) return currentIndex;
    let next = currentIndex;
    while (next === currentIndex) {
      next = Math.floor(Math.random() * slides.length);
    }
    return next;
  }

  setInterval(() => {
    const next = pickNextIndex();
    slides[currentIndex].classList.remove('is-active');
    slides[next].classList.add('is-active');
    currentIndex = next;
  }, 10000);

  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
})();
