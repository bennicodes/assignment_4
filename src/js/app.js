const body = document.querySelector("body");
const navbarButtons = document.querySelectorAll(".navbar__button");
const componentContainers = document.querySelectorAll(".component__container");

document.addEventListener("DOMContentLoaded", () => {
  // Create the instruction message
  const instruction = document.createElement("p");
  instruction.textContent = "Press the menu button to select a component";
  instruction.classList.add("instruction__text");

  body.append(instruction);

  // Remove instruction
  function clearInstruction() {
    if (instruction) {
      instruction.remove();
    }
  }

  // Removes instruction after 10 seconds
  setTimeout(() => {
    clearInstruction();
  }, 5000);
});

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
