var mta = {
  N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],

  getStationIndex: function(line, station) {
    return this[line].indexOf( station ); //instead of running a loop to return index
  },

  planTrip: function(startLine, startStation, endLine, endStation) {
    var startIndex = this.getStationIndex(startLine, startStation);
    var endIndex = this.getStationIndex(endLine, endStation);
    var startLineUnionSqIndex = this.getStationIndex(startLine, 'Union Square');
    var endLineUnionSqIndex = this.getStationIndex(endLine, 'Union Square');

    var sameLineTrip = function (startIndex, endIndex) {
      var result = mta[startLine].slice((startIndex + 1), (endIndex + 1))
      return result;
    };

    var reverseTrip = function (startIndex, endIndex) {
      var result = (mta[startLine].slice(endIndex, startIndex)).reverse()
      return result;
    };

    var sameLineTrip2 = function (startIndex, endIndex) {
      var result = mta[endLine].slice((startIndex + 1), (endIndex + 1))
      return result;
    };

    var reverseTrip2 = function (startIndex, endIndex) {
      var result = (mta[endLine].slice(endIndex, startIndex)).reverse()
      return result;
    };

    var printTrip = function (trip) {
      var tripList = '';
      for (var i = 0; i < trip.length; i++){
      tripList += trip[i];
        if (i < trip.length - 1){
          tripList += ', ';
      } else {
        tripList += '.';
      }
    } return tripList;
  };
     //for same line trip - note. need to work out same stop result eg 6th to 6th
      if  (startLine === endLine) {
        if (startIndex < endIndex) {
          var trip = sameLineTrip(startIndex, endIndex);

        } else {
          var trip = reverseTrip(startIndex, endIndex);

        }
        return 'You must travel through the following stops on the ' + startLine + ' line: ' + printTrip(trip) + ' ' + trip.length + ' stops in total.';

      }
       //for change line trip
       else {
        if (startIndex < startLineUnionSqIndex) {
            var tripPart1 = sameLineTrip (startIndex, startLineUnionSqIndex);

            var tripPart2 = endIndex < endLineUnionSqIndex ? reverseTrip2 (endLineUnionSqIndex, endIndex) : sameLineTrip2 (endLineUnionSqIndex, endIndex); // replacing if/else statement with true/false ?

            var trip = tripPart1.concat(tripPart2);

        } else {
            var tripPart1 = reverseTrip (startIndex, startLineUnionSqIndex);

            var tripPart2 = endIndex < endLineUnionSqIndex ? reverseTrip2 (endLineUnionSqIndex, endIndex) : sameLineTrip2 (
            endLineUnionSqIndex, (endIndex+ 1));

            var trip = tripPart1.concat(tripPart2);
       }
    }
      return 'You must travel through the following stops on the ' + startLine + ' line: ' + printTrip(tripPart1) + ' Change at Union Square. Your journey continues on the ' + endLine + ' line through the following stops: ' + printTrip(tripPart2) + ' '  + trip.length + ' stops in total.';

  }
};
//test results
console.log('expecting 5'); //check index function
console.log(mta.getStationIndex('N', '8th'));
console.log('expecting 28th, 23rd'); //check same line trip
console.log(mta.planTrip('N', '34th', 'N', '23rd'));
console.log('expecting 34th, 28th, 23rd, Union Square');
console.log(mta.planTrip('N', 'Times Square', 'N', 'Union Square'));
console.log('expecting 23rd, 28th, 34th, Times Square'); //check reverse same line trip
console.log(mta.planTrip('N', 'Union Square', 'N', 'Times Square'));
console.log('expecting Union Square, 23rd, 28th, 33rd');
console.log(mta.planTrip('6', 'Astor Place', '6', '33rd'));
console.log('expecting 28th, 23rd, Union Square, 3rd, 1st'); //check change line trip
console.log(mta.planTrip('N', '34th', 'L', '1st'));
console.log('expecting 6th, Union Square, 23rd, 28th, 34th'); // check for before + before
console.log(mta.planTrip('L', '8th', 'N', '34th'));
console.log('expecting 3rd, Union Square, 23rd, 28th, 33rd, Grand Central');
console.log(mta.planTrip('L', '1st', '6', 'Grand Central'));
console.log('expecting 3rd, Union Square, Astor Place');
console.log(mta.planTrip('L', '1st', '6', 'Astor Place'));
console.log('expecting 6th, Union Square');
console.log(mta.planTrip('L', '8th', 'N', 'Union Square'));
