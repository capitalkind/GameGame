<h1>NHL Matching Game</h1>
This is a image matching game with an NHL theme.

<h3>Gameplay</h3>
The user must attempt to match the logos of 9 NHL teams in the span of a minute. 

A correct match earns the user a goal for, while an incorrect match counts as a goal against the user.

In effect the user is playing against his or her self. 

![Game in progress](http://i.imgur.com/7arJ2I5.jpg?raw=true "Two sets of correct matches, and an incorrect match fading")

<h3>The Approach</h3>
The main function is called imageClick. When one of the 18 divs is clicked, the z-index of the div's overlay is set to 9999, while its child img has it's opacity animated to 1 to allow it to be seen. 

Within this there is a function to increase a count number by the two divs upon which a user clicks.
These clicks assign the class of "clickedImage" and if the Ids of these two clicked divs match, the user scores a goal! 

However, if they do not match they animate back to an opacity of 0 and a goal against the user is scored. Having the user play against themselves makes the game more challenging, and fun, than if the user were simply piling up goals. 

The score is tallied and displayed in the h2 at the top of the page, along with a countdown timer that is 
mapped to a start button to begin the game and fire off the necessary functions.

The getWinner function keeps track of the score and displays an alert at the end of the game as to 
whether or not the "home team", the user, has won the game. 

The other main function is createImageArray, which makes an array out of the images of NHL team logos and 
randomizes that array into a new array which gets appended into our 18 divs.

The user interface is responsive and can be comfortably played on all mobile devices. 

<h3>Technologies Used</h3>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>jQuery</li>
</ul>
