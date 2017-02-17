

// var wdi20 = [
//   [null, null, null, null, 'kevin', null],
//   ['luke', null, null,'jared', 'hen', 'diego'],
//   [null, null, null, 'peach'],
//   [null, 'petr', null, null]
// ]
//
// for(var x = 0; x<wdi20.length; x++){
//   for(var y = 0; y<wdi20.length;y++){
//
// console.log("Row " + (x + 1) + " Seat " + (y + 1) + ": " + wdi20[x][y])
//
//   }
// }



// ## Exercises: Arrays
//
// # Your top choices
//
// - Create an array to hold your top choices (colors, presidents, whatever).
// - For each choice, log to the screen a string like: "My #1 choice is blue."
// - Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.


var topChoices = ['water','beer','wine','whiskey']

  for(var i = 0; i<topChoices.length; i++){

  console.log('My #'+ (i + 1) + ' choice is ' + topChoices[i])
  }
