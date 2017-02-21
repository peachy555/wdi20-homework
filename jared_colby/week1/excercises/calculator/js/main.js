// The Calculator
//
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

var squareNumber = function (number){
  var result = (number * number);
  var number;

  console.log('The result of squaring '+ number + ' is '  + result);
  return result;
}
squareNumber(3);

var halfNumber = function (number) {
  var result = (number / 2);

  console.log('Half of ' + number + ' is ' + result);
  return result;
}
halfNumber(5);

var percentOf =  function(num1,num2) {
  var result = ( num1 / num2 * 100);

  console.log(num1 + ' is '+ result + '% of ' + num2)
  return result;

}
percentOf(2,4);


var areaOfCircle = function (radius) {
  var result  = Math.PI * radius * radius;

console.log('The area of a circle with a radius of ' +radius + ' is ' + result)
return result;
}

areaOfCircle(2)


// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).


var allCalculations = function (number){
  var result =  halfNumber(number);
  var result =  squareNumber(result);
}

console.log(allCalculations(2));



// ## Warmup - Raindrops
//
// Write a Javascript program that will take a number (eg `28` or `1755` or `9`, etc) and output the following:
//
// - If the number contains 3 as a factor, output 'Pling'.
// - If the number contains 5 as a factor, output 'Plang'.
// - If the number contains 7 as a factor, output 'Plong'.
// - If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
//
// ## Examples
// - 28 has 7 as a factor.
//   - In raindrop-speak, this would be a simple "Plong".
// - 1755 has 3 and 5 as factors.
//   - In raindrop-speak, this would be a "PlingPlang".
// - 34 has neither 3, 5 nor 7 as a factor.
//   - Raindrop-speak doesn't know what to make of that,
//     so it just goes with the straightforward "34".

//
// var hasFactor = function (number, potentialFactor) {
//
//   return number % potentialFactor === 0;
//
// }
//
//
//   if (hasFactor % 3 === 0) {
//       result += 'Pling';
//
// } if (hasFactor % 5 === 0) {
//        result +='Plang';
//
// } if (hasFactor % 7 === 0) {
//        result += 'Plong';
//
// } if (result.length === 0){
//
//
// }
//
// console.log(result);
// }
// rainDrops(28);
// rainDrops(25);
// rainDrops(21);
// rainDrops(19);
// rainDrops(105);
// rainDrops(1755);
