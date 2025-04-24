const button = document?.querySelector(".info-block__text");
const infoBlock = document?.querySelector(".info-block");

if (button) {
  button.addEventListener("click", () => {
    infoBlock.classList.toggle("info-block--active");
  });
}
