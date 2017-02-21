var squareNumber = function(num1) {
  var num1;
  var result = num1 * num1;

  console.log('The result of squaring the number ' + num1 + ' is ' + result + '.');

  return result;
}

// squareNumber(2);
// squareNumber(3);
// squareNumber(10);

var halfNumber = function( num1 ) {
  var num1;
  var result = num1 / 2;

  console.log('Half of ' + num1 + ' is ' + result + '.');

  return result;
}

// halfNumber( 10 );
// halfNumber( 20 );
// halfNumber(7);

var percentOf = function( num1, num2 ){
  var num1;
  var num2;
  var result = num1 / num2 * 100;

  console.log(num1 + ' is ' + result + '% of ' + num2 + '.');

  return result;
}

// percentOf( 2, 4 );
// percentOf( 6, 36);
// percentOf(10, 100);

var areaOfCircle = function( radius ){
  var radius;
  var pi = 3.14;
  var area = (radius * radius) * pi;
  var result = area.toFixed(2);

  console.log('The area for a circle with radius ' + radius + ' is ' + result + '.');

  return result;
}


var testTwo = function( num1 ){
  var num1;
  var result1 = num1 / 2;

  console.log(result1);

  var result2 = result1 * result1;

  console.log(result2);

  var result3 = result2 * result2 * pi;
  var pi = 3.14;

  console.log(result3);

  var result4 = (result3 / result2) * 100;

  console.log(result4);
}

testTwo(10);

//testing functions within function
var crazyOne = function(num1) {
  var pi = 3.14;
  var result1 = halfNumber(num1);
  var result2 = squareNumber(result1);
  var result3 = areaOfCircle( result2 );
  var result4 = percentOf (result3, result2);
  // result1 = halfNumber(num1);
  // result2 = squareNumber(result1);
  // result3 = areaOfCircle( result2 );
  // result4 = percentOf (result3, result2);

  console.log(result1, result2, result3, result4);

  return result1, result2, result3, result4;
}

crazyOne (10);
