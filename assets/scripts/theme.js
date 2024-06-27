const bodyEl = document.querySelector("body");
const windowMode = document.querySelector("#window-mode");
// const navBar = document.querySelector(".navigation-bar")
// const navBrand = document.querySelector("navbar-brand");
// const activeNavLink = document.querySelector("nav-link active"); 

document.addEventListener("DOMContentLoaded", function () {
  // Check if the user has a theme preference stored in localStorage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme == "dark") {
    // update the icon, upon dark-mode reload, to fa-sun
    windowMode.classList.remove("fa-moon");
    windowMode.classList.add("fa-sun");
  }

  // Apply the stored theme or default to light mode
  bodyEl.classList.toggle("dark-mode", currentTheme === "dark");
  
  // Add an event listener to the theme switch checkbox
  windowMode.addEventListener("click", () => {
    if (windowMode.classList.contains("fa-moon")){
      windowMode.classList.remove("fa-moon");
      windowMode.classList.add("fa-sun");  
      bodyEl.classList.toggle("dark-mode");
      updateTheme();
    }
    else if (windowMode.classList.contains("fa-sun")){
      windowMode.classList.remove("fa-sun");
      windowMode.classList.add("fa-moon");
      bodyEl.classList.toggle("dark-mode");
      updateTheme();
    }
  });
});

const updateTheme = () => {
  const newTheme = bodyEl.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
}