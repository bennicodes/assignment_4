const popupContainer = document.querySelector(".popup__container");
const popupWindow = document.querySelector(".popup__window");
const closeButton = document.querySelector(".popup__close-button");
const popupCard = document.querySelector(".popup__card");

function openPopup() {
  popupContainer.classList.add("popup__container--active");

  popupCard.classList.add("popup__card--disabled");
}
popupCard.addEventListener("click", () => {
  openPopup();
});

function closePopup() {
  popupContainer.classList.remove("popup__container--active");

  popupCard.classList.remove("popup__card--disabled");
}

popupContainer.addEventListener("click", (e) => {
  if (e.target !== popupWindow) {
    closePopup();
  }
});

closeButton.addEventListener("click", closePopup);
