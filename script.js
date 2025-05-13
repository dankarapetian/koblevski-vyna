// Скрипт для приховування меню при прокручуванні
window.addEventListener("scroll", function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) { // Якщо прокручено більше 100px
    navbar.classList.add('scrolled'); // Додає клас, щоб сховати меню
  } else {
    navbar.classList.remove('scrolled'); // Видаляє клас при поверненні наверх
  }
});

// Відкриття/закриття мобільного меню за допомогою кнопки
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const navbarLinks = document.querySelector('.nav-links');

mobileMenuButton.addEventListener('click', function () {
  navbarLinks.classList.toggle('active'); // Додає або видаляє клас 'active' при натисканні на кнопку
});

// Закриття меню при натисканні на будь-який пункт меню в мобільній версії
navbarLinks.addEventListener('click', function () {
  if (window.innerWidth <= 768) {
    navbarLinks.classList.remove('active'); // Закриває меню після вибору пункту
  }
});
