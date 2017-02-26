
$(document).ready(function(){

  var balance = {
    checking: 0,
    savings: 0
  };

  var isCheckingEmpty = function() {
    if (balance.checking === 0) {
      $('#checking-balance').css('background-color', 'red');
    } else if (balance.checking !== 0) {
      $('#checking-balance').css('background-color', '#E3E3E3');
    }
  }

  var isSavingsEmpty = function() {
    if (balance.savings === 0) {
      $('#savings-balance').css('background-color', 'red');
    } else {
      $('#savings-balance').css('background-color', '#E3E3E3');
    }
  }

  isCheckingEmpty();
  isSavingsEmpty();


  var balanceUpdate = function(amount, account) {

    if (account === 'checking') {
      balance.checking += amount;
      $("#checking-balance").html('$'+balance.checking);
      isCheckingEmpty();
    } else if (account === 'savings') {
      balance.savings += amount;
      $("#savings-balance").html('$'+balance.savings);
      isSavingsEmpty();
    } else {
      console.log("Error balanceUpdate()");
    }
  }


  // Checking Deposit
  $(document).on("click", "#checking-deposit", function() {
    var account = $(this).parent().attr('id');
    var inputBoxName = "#" + account + "-amount"
    var amount = parseInt($(inputBoxName).val());
    balanceUpdate(amount, account);
  });

  // Savings Deposit
  $(document).on("click", "#savings-deposit", function() {
    var account = $(this).parent().attr('id');
    var inputBoxName = "#" + account + "-amount"
    var amount = parseInt($(inputBoxName).val());
    balanceUpdate(amount, account);
  });

  var getAccountName = function(currentAcc) {
    var account = {
      current: currentAcc,
    };

    if (account.current === 'savings') {
      account.backup = 'checking';
    } else {
      account.backup = 'savings';
    }
    return account;
  }

  var withdraw = function(currentAcc) {
    var account = getAccountName(currentAcc);
    var withdrawAmount = parseInt($("#" + account.current + "-amount").val());
    if (balance[account.current] >= withdrawAmount) {
      console.log('first condition');
      balanceUpdate(-withdrawAmount, account.current)
    } else if ((balance[account.current] + balance[account.backup]) >= withdrawAmount) {
      console.log('second condition');
      balanceUpdate(-(withdrawAmount - balance[account.current]), account.backup);
      balanceUpdate(-balance[account.current], account.current);
    }
  }

  // Checking Withdraw
  $(document).on("click", "#checking-withdraw", function() {
    var currentAcc = $(this).parent().attr('id');
    withdraw(currentAcc);
  });

  // savings Withdraw
  $(document).on("click", "#savings-withdraw", function() {
    var currentAcc = $(this).parent().attr('id');
    withdraw(currentAcc);
  });


});
