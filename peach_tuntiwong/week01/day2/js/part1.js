
var squareNumber = function(inputNum) {
  var result = inputNum * inputNum;
  console.log("The result of squaring the number " + inputNum + ' is ' + result + '.');
  return result;
}

var halfNumber = function(inputNum) {
  var result = inputNum / 2;
  console.log('Half of ' + inputNum + ' is ' + result + '.');
  return result;
}

var percentOf = function(input1, input2) {
  var percent = input1 / input2 * 100;
  console.log(input1 + ' is ' + percent + '% of ' + input2 + '.');
  return percent;
}

var areaOfCircle = function(radius) {
  var result = radius * radius * Math.PI;
  var roundResult = result.toFixed(2);
  console.log('The area for a circle with radius of ' + radius + ' is ' + roundResult + '.');
  return result;
}

var finalFunction = function(inputNum) {
  var result;
  result = halfNumber(inputNum);
  result = squareNumber(result);
  squareNum = result;
  result = areaOfCircle(result);
  result = percentOf(result, squareNum);
}


// Test codes
finalFunction(30);
