

var catImg = document.getElementById("cat");
var catPos = 0;
var catWalk = function() {
  catPos += 1;
  catImg.style.left = catPos + "px";
}

setInterval(catWalk, 15);
