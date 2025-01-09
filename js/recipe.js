// Array of image filenames for different recipes
var images = ['burger.jpeg', 'frenchToast.jpeg', 'omelette.jpeg', 'pancake.jpeg', 'pasta.jpeg', 'salad.jpeg', 'sandwich.jpeg', 'steak.webp', 'tacos.jpeg'];

// Array of recipe names corresponding to the images
var recipes = ['Beefy Burger', 'Gooey French Toast', 'Eggy Omelette', 'Cherry Pancakes', 'Saucy Pasta', 'Fancy Salad', 'Club Sandwich', 'Hearty Steak', 'Avocado Tacos'];

// Array of preparation times (in minutes) for each recipe
var times = [15, 10, 15, 20, 10, 20, 30, 50, 20];

// Array of star ratings for each recipe
var stars = [5, 3, 4, 3, 1, 4, 3, 4, 5];


// Function to generate a string of star icons based on the number of stars
function getStars(numStars) {

    // HTML code for a single star icon with a dark goldenrod color
    var star = '<span style="color:darkgoldenrod;">&#9733;</span>';

    // Repeat the star icon to create the rating string
    var rating = star.repeat(numStars);

    // Return the generated rating string
    return rating;
}


/*
	TO-DO: Get ALL card elements.
	       Loop through all the cards and update their content to include the following:
           	- An image element with the src attribute set to the corresponding image file in the images array.
           	- An h3 element with the recipe name from the recipes array.
           	- A horizontal rule element.
           	- A paragraph element with the preparation time and star rating (Hint: Use the getStars function).	     	
*/

