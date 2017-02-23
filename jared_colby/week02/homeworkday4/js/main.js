window.onload = function(){

  var cat = document.querySelector("img");

// var moveCat = function(x_pos, )


    var x_pos = 0;
    setInterval(function(){
      x_pos += 10;
      cat.style.left = x_pos + "px";
    },200)





}

// if (cat.style.left) === innerWidth){
//
//   clearInterval(setIntervalID);
