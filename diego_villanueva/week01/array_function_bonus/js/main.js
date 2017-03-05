// 1 Define a function maxOfTwoNumbers that takes two numbers as arguments and
// returns the largest of them. Use the if-then-else construct available in Javascript.
 // You'll have to remember your pre-work, or do some googling to figure this out.

// 2 Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

// 3 Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel,
 // false otherwise.

// 4 Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
 // all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and
 // multiplyArray([1,2,3,4]) should return 24.

var maxOfTwoNumbers = function (num1,num2){
  if (num1>num2){
    outputString = num1;
  } else {
    outputString = num2;
  }
  console.log(outputString + ' is the largest number');
}

var maxOfThree = function (num1, num2, num3){
  if (num1>num2 && num1>num3){
    outputString = num1;
  } else if (num2>num1 && num2> num3){
    outputString = num2;
  } else {
    outputString = num3;
  }
  console.log(outputString + ' is the largest number');
}

var vowel = function(str){
  if (str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u'){
    return true;
  } else {
    return false;
  }
}

var sumArray = function(num1,num2,num3,num4){
  return num1+num2+num3+num4;
}

var multiplyArray = function(num1,num2,num3,num4){
  return num1*num2*num3*num4;
}

// Bonus
// Define a function reverseString that computes the reversal of a string. For example,
 // reverseString("jag testar") should return the string "ratset gaj".

// Write a function findLongestWord that takes an array of words and returns the length of the longest one.

// Write a function filterLongWords that takes an array of words and an number i and returns the array
// of words that are longer than i.

var reverseString = function(str){
  var outputString = '';
  for (i=str.length; i>0; i = i -1){
    outputString = outputString + str[i-1];
  }
  console.log(outputString);
}

var findLongestWord = function (str1,str2,str3){
  str1 = 'hi';
  str2 = 'earth';
  str3 = 'elephant';
  if (str1.length>str2.length && str1.length>str3.length){
    outputString = str1;
  } else if (str2.length>str1.length && str2.length> str3.length){
    outputString = str2;
  } else {
    outputString = str3;
  }
  console.log(outputString + ' is the longest word');
}


var filterLongWords = function (str1,str2,str3, num){
  var words = [str1,str2,str3];
  var resultArray = [];

  for (i=0;i<3;i++){
    if (words[i].length>num){
      resultArray.push(words[i]);
    }
  }
    console.log(resultArray);
}
