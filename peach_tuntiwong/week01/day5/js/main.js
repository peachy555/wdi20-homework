// MTA Lab

// ********* Note ************
// Subway lines only intersect at UNION SQUARE!!!


// ************* Trip Planning ******************

var subway = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

// ************** Calculations
// Get index (location) of single stop from database
var getIndex = function(fromStop, toStop, line) { // arguements: string, string, array
  var index = {
    fromIndex: line.indexOf(fromStop),
    toIndex: line.indexOf(toStop),
  }
  return index;
}

// Get distance and direction from A to B on single line
var getDistance = function(index) {
  var tripProperties = { // Initialize as going forward
    distance: index.toIndex - index.fromIndex,
    reverse:0
  }
  // Going reverse?
  if(index.fromIndex > index.toIndex) {
    tripProperties.distance = -tripProperties.distance;
    tripProperties.reverse = 1;
  }
  return tripProperties;
}

// Get section of trip for printout
var getSection = function(index, line, reverse) {
  // Check for reverse direction
  if (!reverse) {
    return line.slice(index.fromIndex+1, index.toIndex+1);
  } else {
    return line.slice(index.toIndex, index.fromIndex).reverse();
  }
}

// ***************** Print functions
// Print format for single line trip
var printSingleLine = function(line, section, distance) {
  console.log("You must travel through the following stops on the " + line + " line: " + section + ".");
  console.log(distance + " stops in total.");
}

// Print format for multiple line trip
var printCrossLine = function(lines, sections, distance) {
  console.log("You must travel through the following stops on the " + lines[0] + " line: " + sections[0] + ".");
  console.log("Change at Union Square.");
  console.log("Your journey continues through the following stops on the " + lines[1] + " line: " + sections[1] + ".");
  console.log(distance + " stops in total.");
}

// Printer chooser
var printResult = function(crossLine, lines, sections, distance) {
  if (!crossLine) {
    printSingleLine(lines, sections, distance);
  } else {
    printCrossLine(lines, sections, distance);
  }
}

// ****** Real trip planners
var planTripSingle = function(fromLine, fromStop, toLine, toStop) {
  var index = getIndex(fromStop, toStop, subway[fromLine]); // Do it this way, so I can use index for getDistance() and getSection()
  var tripData = getDistance(index); // Get distance from fromStop to toStop
  var section = getSection(index, subway[fromLine], tripData.reverse);// Get section for printResult()

  printResult(0, fromLine, section, tripData.distance);
}

var planTripCross = function(fromLine, fromStop, toLine, toStop) {
  var index = getIndex(fromStop, 'Union Square', subway[fromLine]); // Do it this way, so I can use index for getDistance() and getSection()
  var fromTripData = getDistance(index); // Get distance from fromStop to toStop
  var fromSection = getSection(index, subway[fromLine], fromTripData.reverse);// Get section for printResult()
  // Second section
  index = getIndex('Union Square', toStop, subway[toLine]); // Do it this way, so I can use index for getDistance() and getSection()
  var toTripData = getDistance(index); // Get distance from fromStop to toStop
  var toSection = getSection(index, subway[toLine], toTripData.reverse);// Get section for printResult()

  var distance = fromTripData.distance + toTripData.distance;

  printResult(1, [fromLine, toLine], [fromSection, toSection], distance);
}

// ********** Main function
// Decide single line or cross over
var planTrip = function(fromLine, fromStop, toLine, toStop) {
  // ************************************************************************
  // Main function(fromStop, fromLine, toStop, toLine)
  lineIndex = Object.keys(subway);
  if (fromLine === toLine) {
    // Case: on the same line
    planTripSingle(fromLine, fromStop, toLine, toStop);

  } else {
    // Case: on different line
    planTripCross(fromLine, fromStop, toLine, toStop);
  }
}

// *******************Test Code
// Cross Over, with reverse
// planTrip('N', '23rd', '6', 'Grand Central');


// *************** User Interface ******************

// Check if user inputs are valid
// var checkLine = function(fromLine, toLine) {
//   if((Object.keys(subway).indexOf(fromLine) !== -1) && (Object.keys(subway).indexOf(toLine) !== -1)) {
//     return { // Pass
//       passFlag: 1,
//       fromLine: fromLine,
//       toLine: toLine
//     };
//   } else { // Fail
//     return {
//       passFlag: 0,
//       fromLine: 'Fail checkLine',
//       toLine: 'Fail checkLine'
//     };
//   }
// }
//
// var checkStation = function(passOn, fromStop, toStop) {
//   if (passOn.passFlag) { // Pass checkLine, have to check stops
//     if(1) {
//     } else {
//       console.log('fail bypass');
//       return 0;
//     }
//   }
// }
// console.log(checkLine('6', 'k'), 'fromStop', 'toStop');
//
// var userInterface = function(){
//   var fromStop = prompt("Please enter your starting stop.", "Station name");
//   var fromLine = prompt("Please enter your starting line.", "Line name");
//   var toStop = prompt("Please enter your destination stop.", "Station name");
//   var toLine = prompt("Please enter your destination's line.", "Line name");
//
//   if (checkStation(checkLine(fromLine, toLine), fromStop, toStop)) {
//     planTrip(fromLine, fromStop, toLine, toStop);
//   }
// }

// userInterface();

// console.log(planTrip('6', 'Grand Central', '6', '23rd'));
