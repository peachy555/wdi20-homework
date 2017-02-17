var mta = {
  "N": ["Times Square","34th","28th","23rd","Union Square","8th"],
  "L": ["8th","6th","Union Square","3rd","1st"],
  "6": [ "Grand Central","33rd","28th","23rd","Union Square","Astor Place"]
}

// var planTrip = function(trainLine1, startStation,trainLine2,stopStation){
// var planTrip = function( startLine, startStation, endLine, endStation ){

// planTrip('N', 'Times Square', '6', '33rd');


//                             'N' , 'Times Square', '8th'
var singleLineTrip = function( line, startStation, endStation ){
   var stations = mta[line];
   var startIndex = stations.indexOf(startStation);
   var endIndex = stations.indexOf(endStation);
   var stationStops = mta[line].slice(startIndex,endIndex+1);
     if (startIndex > endIndex){
         stations = mta[line].reverse();
         startIndex = stations.indexOf(startStation);
         endIndex = stations.indexOf(endStation);
         stationStops = mta[line].slice(startIndex,endIndex+1);

   }
   console.log(stationStops);
};
singleLineTrip('N', "34th", "8th");
