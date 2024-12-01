const toggleMenuButton = document.querySelector(".navbar__toggle-button");
const navbarLinksContainer = document.querySelector(".navbar__buttons");
const links = document.querySelectorAll(".navbar__button");

toggleMenuButton.addEventListener("click", () => {
  navbarLinksContainer.classList.toggle("navbar__buttons--active");
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => link.classList.remove("navbar__button--active"));
    e.currentTarget.classList.add("navbar__button--active");
  });
});
