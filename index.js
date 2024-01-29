 // scroll-up on scroll
 document.addEventListener("DOMContentLoaded", function () {
  const scrollUpBtn = document.querySelector("#scroll-up");

  // make it show the "scroll-up" button
  function updateSideBtnStatus() {
    if (window.scrollY > 500) {
      scrollUpBtn.classList.add("active");
    } else {
      scrollUpBtn.classList.remove("active");
    }
  }

  // Add scroll event listener to update the box shadow on scroll
  window.addEventListener("scroll", function () {
    updateSideBtnStatus();
  });

  // Update the box shadow initially
  updateSideBtnStatus();
});

// script to aid with the bottom modal's clicking
const footerModalBtn = document.querySelector(".footer-modal-btn");
const headerModalBtn = document.querySelector(".header-modal-btn");

footerModalBtn.addEventListener("click", () => {
  headerModalBtn.click();
});


const preloaderEl = document.querySelector("#preloader");

document.addEventListener("DOMContentLoaded", function () {
  // Hide the preloader when the content is fully loaded
  setTimeout(function () {
    preloaderEl.style.display = "none";
  }, 5000); // Adjust the timeout based on your content load time
});


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
