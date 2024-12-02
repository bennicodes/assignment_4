const addButton = document.querySelector(".add__button");
const counter = document.querySelector(".counter__number");
const subtractButton = document.querySelector(".subtract__button");

let currentCount = 0;

addButton.addEventListener("click", () => {
  currentCount++;
  counter.textContent = currentCount;
});

subtractButton.addEventListener("click", () => {
  if (currentCount > 0) {
    currentCount--;
    counter.textContent = currentCount;
  } else {
    currentCount = 0;
  }
});
