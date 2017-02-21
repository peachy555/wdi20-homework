// var printTriangle = function(number){
//   for(var i=0;i<number;i++){
//   console.log("*");
//   }
// }
//
//   printTriangle(5);

// var isEven = function(number){
//   return number % 2 == 0;
// }
//
//
// for(var i=0;i<21;i++){
//   if(isEven(i)){
//   console.log(i + ' is even');
//  }else{
//   console.log(i + ' is odd');
//  }
// }


// var wdi20 = [
//   [null, null, null, null, "kevin", null],
//   ["luke", null, "jared", "hen", "diego"],
//   [null, null, null, "peach"],
//   [null, "petr", null, null]
// ]
//
// for(var x = 0;x<wdi20.length;x++){
//   for(var y = 0;y<wdi20[x].length;y++){
//     console.log("Row " + (x + 1) + " Seat " + (y + 1) + ": " + wdi20[x][y])
//   }
// }



//AFTERNOON LAB!
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.


// var favorites = ['red','blue','green'];
//
// for(var x = 0; x < favorites.length; x++){
//   console.log("My #" + (x + 1) + " choise is " + favorites[x]);
// }


// Write a function that will take any given year and return whether it is a leap year or not. Remember that a leap year is:
//
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
//
// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true


// var leapYear = (1996)



var isLeapYear = function(year){
  //if ((year% 4 === 0) && !(year % 100 === 0) || (year % 400 === 0)){
//
//     return true
//   }else {
//     return false
//   }
//
// }

    if (year % 4 === 0){

    if (year % 100 === 0) && !(year % 400 === 0){
      return false;
    }else{
      return true;
    }
  } else {
    return false;
};

console.log();
console.log( isLeapYear(1996));
console.log( isLeapYear(1997));
console.log( isLeapYear(1900));
console.log( isLeapYear(2000));

var input = prompt(Give me a number);
console.log(isleapYear(input));
