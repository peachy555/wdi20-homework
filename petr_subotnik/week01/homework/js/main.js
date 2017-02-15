// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

// var letters = ['f', 'o', 'x'];
// var guesses = ['_', '_', '_'];
//
// var guessLetter = function(letter){
//   for (var i = 0; i < letters.length; i++) {
//     if(letter === letters[i]) {
//       // we have a match
//       guesses[i] = letter;
//       console.log('Congratulation, you have found the letter ' + letter);
//     }
//   } //for
//   console.log(guesses);
// }; // function guessLetter
// guessLetter('x');
//
// the full word has been guessed
// maybe... consider a counter variable that counts how many correct guesses there have been?




// var maxOfTwoNumbers = function(number1,number2){
//     if (number1 > number2) {
//       return number1;
//     }else{
//       return number2;
//     }
// }
//
// maxOfTwoNumbers(9,5);




//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

// var maxOfThree = function(number1,number2,number3){
//   maxOfThree = number1;
//   if (maxOfThree < number2) {
//     maxOfThree = number2;
//   }
//   if (maxOfThree < number3) {
//     maxOfThree = number3;
//   }
//   return maxOfThree;
// }
// maxOfThree(5,7,9);




// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// var vowelOrNot = function(letter){
//   var vowels = ['a','e','i','o','u']
//
//   for (var i = 0; i < vowels.length; i++) {
//   if (letter === vowels[i]) {
//     return true;
//   }
//     return false;
//   }
// }
//
// vowelOrNot('b');
