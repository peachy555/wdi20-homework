// A Leap Year is: 
// Every year that is evenly divisible by 4
// Except if it is evenly divisible by 100...
// Unless it is also divisible by 400
// Test Data... Make sure it is working!
//
// 1997 is not a leap year, it should return false
// 1996 is a leap year, it should return true
// 1900 is not a leap year, it should return false
// 2000 is a leap year, it should return true

var isDivisibleBy = function( number, divisor ){
  return number % divisor === 0;
};

var isLeapYear = function ( year ) {

  // if( (year % 4 === 0) && ( !(year % 100 === 0) || (year % 400 === 0) )  ){
  //   return true;
  // } else {
  //   return false;
  // }

  if( isDivisibleBy(year, 4) ){

    if( isDivisibleBy(year, 100) && !isDivisibleBy(year, 400) ){
      return false;
    } else {
      return true;
    }

  } else {
    // handle the case where the year is NOT divisible by 4
    return false;
  }

}; // end of isLeapYear()


// Run some tests on our function!
console.log('Expecting false, true, false, true:');
console.log( isLeapYear(1997) );
console.log( isLeapYear(1996) );
console.log( isLeapYear(1900) );
console.log( isLeapYear(2000) );

// Use prompt() to ask the user for input, interactively
// (Never actually use prompt() in a real web project, everyone hates it)
var input = parseInt( prompt("Gie us a year pal!") );
console.log( isLeapYear(input) );
