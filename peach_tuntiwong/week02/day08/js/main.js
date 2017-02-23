

var catImg = document.getElementById("cat");
var catPos = 0; //current desired position of image
var timeInterval = 5; //set speed
var isForward = 1; //use to indicate direction and index for shifting image
catImg.style.top = (window.innerHeight-catImg.height)/2 + "px";


var catFlip = function() {
  if (isForward === 1) {
    catImg.style.transform = "scaleX(-1)";
    isForward = -1;
  } else {
    catImg.style.transform = "scaleX(1)";
    isForward = 1;
  }
};

var moveCat = function() {
  catPos += isForward;
  catImg.style.left = catPos + "px";
}

var catWalk = function() {
  var catIntervalForward = setInterval(function() {
    if (isForward === 1) {
      console.log(isForward);
      moveCat();
      if (catPos === (window.innerWidth-catImg.width)) {
        catFlip();
      }
    } else {
      moveCat();
      if (catPos === 0) {
        catFlip();
      }
    }

  }, timeInterval);
};

catWalk();
