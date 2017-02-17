// // print to console a triangle of stars of any size
// // ie
// // *
// // **
// // ***
// // ****
// // *****
// // ******
// // *******
// var printStars = function(number){
//   var str = '';
//   for (var i = 0;i < number ;i++){
//     str += '*'
//   }
//   console.log(str);
// }
// var printReverseTriangle = function(number){
//   for (var i = 0;i < number;i++){
//     printStars(number - i);
//
//   }
// }
// var printTriangle = function(number){
//   for (var i = 0;i < number;i++){
//     if(i>=6){
//       break;
//     }
//     printStars(number + 1);
//
//   }
// }
// var printBigTriangle = function(number){
//     printTriangle(number)
//     printReverseTriangle(number -1);
// }
//
// printBigTriangle(10);



// The even/odd reporter
//
// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").


// var isEven = function (number){
//   return number % 2 == 0;
// }
//   for (var i = 0;i <21;i++){
//     if (isEven(i)){
//       console.log(i + ' is even.');
//
//     }else{
//       console.log(i + ' is odd.');
//
//
//   }
// }



// Multiplication Tables
//
// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
//
// See Solution




//
// The Grade Assigner
//
// Check the results of your assignGrade function from the conditionals exercise by logging every value from 60 to 100: your log should show "For 88, you got a B. For 89, you got a B. For 90, you got an A. For 91, you got an A.", etc., logging each grade point in the range.
//
// See Solution
