// Ховає navbar при прокрутці вниз (лише мобільна версія)
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;

  if (window.innerWidth <= 768) {
    if (scrollTop > lastScrollTop) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    lastScrollTop = scrollTop;
  }
});

// Відкриття/закриття мобільного меню
function toggleMobileMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}
