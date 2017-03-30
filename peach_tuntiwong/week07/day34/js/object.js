var objectToMap = {
  start:  100,
  middle: 853,
  end:    912
}

// Multiply each value in objectToMap by a random number and return an object with the changed values
objectToMap = _.mapObject(objectToMap, function(val, key) {
  return val * _.random(0, 10);
});

// Get an array version of objectToMap that looks like this - [["start", 100], ["middle", 853], ["end", 912]]
var taskEight =  _.pairs(objectToMap);

// Flip objectToMap around so that it looks like this - { "100" : "start", "853" : "middle", "912" : "end" }
var taskNine = _.invert(objectToMap);

// Remove the "start" key from objectToMap in two different ways
objectToMap = _.omit(objectToMap, 'start');
objectToMap = _.omit(objectToMap, function(value, key, object) {
  return key == 'start';
});
