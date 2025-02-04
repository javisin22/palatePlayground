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

// Get all card elements
var cards = document.getElementsByClassName("card");

if (cards.length > 0) { }
    
// Loop through all the cards
for (var i = 0; i < cards.length; i++) {

    // Get the parent element for the current card
    let cardParent = cards[i];

    /* ---- Create Image Element and Append to Card Parent----*/
    
    // Create the img element
    var img = document.createElement("img");

    // Set the src attribute of the image element to the corresponding image file
    img.src = "images/" + images[i];

    cardParent.appendChild(img);

    /* ---- Create H3 Element and Append to Card Parent----*/
    
    // Create the h3 element
    var h3 = document.createElement("h3");

    // Set the text content of the h3 element to the recipe name
    h3.textContent = recipes[i];

    cardParent.appendChild(h3);

    /* ---- Create Horizontal Rule Element and Append to Card Parent----*/
    
    // Create the hr element
    var hr = document.createElement("hr");

    cardParent.appendChild(hr);

    /* ---- Create Paragraph Element and Append to Card Parent----*/

    // Create the p element
    var p = document.createElement("p");

    // Set the text content of the p element to the preparation time and star rating
    p.textContent = "Preparation Time: " + times[i] + " minutes";

    var starPElement = document.createElement("p");
    starPElement.innerHTML = "Ratings: " + getStars(stars[i]);
    p.appendChild(starPElement);

    cardParent.appendChild(p);
}

