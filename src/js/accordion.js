const titleContainer = document.querySelector(".accordion__title-container");
const descriptionContainer = document.querySelector(
  ".accordion__description-container"
);
const openDescriptionContainer = document.querySelector(
  ".accordion__description-container--open"
);

const accordionToggleLogo = document.querySelector(".accordion__toggle-logo");
const openAccordionToggleLogo = document.querySelector(
  ".accordion__toggle-logo--open"
);

// Open and close the accordion
titleContainer.addEventListener("click", () => {
  descriptionContainer.classList.toggle(
    "accordion__description-container--active"
  );

  accordionToggleLogo.classList.toggle("rotate-arrow");
});

// Always open accordion
openDescriptionContainer.classList.add(
  "accordion__description-container--active"
);
openAccordionToggleLogo.classList.add("rotate-arrow");


