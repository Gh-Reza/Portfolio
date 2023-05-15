const menuButton = document.querySelector(".menu-icon");
const menuLinks = document.querySelector(".menu");

menuButton.addEventListener("click", () => {
  menuLinks.classList.toggle("menu-mobile");
});
