let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Тільки для мобільних (до 768px)
  if (window.innerWidth <= 768) {
    if (currentScroll > lastScrollTop) {
      // Скрол вниз — сховати navbar
      navbar.classList.add('scrolled');
    } else {
      // Скрол вгору — показати navbar
      navbar.classList.remove('scrolled');
    }
  } else {
    // На великих екранах завжди показано
    navbar.classList.remove('scrolled');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
