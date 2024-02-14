/** @format */

let index = 0;
let transitionDelay = 5000;

let slideContainer = document.querySelector(".slideshow");

let slides = slideContainer.querySelectorAll(".slide");

for (let slide of slides) {
  slide.style.transition = `all ${transitionDelay / 1500}s linear`;
}

showSlide(index);

function showSlide(slideNumber) {
  slides.forEach((slide, i) => {
    slide.style.display = i == slideNumber ? "block" : "none";
  });

  index++;

  if (index >= slides.length) {
    index = 0;
  }
}

setInterval(() => showSlide(index), transitionDelay);

document.addEventListener("DOMContentLoaded", function () {
  var progressBar = document.getElementById("progress-bar");

  progressBar.style.width = "0%";

  setTimeout(function () {
    progressBar.style.width = "100%";
  }, 2000); // Adjust the delay as needed
});
