
var calculateAge = function (birthYear, currentYear) {
  var maxAge = currentYear - birthYear;
  var minAge = maxAge - 1;

  var outputString = ("You are either " + maxAge + " or " + minAge );

  console.log(outputString);
}

calculateAge(1977,2017);

calculateAge(1995,2015);

calculateAge(1980,2020);
