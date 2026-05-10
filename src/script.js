document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".burger-btn");
  const menu = document.querySelector(".header__inner");
  const overlay = document.querySelector(".overlay");

  const menuClose = document.querySelectorAll("[data-menu-close]");
  const menuToggle = document.querySelectorAll("[data-menu-toggle]");

  const form = document.querySelector(".main-form");

  let windowWidth = window.innerWidth;

  function toggleClass(element, active) {
    element.classList.toggle(active);
  }

  function closeMenu() {
    menu.classList.remove("header__inner--open");
    burgerBtn.classList.remove("burger-btn--active");
    overlay.classList.remove("overlay--active");
  }

  function toggleMenu() {
    toggleClass(burgerBtn, "burger-btn--active");
    toggleClass(menu, "header__inner--open");
    toggleClass(overlay, "overlay--active");
  }

  menuClose.forEach((el) => el.addEventListener("click", closeMenu));
  menuToggle.forEach((el) => el.addEventListener("click", toggleMenu));

  window.addEventListener("resize", () => {
    if (window.innerWidth !== windowWidth) {
      closeMenu();
      windowWidth = window.innerWidth;
    }
  });

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector('input[name="name"]').value;
      const tel = form.querySelector('input[name="tel"]').value;
      const email = form.querySelector('input[name="email"]').value;

      alert(`Ім'я: ${name}\nТелефон: ${tel}\nEmail: ${email}`);

      form.reset();
    });
  }
});
