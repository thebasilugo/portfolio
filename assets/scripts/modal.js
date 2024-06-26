// script to aid with the bottom modal's clicking
const footerModalBtn = document.querySelector(".footer-modal-btn");
const headerModalBtn = document.querySelector(".header-modal-btn");

footerModalBtn.addEventListener("click", () => {
  headerModalBtn.click();
});
