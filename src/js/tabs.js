const tabTitleButtons = document.querySelectorAll(".tabs__title");
const tabContents = document.querySelectorAll(".tabs__content");

tabTitleButtons.forEach((tabButton, index) => {
  tabButton.addEventListener("click", (e) => {
    tabContents.forEach((content) =>
      content.classList.remove("tabs__content--active")
    );

    tabTitleButtons.forEach((button) =>
      button.classList.remove("tabs__title--active")
    );

    e.target.classList.add("tabs__title--active");

    tabContents[index].classList.add("tabs__content--active");
  });
});
