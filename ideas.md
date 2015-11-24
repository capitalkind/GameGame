
THE GAME 

Working Idea: Memory Game, not original, but I like them

You would need a web page displaying an array of cards 
Maybe a field of 3 x 6 for 18 total cards 
They would be displayed face down 
A click would trigger a function that would flip the card 
The other side of the card would ave a symbol on it and you'd have to find its match 
15 total pairs 
Correctly matching a pair would remove them from the field 
An incorrect guess would flip both cards back over 
There could also be a timer running, maybe with a total playing time of 5 minutes 
There should be a counter on the page that runs down from five minutes 
There should be a button that starts the counter, and the game 



How would you randomize the cards?
    Build an array of the cards, maybe have the symbols represented by letters and each pair has a number, i.e. [a1, a2, b1, b2 ...]
    Then run a function at the beginning of the game that randomizes them 
        var cards = [a1, a2, b1, b2, etc]
        function (shuffle(cards)) **fisher-yates shuffle 
How would you flip them?
    You would need to set up an event listner for 'click' and when 
How would you register a correct or incorrect pairing? 
How would you remove cards from the field?

GAME STATE
    an array of 


DISPLAY 
    a table of clickable, responsive images 
    matching them correctly causes those onese to be removed 

INTERACTION
    the timer needs to be tied in to the randimization to begin the game
    the user interacts with the game through clicks, event listeners to capture them 

My timer works, but I want to set it up so that clicking start randomizes the arrays and starts the game 
I want to populate an array randomly from another array of images, 
They would need to be hidden which I think you can do with style.display('none')

psudeo code

timer starts, images are randomized, they remain hidden math.random to randomize? 
    i figure it would need a constructor function 
card gets clicked on, revealing it 
another card gets clicked on, revealing it 
if they don't match, they both get hidden 
