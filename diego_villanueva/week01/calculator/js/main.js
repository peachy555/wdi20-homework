var squareNumber = function (number){
  var squaredNum = number * number;
  var outputString = 'The result of squaring the number ' + number + ' is ' + squaredNum + '.';
  console.log(outputString);
}

var halfNumber = function (number) {
  var halfNum = number / 2;
  var outputString = 'Half of ' + number + ' is ' + halfNum;
  console.log(outputString);
}

var percentOf = function (num1, num2){
  var result = num1 / num2 * 100;
  var outputString = num1 + ' is ' + result + '% of ' + num2;
  console.log(outputString);
}

var areaOfCircle = function (radius){
  var area = 3.141592 * radius * radius;
  var result = Math.round(area*100)/100
  outputString = 'The area for a circle with radius ' + radius + ' is ' + result + '.'
    // found out how to do it here: http://www.javascriptkit.com/javatutors/round.shtml
  console.log(outputString);
}

var areaResult

var calculate = function (num){
  var num1 = num/2; //Take half of the number and store the result.
    var outputString = 'Half of ' + num + ' is ' + num1;
    console.log(outputString);

  var num2 = num1*num1; //Square the result of #1 and store that result.
    var outputString = 'The result of squaring the number ' + num1 + ' is ' + num2 + '.';
    console.log(outputString);

  var area = 3.141592 * num2 * num2; //Calculate the area of a circle with the result of #2 as the radius.
    var areaResult = Math.round(area*100)/100
    var outputString = 'The area for a circle with radius ' + num2 + ' is ' + result + '.'
    console.log(outputString);

  var percentage = area / num2 * 100; //Calculate what percentage that area is of the squared result (#3).
    var result = Math.round(percentage*100)/100
    var outputString = areaResult + ' is ' + result + '% of ' + num2;
    console.log(outputString);

}
