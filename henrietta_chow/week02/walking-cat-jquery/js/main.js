$(document).ready(function(){

  $body = $('body');
  $body.css ({
    background: 'yellow'
  });

  $cat = $('img');

  var moveRight = function () {
    var x = parseInt($cat.css('left'));
    $cat.css ({
        left: x + 50 + 'px'
      });

    if (x > window.innerWidth - 100) {
      clearInterval(intervalRight);
      $cat.flip();
      intervalLeft = setInterval(moveLeft, 500)
    }
  }
    intervalRight = setInterval(moveRight, 500);

  var moveLeft = function () {
    var x = parseInt($cat.css('left'));
    $cat.css ({
      left: x - 50 + 'px'
    });
    if (x === 10) {
      clearInterval(intervalLeft);
      intervalRight = setInterval(moveRight, 500);
    }
  }
});
