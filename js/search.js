/*
	TO-DO: Get the element for the search bar.
		   Get the element for the feedback message.
           
       Create a function that makes the feedback message visible and displays a tip message (Search for any recipe listed on this page!).
          Hint: Use DOM display property and innerHTML property. 

        Create a function that hides the feedback message and clears all HTML content.
          Hint: Use DOM display property and innerHTML property.

        Use traditional DOM event handlers to call the appropriate function when the search bar gains focus and loses focus.

        Add an event listener to the search bar when value in input has changed.
            - Get the search bar value and convert it to lowercase. 
            - Create a flag variable to track if any matching recipe is found.
            - Loop through all the recipe cards.
                - Get the recipe name and convert it to lowercase. (Hint: Get the text of the h3 element in the card).
                - Check if the recipe name includes the search bar value.
                - If it does, show the card, clear the feedback message and update the flag variable.
                - If it doesn't, hide the card.
                - If no matching recipe is found, make the feedback message visible and display a 'No matches found!'.
*/

