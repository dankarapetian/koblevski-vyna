// Сховати/показати navbar при прокрутці (мобільна версія)
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (window.innerWidth <= 768) {
    if (scrollTop > lastScrollTop) {
      navbar.classList.add('scrolled'); // Приховати
    } else {
      navbar.classList.remove('scrolled'); // Показати
    }
  }
  lastScrollTop = scrollTop;
});

// Кнопка мобільного меню
document.getElementById('menuButton').addEventListener('click', function () {
  document.getElementById('navLinks').classList.toggle('active');
});
