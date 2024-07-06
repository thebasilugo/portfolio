const preloaderEl = document.querySelector("#preloader");

document.addEventListener("DOMContentLoaded", function () {
  // Hide the preloader when the content is fully loaded
  setTimeout(function () {
    preloaderEl.style.display = "none";
  }, 5000); // Adjust the timeout based on your content load time
});
