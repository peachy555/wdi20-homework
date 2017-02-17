// Create 2 functions that calculate properties of a circle, using the definitions here.
//
// Create a function called calcCircumfrence:
//
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
//
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".


var radius;
var circumference = Math.PI * 2 * radius;
var area = Math.PI * radius * radius;



var calcCircumfrence = function ( radius ) {
  console.log('The circumference is ' + circumference + ' .');
}
var calcArea = function (radius) {
  console.log('The area is ' + area +' .');
};


calcCircumfrence(2);
calcCircumfrence(4);
calcCircumfrence(5);
calcArea(2);
calcArea(4);
calcArea(5);
