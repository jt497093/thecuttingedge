// script.js

window.addEventListener("scroll", function () {

  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.padding = "20px 60px";
  } else {
    header.style.padding = "30px 60px";
  }

});
