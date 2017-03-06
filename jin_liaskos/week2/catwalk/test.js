// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

window.onload = function(){
  var stepSize = 10;
  var catPosition = 0;
  var moveNext = 50;
  var catTimer = null;

  function catWalk() {
    // move the cat position
    catPosition += stepSize;

    var img = document.getElementsByTagName('img')[0];

    img.style.left = catPosition + 'px';
  }
//
//   window.setInterval(catWalk, moveNext);
//   if (catPosition > (window.innerWidth-img.width)) {
//     img.style.left = '0px'
// }
// function catWalk() {
// catTimer = window.setInterval(catWalk, delayMs);
// }
