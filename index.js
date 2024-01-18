const bodyEl = document.querySelector("body");
const windowMode = document.querySelector("#window-mode");

windowMode.addEventListener("click", () => {
  if (windowMode.classList=="fa-solid fa-moon"){
    windowMode.classList = "fa-solid fa-sun";  
    bodyEl.classList.toggle("dark-mode");
  }
  else if (windowMode.classList=="fa-solid fa-sun"){
    windowMode.classList = "fa-solid fa-moon";
    bodyEl.classList.toggle("dark-mode");
  }
});
