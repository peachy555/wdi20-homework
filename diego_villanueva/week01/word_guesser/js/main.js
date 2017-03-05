// You'll create a simple word guessing game where the user gets infinite tries to guess the
 // word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold
 // the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the
 // user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it
// should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check
// that your program works.

var word = ['f', 'o', 'x'];
var guessedLetters = ['_','_','_'];
var triedLetters =[];
var reward = 0;
var repeated;

console.log(guessedLetters);  // to start the game we show the empty letters



var guess = function(letter){

  // check if we've tried the letter
  for (var i=0; i< triedLetters.length + 1; i++){
    if (triedLetters[i] === letter){
      repeated = true;
      break;
    } else {
    triedLetters.push(letter);
    repeated = false;
    }
  }




  //
  if (repeated === true){
    console.log('already said');
  } else {

        var rightAnswer = false;

        for (var i=0; i< word.length; i++){
          if (letter === word[i]){
            guessedLetters[i] = letter;
            rightAnswer = true;
            reward += 10;
          }
        }

        if (rightAnswer === false){
          reward -= 10;
        }

        console.log(guessedLetters);
        console.log('you reward = $' + reward);

        var finished = 0;

        for (var i=0; i< word.length; i++){
          if (guessedLetters[i] != '_'){
            finished ++
          }
        }

        if (finished === word.length){
            console.log('congratulations, you won');
        }

  }
}
