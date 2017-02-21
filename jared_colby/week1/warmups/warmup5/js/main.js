cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36",
    Acorn: "0.35"
  };


var cashRegister  = function( cart ){
  var cartTotal = 0.0;
  var keys = Object.keys(cart);
  for(var i = 0; i<keys.length; i++){

    var key = keys[i];

    var price = parseFloat(cart[key]);

    // console.log(item);
    cartTotal += price;
  }
  return cartTotal.toFixed(2);
};

var beginsWithItemTotal = function(cart, starChar){

  var cartTotal = 0.0;

  for( key in cart){
    if(key [0].toupperCase() === starChar.toUpperCase()) {
       var price = parseFloat( cart[key]);
    }
  }
  return cartTotal.toFixed(2);
};




console.log( cashRegister(cartForParty))
