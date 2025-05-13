// Функція для приховання/показу меню на мобільних пристроях при прокручуванні
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

// Обробник прокручування
window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Скрол вниз, приховати меню
    navbar.classList.add('hidden');
  } else {
    // Скрол вгору, показати меню
    navbar.classList.remove('hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Зупинка на верхній частині сторінки
});

// Функція для показу меню на мобільних пристроях при натисканні кнопки
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
});
