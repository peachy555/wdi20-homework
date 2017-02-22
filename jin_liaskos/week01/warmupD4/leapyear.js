//
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
// How to structure it...
//
// We want a custom function called isLeapYear

var inDivisibleBy = function ( number, divisor ){
  return number % divisor === 0;
}
var isLeapyear = function (year){

  // if( (year % 4 === 0) && !( year % 100 === 0) || (year % 400 === 0) ){

  if(inDivisibleBy(year, 4) {

    if(inDivisibleBy(year, 100) && !inDivisibleBy(year, 400)){
      return false;

    } else {
      return true;
    }

  } else {
    return false;
  }
};

console.log('Expecting false, true, false, true;')
console.log( isLeapyear(1997));
console.log( isLeapyear(1996));
console.log( isLeapyear(1900));
console.log( isLeapyear(2000));

var input = parseInt( promt("give us the number");
console.log(isLeapyear(input) );
