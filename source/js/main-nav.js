const mainNav = document.querySelector(".main-nav");
const mainNavButton = mainNav.querySelector(".main-nav__button-close");

mainNav.classList.remove("main-nav--nojs");

mainNavButton.addEventListener("click", function () {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
      mainNav.classList.add("main-nav--closed");
      mainNav.classList.remove("main-nav--opened");
      }
    })
