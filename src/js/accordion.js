const titleContainers = document.querySelectorAll(
  ".accordion__title-container"
);
const descriptionContainers = document.querySelectorAll(
  ".accordion__description-container"
);

const accordionToggleLogos = document.querySelectorAll(
  ".accordion__toggle-logo"
);

titleContainers.forEach((title, index) => {
  title.addEventListener("click", () => {
    descriptionContainers[index].classList.toggle(
      "accordion__description-container--active"
    );

    accordionToggleLogos[index].classList.toggle("rotate-arrow");
  });
});
