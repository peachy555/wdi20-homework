var hasFactor = function( number, potentialFactor ){
  // we are going to return the value of this conditional test, which always will be either
  // true or false (it's a conditional test because it's using the conditional operator ===)
  // that will make this function useful to call from inside an if(), which
  // we do in the raindrops() function below
  return number % potentialFactor === 0;
}

var raindrops = function( input ){

  var output = '';

  if( hasFactor(input, 3) ){
    output += 'Pling'; // This is equivalent to output = output + 'Pling';
  }

  // more readable to use our custom function than if(input % 5 === 0){
  if( hasFactor(input, 5) ){
    output += 'Plang';
  }

  if( hasFactor(input, 7) ){
    output += 'Plong';
  }


  if( output.length === 0 ){
    output = input.toString();
  }

  return output;
};
