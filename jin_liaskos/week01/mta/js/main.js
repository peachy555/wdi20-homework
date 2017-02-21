// MTA homework
// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
// ==============================================
// == SINGLE LINE TRIP ==

var lines = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
	 6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
//   line: [],
// };
//
//  planTrip('N', 'Times Square', '6', '33rd');
//
// declare objects/variables first object subway lines, stops
//
//                             'N',  'Times Square',  '23rd'
var singleLineTrip = function(line, startStation, endStation){
var stations = lines[line]; // ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
  console.log(stations);

var startIndex = stations.indexOf(startStation); // 0
var endIndex = stations.indexOf(endStation);  // 3
  console.log(startIndex, endIndex);
var section = stations.slice(startIndex, endIndex);
  console.log(section);
var distance = (section.length)
  console.log (distance);
 var printResult = 'You must travel through the following stops on the ' + line + ' line: ' + section + ', ' + distance + ' stops in total.';
 console.log(printResult);
  };

var result = singleLineTrip('N', 'Times Square', '23rd');
console.log(result);

//===MULTILINE trip===

var lines = {
     N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
     L: ['8th', '6th', 'Union Square', '3rd', '1st'],
     6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],

var planTrip = function(line, startStation, stop, endStation){
var stations = lines[line]; // ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
    console.log(stations);

// check if stations are in N
var checkLine = function(startStation, stop, endStation){
  for (var i=0; i<line.length; i++) {
    if (line[i].startStation ==== Times Square)}
   return line[i];
  }
}
var resultLine = checkLine("Times Square", line);
console.log(resultLine)

var result = planTrip('N', 'Times Square', '6', '23rd');
     console.log(result);

// ================================================
//first check if stops on same line, variable getIndex to check where are of stops are they in same line, then
// check how many stops --- is this where we use indexOf function??
// ALSO -- how can we check stops N(28th) not 6(28th)???  && !
// variable getSection to check  whether they are in same subwayLine
// IF statement, if sameLine result true; then
// check section - how many stops use getSection()
// var getSection()
//
// printResult() "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// console.log printResult
//
// variable getDistance
//
// IF sameLine result false;
// check what subwayLine
// getSection() A to UnionSquare
// return result
//
// getSection() B from UnionSquare to Destination
// return result
//
// totalDistance = getSectionA + getSectionB
//
// printResult = "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square." +
// "Change at Union Square" + "Your journey continues through the following stops: 23rd, 28th, 33rd."
// console.log
//
// var a = line_N.indexOf('23rd');
// console.log a
