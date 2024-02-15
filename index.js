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
  }, 2000);
});

function animateSkillsLevel(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetWidth = entry.target.dataset.stopPercentage || 100;
      entry.target.style.width = `${targetWidth}%`;
      entry.target.style.opacity = 1;
      observer.unobserve(entry.target);
    }
  });
}

var observer = new IntersectionObserver(animateSkillsLevel, { threshold: 0.5 });

document.querySelectorAll(".skills-level").forEach((skillsLevel) => {
  observer.observe(skillsLevel);
});

document.getElementById("skills-level1").dataset.stopPercentage = 85;
document.getElementById("skills-level2").dataset.stopPercentage = 65;
document.getElementById("skills-level3").dataset.stopPercentage = 50;
document.getElementById("skills-level4").dataset.stopPercentage = 30;
