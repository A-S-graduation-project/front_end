// Get the slideshow container and slides
let slideshowContainer = document.querySelector(".slideshow-container");
let slides = document.querySelectorAll(".slide");

// Set initial slide index and show first slide
let slideIndex = 0;
slides[slideIndex].classList.add("active");

// Add event listeners to arrow buttons
let prevButton = document.querySelector(".prev");
let nextButton = document.querySelector(".next");
prevButton.addEventListener("click", function() {changeSlide(1)});
nextButton.addEventListener("click", function() {changeSlide(-1)});

function changeSlide(n) {
    // Hide current slide
    slides[slideIndex].classList.remove("active");
    // Update slide index
    slideIndex += n;
    // Loop to beginning if end is reached
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    // Show new slide
    slides[slideIndex].classList.add("active");
  }
