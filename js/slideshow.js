// Function to display slides in a slideshow automatically
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  
  // Call this function recursively after 5000 milliseconds (5 seconds)
  setTimeout(showSlides, 5000);
}


// Variable to keep track of the slide index and initialize to 0
let slideIndex = 0;

// Call the function to display slides
showSlides();

