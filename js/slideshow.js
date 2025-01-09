// Function to display slides in a slideshow automatically
function showSlides() {

  /*
	TO-DO: Get ALL slide elements.
         Loop through all the slides and hide them (Hint: Use DOM display property).
         Increment the slide index.
         If the slide index exceeds the total number of slides, reset the slide index to 1. 
         Display the current slide (Hint: Use DOM display property).

  */


  
   // Call this function recursively after 5000 milliseconds (5 seconds) 
  setTimeout(showSlides, 5000); 
}


/*
	TO-DO: Create a variable to keep track of the slide index and initialize to 0.
         Call the function above.     	
*/

