
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector("nav ul");
  if (toggle && navMenu) {
    toggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
    });
  }
});
