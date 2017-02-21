// You'll create a simple word guessing game where the user gets infinite tries
//to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
//and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and
//congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not,
//it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

var word = ['F', 'O', 'X'];
var guesses = ['_', '_', '_'];


var guessLetter = function (letter) {
  var rightGuess = false;
  var needMoreGuesses = false;

  for(var i = 0; i < word.length; i++){
    if(letter === word[i]) {
      guesses[i] = letter;
      rightGuess = true;
    }
    if(guesses[i] = '_') {
      needMoreGuesses = true;
   }

 if (rightGuess === true && needMoreGuesses === true) {
   console.log('Congratulations! You guessed the letter ' + letter + ' correctly!');
 } else if (rightGuess === false) {
    console.log('Sorry, the letter ' + letter + ' is not in the word.');
  } else if (needMoreGuesses === false) {
    console.log('Congratulations, you won!');
  }
}
}





// var guessWord = function(){
//
// }
//     var i = guess.indexOf(letter);
//     guess[i] = letter;
//       console.log(guess[i]);
//     }
// }
//

// var guessWord
// guess[i] = letter
// print guess


// replace letter in guess
// var newGuess = function(i) {
//   return guess(i) = letter;
// }
// guess[i] = letter
// console.log('Congratulations! You found a new letter. ' + guess);



//create a loop to check guess letters against letters in word
//if matches a word letter = changed the guessed letters array to reflect that
