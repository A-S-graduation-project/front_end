let slideshowContainer = document.querySelector(".slideshow-container");
let slides = document.querySelectorAll(".slide");
let slideIndex = 0;

showSlides();

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].classList.add("hidden");
  }

  for (let i = slideIndex; i < slideIndex + 4; i++) {
    if (i < slides.length) {
      slides[i].classList.add("active");
      slides[i].classList.remove("hidden");
    }
  }
}

function changeSlide(n) {
  slideIndex += n;
  
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 4;
  }
  
  showSlides();
}
