



  // Add an event listener to the theme switch checkbox
  // themeSwitch.addEventListener("change", function () {
  //     // Toggle the dark mode class on the body
  //     bodyEl.classList.toggle("dark-mode");

      // Update the theme preference in localStorage
//       const newTheme = bodyEl.classList.contains("dark-mode") ? "dark" : "light";
//       localStorage.setItem("theme", newTheme);
//   });
// });





const moreSkillsBtn = document.querySelector("#skill-sm-button");
const moreSkills = document.querySelector("#more-skills");

moreSkillsBtn.addEventListener("click", () => {
  // try using classlist so as to manipulate the fluidity from the css
  if (moreSkills.classList.contains("hide-more-skills")){
    moreSkillsBtn.innerHTML = "Show less";
    moreSkills.classList = "show-more-skills";
  }else if (moreSkills.classList.contains("show-more-skills")){
    moreSkillsBtn.innerHTML = "Show more";
    moreSkills.classList = "hide-more-skills";
  }
  //else {
  //   moreSkillsBtn.innerHTML = "Check JavaScript";
  // }
});

// readMore2.addEventListener("click", () => {
//   moreSkillsBtn.click();
// });



// const updateTime = document.querySelector("#update-time");



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