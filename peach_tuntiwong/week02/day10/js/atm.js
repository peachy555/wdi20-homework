
$(document).ready(function(){

  window.checkingBalance = 0;
  window.savingsBalance = 0;

  var isChecking0Balance = function() {
    if (checkingBalance === 0) {
      $('#checking-balance').css('background-color', 'red');
    } else if (checkingBalance !== 0) {
      $('#checking-balance').css('background-color', '#E3E3E3');
    }
  }

  var isSavings0Balance = function() {
    if (savingsBalance === 0) {
      $('#savings-balance').css('background-color', 'red');
    } else {
      $('#savings-balance').css('background-color', '#E3E3E3');
    }
  }

  isChecking0Balance();
  isSavings0Balance();

  var checkingBalanceUpdate = function(amount) {
    checkingBalance += amount;
    $("#checking-balance").html('$'+checkingBalance);
    isChecking0Balance();
  }

  var savingsBalanceUpdate = function(amount) {
    savingsBalance += amount;
    $("#savings-balance").html('$'+savingsBalance);
    isSavings0Balance();
  }

  // Checking Deposit
  $(document).on("click", "#checking-deposit", function() {
    var depositAmount = parseInt($("#checking-amount").val());
    checkingBalanceUpdate(depositAmount);
  });

  // Savings Deposit
  $(document).on("click", "#savings-deposit", function() {
    var depositAmount = parseInt($("#savings-amount").val());
    savingsBalanceUpdate(depositAmount);
  });


  // Checking Withdraw
  $(document).on("click", "#checking-withdraw", function() {
    var withdrawAmount = parseInt($("#checking-amount").val());
    if (checkingBalance >= withdrawAmount) {
      checkingBalanceUpdate(-withdrawAmount)
    } else if ((checkingBalance + savingsBalance) >= withdrawAmount) {
      savingsBalanceUpdate(-(withdrawAmount - checkingBalance));
      checkingBalanceUpdate(-checkingBalance);
    }
  });

  // savings Withdraw
  $(document).on("click", "#savings-withdraw", function() {
    var withdrawAmount = parseInt($("#savings-amount").val());
    if (savingsBalance >= withdrawAmount) {
      savingsBalanceUpdate(-withdrawAmount);
    } else if ((checkingBalance + savingsBalance) >= withdrawAmount) {
      checkingBalanceUpdate(-(withdrawAmount - savingsBalance));
      savingsBalanceUpdate(-savingsBalance);
    }
  });


});
