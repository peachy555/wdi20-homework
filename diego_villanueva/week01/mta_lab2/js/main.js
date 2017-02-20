// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
//
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the
// line and stop that user is getting off at and prints the journey and the total
//  number of stops for the trip in the console:
//
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square,
//  and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points.
//  (For example, this means the 28th stop on the N line is different than the 28th street stop on
// the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working.
//  You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd
//   on the N and on the 6 need to be differentiated)


var trip = [];
var numberOfStops = 0;

var lines = {
  n: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  l: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

var collectData = function (){
  line1 = prompt('Select a subway line to start, options are: n, l and 6','n');
  station1 = prompt('Select one of the following stations: ' + lines[line1] + '.');
  line2 = prompt('Select a subway line to start, options are: n, l and 6','n');
  station2 = prompt('Select one of the following stations: ' + lines[line2] + '.');
};

// line1, station1, line2, station2

var findPosition = function(line, station){  //it finds the position in the array of the stations / a number
  return lines[line].indexOf(station);
};



var findDirection = function( location1, location2){  // it tells you whether you should go right or left to get to the other station, and how many stations
  return location2 - location1      // if it is negative, you should go left, positive is right
};


var writeTrip = function(){
  var outputString = '';
  for (var i=0; i< trip.length - 2; i++){
    outputString += trip[i] + ' , ';
  }
  if (trip.length > 1){
    outputString += trip[trip.length-2];
    outputString += ' and ' + trip[trip.length-1];
  } else {
    outputString += trip[trip.length-1];
  }
  return outputString;
};


var createTrip = function(station1, station2, line){       //this only works within the same line
  var position1 = findPosition(line,station1);
  var position2 = findPosition(line,station2);
  var direction = findDirection(position1,position2);     // this is a number
  var trip = '';

  if (direction > 0 ){       //positive, so going right
    for (var i = position1+1; i<position2+1; i++ ){
      window.trip.push(lines[line][i]);
    }
  } else {
    for (var i = position1-1; i>position2-1; i-- ){
      window.trip.push(lines[line][i]);
    }
  }
  numberOfStops += Math.abs(direction)
  return writeTrip ()

};    // closed createTrip()


//                      'N'
var planTrip = function(){
  collectData();
  var startLineStations = lines[line1];  // need to use square brackets when the object key is inside a variable
  numberOfStops = 0;
  trip = [];
  if (line1 === line2){
    var singleTrip = createTrip(station1, station2, line1);
    console.log('You must travel the following stops on the ' + line1 + ' line: ' + singleTrip);
    console.log(numberOfStops + ' stops in total.');

  } else {
    var singleTrip1 = createTrip(station1, 'Union Square', line1);
    trip = []
    var singleTrip2 = createTrip('Union Square', station2, line2);
    console.log('To get from ' + station1 + ' on line ' + line1 + ' to ' + station2 + ' on line ' + line2);
    console.log('You must travel through the following stops on the '+ line1 + ' line: '  + singleTrip1 + '.');
    console.log('Change at Union Square.');
    console.log('Your journey continues through the following stops on the ' + line2 + ' line: '+ singleTrip2 + '.');
    console.log(numberOfStops + ' stops in total.');
  }
};
