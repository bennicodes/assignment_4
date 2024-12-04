const socialContainer = document.querySelector(
  ".social__container--functional"
);
const facebookLink = document.querySelector(".facebook");
const tooltipBox = document.querySelector(".tooltip__box--functional");
tooltipArrow = document.querySelector(".tooltip__arrow--functional");

function showTooltip() {
  facebookLink.classList.add("facebook--active");

  tooltipBox.classList.add("tooltip__box--active");
  tooltipBox.textContent = "Facebook";

  tooltipArrow.classList.add("tooltip__arrow--active");
}

function removeTooltip() {
  facebookLink.classList.remove("facebook--active");
  tooltipBox.classList.remove("tooltip__box--active");
  tooltipArrow.classList.remove("tooltip__arrow--active");
  tooltipBox.textContent = "";
}

facebookLink.addEventListener("mouseenter", showTooltip);

facebookLink.addEventListener("mouseleave", removeTooltip);
