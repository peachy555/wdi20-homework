var solution = ['F', 'O', 'X'];
var currentGuess = ['_', '_', '_'];

var checkLetter = function(letter) {
  var inputLetter = letter.toUpperCase(); // Set all input to uppercase
  var guessFlag = false;

  // for (var i = 0; i < solution.length; i++) {
  //   if (inputLetter === solution[i]){
  //     guessFlag = true;
  //     currentGuess[i] = solution[i];
  //   }
  // }

  // for (i in solution) {
  //   if (inputLetter === solution[i]){
  //     guessFlag = true;
  //     currentGuess[i] = solution[i];
  //   }
  // }

  solution.forEach(function(correctLetter, i){
    if (inputLetter === correctLetter){
      guessFlag = true;
      currentGuess[i] = correctLetter;
      console.log(currentGuess);
    }
  });

  return guessFlag;
};

var guessLetter = function(letter) {
  checkLetter(letter);
  console.log(currentGuess);
  if (currentGuess.indexOf('_') === -1) { // Check for winning condition
    console.log('Congratulation, you won!');
  }
}

// Wheel of Fortune
var reward = 0; // Have to declare outside so that it will not reset everytime function ends
var wheelOfFortune = function(letter) {
  if (checkLetter(letter)) { // Rewarding system
    reward += 10;
  } else {
    reward--;
  }
  console.log(currentGuess);
  if (currentGuess.indexOf('_') === -1) { // Check for winning condition
    console.log('Congratulation, you won $' + reward + '!');
  }
}

// Hangman
var counter = 0; // Same reason as Wheel of Fortune
var hangman = function(letter) {
  if (!checkLetter(letter)) { // If guess wrongly, counter goes up
    counter++;
  }
  if (counter === 6) { // Check for losing condition
    console.log('You lose...');
  }
  if (currentGuess.indexOf('_') === -1) { //Check for winning condition
    console.log('Congratulation, you won!');
  }
}


//---------------------------------------------------------------------------

var maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

var maxOfThree = function(num1, num2, num3) {
  if (num1 < num2) { // Force num1 to be the largest number of the first pair
    num1 = num2;
  }
  if (num1 > num3) {
    return num1;
  } else {
    return num3;
  }
}

var checkVovel = function(letter) {
  var input = letter.toUpperCase();
  if (input === 'A' || input === 'E' || input === 'I' || input === 'O' || input === 'U') {
    return true;
  } else {
    return false;
  }
}

var sumArray = function(numbers) {
  var sum = 0;
  for (i in numbers) {
    sum += numbers[i];
  }
  return sum
}

var multiplyArray = function(numbers) {
  var sum = 1;
  for (i in numbers) {
    sum = sum * numbers[i];
  }
  return sum
}
