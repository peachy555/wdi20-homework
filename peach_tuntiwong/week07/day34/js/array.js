var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var bumpyArr = ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]];
var uncompactedArr = [ "hello", false, NaN, undefined, "quantom bogo-sort" ];

var arrToTransform = [[ "age", "location" ], [ NaN, undefined ]];

// Create an array of every five numbers between 30 and 101
var taskOne = function() {

};

// Turn bumpyArr into one flat array (no nested arrays)
var taskTwo = _.flatten(bumpyArr);

// Remove all of the falsey elements in the uncompactedArr
var taskThree = _.compact(uncompactedArr);

// Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0
arr = [[ 1, 25, 100 ], [ 1, 14, 25 ], 24, Infinity, -0]
var taskFour = _.uniq(_.flatten(arr));

// Find the index of the first element in numbers that is over 7 and is even
var taskFive = _.find( _.groupBy(numbers, function(num){ return num%2; })["0"], function(el){ return el > 7 });

// Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }
var taskSix = _.object(arrToTransform);
