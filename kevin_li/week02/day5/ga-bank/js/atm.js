$(document).ready(function(){

//  Checking Account
  var $checkBalance = 0;

  var $checkDeposit = $('#checking-deposit').on('click', function () {
    $checkBalance += parseInt($('#checking-amount').val());
    $("#checking-balance").text('$' + $checkBalance);
    $checkColor();
  })

  var $checkWithdraw = $('#checking-withdraw').on('click', function () {
    // var $totalBalance = $checkBalance + $saveBalance;
    // if (parseInt($('#checking-amount').val()) > $totalBalance) {
    //   alert('Insufficient fund.');
    // } else if (parseInt($('#checking-amount').val()) < $totalBalance
    //   && parseInt($('#checking-amount').val()) > $checkBalance) {
    //   $checkBalance = 0;
    //   $saveBalance = $totalBalance - parseInt($('#checking-amount').val());
    if (parseInt($('#checking-amount').val()) > $checkBalance) {
      alert('Insufficient fund.');
    } else {
      $checkBalance -= parseInt($('#checking-amount').val());
      $("#checking-balance").text('$' + $checkBalance);
    }
    $checkColor();
  })

  var $checkColor = function () {
    if ($checkBalance === 0) {
      $('#checking-balance').css('backgroundColor', 'red')
    } else {
      $('#checking-balance').css('backgroundColor', '#E3E3E3')
    }
  }

  $checkColor();


//  Savings Account
  var $saveBalance = 0;

  var $saveDeposit = $('#savings-deposit').on('click', function () {
    $saveBalance += parseInt($('#savings-amount').val());
    $("#savings-balance").text('$' + $saveBalance);
    $saveColor();
  })

  var $saveWithdraw = $('#savings-withdraw').on('click', function () {
    if (parseInt($('#savings-amount').val()) > $saveBalance) {
      alert('Insufficient fund.');
    } else {
      $saveBalance -= parseInt($('#savings-amount').val());
      $("#savings-balance").text('$' + $saveBalance);
    }
    $saveColor();
  })

  var $saveColor = function () {
    if ($saveBalance === 0) {
      $('#savings-balance').css('backgroundColor', 'red')
    } else {
      $('#savings-balance').css('backgroundColor', '#E3E3E3')
    }
  }

  $saveColor();

});
