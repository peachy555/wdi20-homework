// DrEvil
var DrEvil = function(amount) {
  if (amount === 1000000) {
    console.log(amount + ' dollars ' + '(pinky)');
  } else {
    console.log(amount + ' dollars ');
  }
}

DrEvil(1);
DrEvil(1000000);


// MixUp
var mixUp = function(str1, str2) {
  var a = str2.slice(0,2) + str1.slice(2);
  var b = str1.slice(0,2) + str2.slice(2);
  var str1 = a;
  var str2 = b;
  console.log(str1 + ' ' + str2);
}

mixUp('super', 'man');
// => maper sun


//FixStart
var fixStart = function(str) {
  for (i = 0; i < str.length; i++); {
  var str = str.replace(str[0], '*');
  console.log(str);
  }
}

fixStart('Australia')
// doesn't work


//Verbing
var verbing = function(verb) {
  if (verb.length >= 3 && verb.endsWith('ing')) {
    var verb = verb + 'ly';
  } else if (verb.length >= 3) {
    var verb = verb + 'ing';
  } else {
    var verb = verb;
  }
  console.log(verb);
  //console.log is outside the bracket and still works because it is already defined in the function(verb). Same for the below Not Bad question.
  //If the function does not define 'verb' precisely, it won't work.
}

verbing('read');
verbing('amazing');
verbing('go');


//Not Bad
var notBad = function(str) {
  if (str.indexOf('not') < str.indexOf('bad')) {
    str = str.replace(/not.*bad/, 'good')
  }
  console.log(str);
}

notBad('This dinner is not that bad!');
notBad('This dinner is bad!');
