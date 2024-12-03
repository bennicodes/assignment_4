const addButton = document.querySelector(".add__button");
const counter = document.querySelector(".counter__number");
const subtractButton = document.querySelector(".subtract__button");
const limitedAddButton = document.querySelector(".add__button-limited");
const limitedSubtractButton = document.querySelector(
  ".subtract__button-limited"
);
const limitedCounter = document.querySelector(".limited__counter-number");

let currentCount = 0;
let limitedCurrentCount = 0;

// Limited counter --------------------
limitedSubtractButton.disabled = true;

// Add to counter
function addToLimitedCounter() {
  limitedCurrentCount++;
  limitedCounter.textContent = limitedCurrentCount;
  if (limitedCurrentCount > 0) {
    limitedSubtractButton.disabled = false;
  }
}
// Subtract from counter

function removeFromLimitedCounter() {
  if (limitedCurrentCount > 0) {
    limitedCurrentCount--;
    limitedCounter.textContent = limitedCurrentCount;
  } else {
    limitedCurrentCount = 0;
  }
}

limitedAddButton.addEventListener("click", addToLimitedCounter);

limitedSubtractButton.addEventListener("click", () => {
  removeFromLimitedCounter();
  if (limitedCurrentCount === 0) {
    limitedSubtractButton.disabled = true;
  }
});

// Normal counter ---------------------
// Add to counter
function addToCounter() {
  currentCount++;
  counter.textContent = currentCount;
}

// Subtract from counter
function subtractFromCounter() {
  currentCount--;
  counter.textContent = currentCount;
}

addButton.addEventListener("click", addToCounter);
subtractButton.addEventListener("click", subtractFromCounter);
