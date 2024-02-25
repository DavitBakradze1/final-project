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
  let progressBar = document.getElementById("progress-bar");

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

let observer = new IntersectionObserver(animateSkillsLevel, { threshold: 0.5 });

document.querySelectorAll(".skills-level").forEach((skillsLevel) => {
  observer.observe(skillsLevel);
});

document.getElementById("skills-level1").dataset.stopPercentage = 85;
document.getElementById("skills-level2").dataset.stopPercentage = 65;
document.getElementById("skills-level3").dataset.stopPercentage = 50;
document.getElementById("skills-level4").dataset.stopPercentage = 30;

let cardData = [
  {
    image: "images/d4.svg",
    name: "John Doe",
    profession: "Software Engineer",
    messages: [
      "Develop an e-commerce platform with secure payment processing, user authentication, and dynamic product pages. Implement responsive design for seamless user experience across devices...",
    ],
  },
  {
    image: "images/d3.svg",
    name: "Jane Smith",
    profession: "Graphic Designer",
    messages: [
      "Create a personal portfolio showcasing projects, skills, and achievements. Design an elegant, mobile-friendly interface with smooth navigation. Incorporate interactive elements to highlight expertise...",
    ],
  },
  {
    image: "images/d5.svg",
    name: "Alice Johnson",
    profession: "Web Developer",
    messages: [
      "Build a social media dashboard to aggregate and display user data. Use API integration for real-time updates, implement data visualization, and ensure a user-friendly interface for easy interaction...",
    ],
  },
];

function changeCard(cardNumber) {
  let cardImage = document.getElementById("cardImage");
  let recomendatorName = document.querySelector(".recomendator-name");
  let recomendatorProfession = document.querySelector(
    ".recomendator-proffesion"
  );
  let cardMessage = document.getElementById("cardMessage");

  cardImage.src = cardData[cardNumber - 1].image;
  recomendatorName.textContent = cardData[cardNumber - 1].name;
  recomendatorProfession.textContent = cardData[cardNumber - 1].profession;

  let randomIndex = Math.floor(
    Math.random() * cardData[cardNumber - 1].messages.length
  );
  cardMessage.textContent = cardData[cardNumber - 1].messages[randomIndex];
}

changeCard(1);

let projectNames = document.querySelectorAll(".project-name");

projectNames.forEach(function (element) {
  element.addEventListener("click", function () {
    projectNames.forEach(function (el) {
      el.classList.remove("clicked");
    });

    this.classList.add("clicked");
  });
});

function filterProjects(category) {
  let cards = document.querySelectorAll(".project-card");

  cards.forEach(function (card) {
    let cardCategory = card.getAttribute("data-category");
    if (category === "all" || category === cardCategory) {
      card.style.display = "block";

      let categoriesWithLargeSize = [
        "workIdeas",
        "mockup",
        "psdDesign",
        "logo",
        "presentation",
        "icons",
      ];
      if (categoriesWithLargeSize.includes(category)) {
        card.classList.add("large");
      } else {
        card.classList.remove("large");
      }
    } else {
      card.style.display = "none";
    }
  });
}

window.onload = function () {
  filterProjects("all");
};
