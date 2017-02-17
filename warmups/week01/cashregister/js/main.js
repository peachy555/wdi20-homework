
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",
  Acorn: "0.35"
};

var cashRegister = function( cart ){

  var grandTotal = 0.0;

  // Using a for..in loop is better suited to iterating over the keys of
  // objects than Object.keys() + a standard for loop!
  for(key in cart){
    var price = parseFloat( cart[key] );
    grandTotal += price;
  }

  // Version using the standard for loop:
  //
  // var keys = Object.keys( cart );   // ["banana", "handkerchief", "Tshirt", "apple", "nalgene", "proteinShake", "Acorn"]
  // for(var i = 0; i < keys.length; i++ ){
  //   var key = keys[i];
  //   var price = parseFloat( cart[key] );
  //   grandTotal += price;
  // }

  return grandTotal.toFixed(2);
};


var beginsWithItemTotal = function(cart, startChar){

  var grandTotal = 0.0;

  for(key in cart){
    if( key[0].toUpperCase() === startChar.toUpperCase() ){
      var price = parseFloat( cart[key] );
      grandTotal += price;
    }
  }

  return grandTotal.toFixed(2);
};

console.log('cashRegister(cartForParty): expecting 60.90');
console.log('Result: ' + cashRegister(cartForParty) );


console.log("beginsWithItemTotal(cartForParty, 'a'): expecting 0.95");
console.log('Result: ' + beginsWithItemTotal(cartForParty, 'a') );
