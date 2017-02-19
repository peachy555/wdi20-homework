
// Done
var DrEvil = function(amount) {
  if (amount < 1000000) {
    console.log(amount + ' dollars');
  } else {
    console.log(amount + ' dollars (pinky)');
  }
};

// Don't understand the question
var mixUp = function(str1, str2) {
  // First two letters
  var out1 = str2[0] + str2[1];
  var out2 = str1[0] + str1[1];
  // The rest
  for (var i = 2; i < str1.length; i++) {
    out1 += str1[i];
  }
  for (var j = 2; j < str2.length; j++) {
    out2 += str2[j];
  }
  var output = out1 + ' ' + out2;
  console.log(output);
};

// Done
var fixStart = function(inputString) {
  var output = '';
  output += inputString[0];

  for (var i = 1; i < inputString.length; i++) {
    if (inputString[0] == inputString[i]) {
      output += '*';
    } else {
      output += inputString[i];
    }
  }

  console.log(output);
};

// Done
var verbing = function(inputString) {
  if (inputString.length >= 3) { // Make changes only to verb with 3 letters or more
    if (inputString[inputString.length - 3] == 'i' && inputString[inputString.length - 2] == 'n' && inputString[inputString.length - 1] == 'g') {
      // verb ends with 'ing'; add 'ly' if already have 'ing'
      output = inputString + 'ly';
    } else { // normal verb; add 'ing'
      output = inputString + 'ing';
    }
  } else { // Less than 3 letters
    output = inputString;
  }
  console.log(output);
};

var notBad = function(inputString) {
  // Search for word
  var notFlag = 0;
  var badFlag = 0;
  for (var i = 0; i< inputString.length - 5; i++) { // Check for not
    if (inputString[i] == 'n' && inputString[i+1] == 'o' && inputString[i+2] == 't') {
      notFlag = 1;
      notIndex = i;
    }
    if (notFlag != 0) {
      for (var j = notIndex + 3; j< inputString.length - 2; j++) { // Check for bad
        if (inputString[j] == 'b' && inputString[j+1] == 'a' && inputString[j+2] == 'd') {
          badFlag = 1;
          badIndex = j+3;
          break;
        }
      }
    }
  }
  // Get output string
  if (badFlag === 1) {
    var output = '';
    for (var a = 0; a < notIndex; a++) { // Copy before 'not'
      output = output + inputString[a];
    }
    output = output + 'good';
    for (var b = badIndex; b < inputString.length; b++) { // Copy after 'bad'
      output = output + inputString[b];
    }
    console.log(output);
  } else {
    console.log(inputString);
  }
};

// Test Code
DrEvil(1000000000000);
mixUp('mix', 'pod');
fixStart('barboonbaby');
verbing('eating');
notBad('it is not a bad, today!')
