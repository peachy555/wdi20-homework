var currentAge = 39;
var maximumAge = 85;
var yearsLeft = maximumAge - currentAge;
var daysLeft = yearsLeft * 365;
var snackName = 'hamburgers';
var snacksPerDay = 3;

var snackRequired = daysLeft + snacksPerDay;


var calculateSupply = function (currentAge, snacksPerDay) {
  var maximumAge = 85;
  var yearsLeft = maximumAge - currentAge;
  var daysLeft = yearsLeft * 365;
  var snacksPerDay = 3;
  var snackName = 'hamburgers';
  var snackRequired = daysLeft + snacksPerDay;

  var outputString = ("I will need " + snackRequired + " " + snackName " to last me until my old age of " + maximumAge)

  console.log(outputString);
}
calculateAge(39,3);
