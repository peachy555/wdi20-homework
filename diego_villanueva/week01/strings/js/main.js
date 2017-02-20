var drEvil = function(argument){
  if (argument == 1000000){
    console.log(argument + ' dollars (pinky)');
  } else {
    console.log(argument + ' dollars');
  }
}

var mixUp = function(word1, word2){
  var newWord1 = word1.replace(word1[1], word2[1]);
  var newWord2 = word2.replace(word2[1], word1[1]);
  var result = newWord1 + ' ' + newWord2
  console.log(result);
}


var fixStart = function(str){
  for(i=0;i<str.length;i++){
    if (i == 0){
      var result = str[0];
    } else if (str[i] == str[0]){
      result = result + "*";
    }else {
      result = result + str[i]
    }
  }
  console.log(result);
}

var verbing = function (str){
  if (str.length<3){
    result = str;
  } else if ((str[str.length-1] == "g") && (str[str.length-2] == "n") && (str[str.length-3] == "i")) {
    result = str + "ly";
  } else {
    result = str + "ing";
  }
  console.log(result);

}
