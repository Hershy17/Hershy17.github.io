// Create a variable humanScore. Give it a value of the number 0.
var humanScore = 0;

// Create a variable computerScore. Give it a value of the number 0.
var computerScore = 0;

// Create a function play. It should accept two parameters: humanPlay and computerPlay.
function play(humanPlay, computerPlay) {
  console.log("You played" + humanPlay + ".");
  console.log("The bot played" + computerPlay + ".")
// Write all the code below INSIDE the function curly braces!!
  // Log "You played {humanPlay}. The bot played {computerPlay}" to the console.
  // For example: "You played rock. The bot played scissors."
  // If the human play is equal to the computer play
    // Log "You tied. :|" to the console.
    if (humanPlay === computerPlay) {
         console.log("You tied")
     }
  // Else if the humanPlay is 'paper' and the computerPlay is 'rock' OR
  else if (humanPlay === 'paper' && computerPlay === 'rock' || humanPlay === 'rock' && computerPlay === 'scissors'|| humanPlay === 'scissors'
&& computerPlay === 'paper') {
  console.log("You win! :)")
    humanScore += 1;
}
  // humanPlay is 'rock' and the computerPlay is 'scissors' OR
  // humanPlay is 'scissors' and the computerPlay is 'paper'
    // Log "You win! :)" to the console
    // Add one to the humanScore variable (be sure to use += )

  // Otherwise log "You lose! :(" to the console
  else {
  console.log("You Lose! :)")
  computerScore += 1;
}
    // Add one to the computerScore variable (be sure to use += )
  // Log "You have {humanScore} points" to the console
  // For example: "You have 0 points"
  // Log "The bot has {computerScore} points" to the console.
  // For example: "The bot has 3 points"

// END OF FUNCTION (Place the closing curly brace here!)
}
// After defining the function, call the function 5 - 6 times,
// Providing a different play for the computer and human each time.
// Hint: You'll need to use two arguments
// each time you call the play function.


// BONUS:
// Create a "best of 3" version

// SUPER CHALLENGE:
// Google and implement a random choice for the computer each time.
play('rock', 'scissors');
play('paper', 'rock');
play(' rock', 'scissors');
play('scissors', 'paper');
