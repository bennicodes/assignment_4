const navbarButtons = document.querySelectorAll(".navbar__button");
const componentContainers = document.querySelectorAll(".component__container");

// Component selection ------------------
navbarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navbarButtons.forEach((btn) =>
      btn.classList.remove("navbar__button--active")
    );

    button.classList.add("navbar__button--active");

    // Find desired section --------------
    const sectionToShow = button.id;

    // Remove undesired components
    componentContainers.forEach((container) =>
      container.classList.remove("component__container--active")
    );

    // Show the selected component
    const activeComponent = document.querySelector(
      `.${sectionToShow}__component-container`
    );
    if (activeComponent) {
      activeComponent
        .closest(".component__container")
        .classList.add("component__container--active");
    }
  });
});
