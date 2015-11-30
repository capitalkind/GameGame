
This is a image matching game with an NHL theme to it 

In the HTML there are three sets of six divss, to create a field of 18 

The main function is called imageClick, the idea behind it is that when a div is clicked the overlay's 
z-index is set to 9999, while its child img has it's opacity animated to 1 to allow it to be seen 

Within this there is a function to increase a count number by the two <div>s upon which a user clicks
These clicks assign the class of "clickedImage" 
If the Ids of these two clicked divs match, the user scores a goal! 

However, if they do not match they animate back to 0 and a goal against the user is scored. 
Initially, I had the game just piling up goals for the user based on matches made, but I felt it would 
be more challenging and fun if the user were essentially playing against themselves. 

The score is tallied and displayed in the h2 at the top of the page, along with a countdown timer that is 
mapped to a start button to begin the game and fire off the necessary functions.

The getWinner function keeps track of the score and displays an alert at the end of the game as to 
whether or not the "home team", the user, has won the game. 

The other main function is createImageArray, which makes an array out of the images of NHL team logos and 
randomizes that array into a new array which gets appended into our 18 divs.
