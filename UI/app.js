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

// Get the search input and selected-allergens element
const searchInput = document.getElementById('search-input');
const selectedAllergens = document.getElementById('selected-allergens');
const allergenBtnsContainer = document.getElementById('allergen-btns-container');

// Add event listener to allergen buttons
const allergenBtns = document.querySelectorAll('.allergen-btn');
allergenBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Get the selected allergen and add to selected-allergens element
    const allergen = btn.getAttribute('data-allergen');
    
    // Check if the hashtag already exists and add it only if it does not exist
    const hashtagExists = [...selectedAllergens.querySelectorAll('.hashtag')].some(hashtag => hashtag.textContent === `#${allergen}`);
    if (!hashtagExists) {
      const hashtag = document.createElement('span');
      hashtag.classList.add('hashtag');
      hashtag.textContent = `#${allergen}`;
      selectedAllergens.appendChild(hashtag);
    }

    // Clear the search input and add the selected allergen to the query string
    searchInput.value = '';
    const params = new URLSearchParams(window.location.search);
    params.set('allergen', allergen);
    window.location.search = params.toString();
  });
});

// Add event listener to hashtags for deselecting allergens
selectedAllergens.addEventListener('click', e => {
  if (e.target.classList.contains('hashtag')) {
    // Remove the hashtag and update the query string
    const allergen = e.target.textContent.slice(1);
    e.target.remove();
    const params = new URLSearchParams(window.location.search);
    params.delete('allergen');
    window.location.search = params.toString();
  }
});

// Fill the search input with the selected allergen on page load
const params = new URLSearchParams(window.location.search);
const allergen = params.get('allergen');
if (allergen) {
  const hashtag = document.createElement('span');
  hashtag.classList.add('hashtag');
  hashtag.textContent = `#${allergen}`;
  selectedAllergens.appendChild(hashtag);
  searchInput.value = allergen;
}

// Append the allergen buttons container to the search form
const searchForm = document.querySelector('.search form');
searchForm.appendChild(allergenBtnsContainer);
