// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var calculateSupply = function (age, snacksPerDay) {
  var age;
  var deathAge = 101;
  var yearsLeft = deathAge - age;
  var daysLeft = yearsLeft * 365;
  // var snackName = "twinkies";
  var snacksPerDay;
  var snacksRequired = daysLeft * snacksPerDay

  console.log('You will need to buy '+ snacksRequired +' to last you until the ripe old age of ' + deathAge)
};



// var outputString = 'I will need to buy '+ snacksRequired + ' ' + snackName +  ' to last you until the ripe old age of ' + deathAge;
//
// console.log(outputString);
calculateSupply(21,3);
calculateSupply(31,5);
calculateSupply(101,1);
calculateSupply(.5,.25);
