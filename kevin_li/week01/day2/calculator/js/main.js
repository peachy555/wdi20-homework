// Part 1
// 1st dot point
var squareNumber = function(number) {
  var result = number * number;
  console.log('The result of squaring the number ' + number + ' is ' + result + '.');
}

squareNumber(1);

// 2nd dot point
var halfNumber = function(number) {
  var result = number / 2;
  console.log('Half of ' + number + ' is ' + result + '.');
}

halfNumber(2);

// 3rd dot point
var percentOf = function(num1, num2) {
  var result = (num1 / num2) * 100;
  console.log(num1 + ' is ' + result + '% of ' + num2 + '.');
}

percentOf(3,4);

// 4th dot point
var areaOfCircle = function(radius) {
  var result = (Math.PI * Math.pow(radius,2)).toFixed(2);
  console.log('The area of a circle with radius ' + radius + ' is ' + result + '.');
}

areaOfCircle(5,6);

// Part 2
var lastBoss = function(number) {
  var result1 = number / 2;
  console.log('First result is ' + result1 + '.');
  var result2 = Math.pow(result1,2);
  console.log('Second result is ' + result2 + '.');
  var result3 = (Math.PI * Math.pow(result2,2)).toFixed(2);
  console.log('Third result is ' + result3 + '.');
  var result4 = ((result3 / Math.pow(result3,2)) * 100).toFixed(2);
  console.log('Final result is ' + result4 + '%.');
}

lastBoss(7);
