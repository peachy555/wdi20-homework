var bank = {
  accounts: [
    {name: 'Banky McBankface', currentBalance: 1500},
    {name: 'Richard Branson', currentBalance: 1500000000}
  ],

  addAccount : function(newName,firstDeposit) {
    var newAccount = { name: newName, currentBalance: firstDeposit};
    this.accounts.push(newAccount);
  }
}

var printBalance = function(name) {
  for (var i = 0; i < bank.accounts.length; i++) {
    var accountID = bank.accounts[i];
    if (accountID.name === name) {
      console.log('Account Name: ' + accountID.name + '; Current Bank Balance: $' + accountID.currentBalance);
    // } else {
    //   console.log(name + ' does not have a Javascript Bank account.');
    }
  }
}

var deposit = function(name, newDeposit) {
  for (var i = 0; i < bank.accounts.length; i++) {
    var accountID = bank.accounts[i];
    if (accountID.name === name) {
      var newBalance = accountID.currentBalance + newDeposit;
      accountID.currentBalance = newBalance;

      console.log('Account Name: ' + accountID.name + '; Updated Bank Balance: $' + accountID.currentBalance )
    // } else if (accountID.name !== name) {
    //   console.log('Sorry you do not have an account at Javascript Bank');
    }//determine what else statement would remove undefined
  }
}

var withdrawal = function(name, newWithdrawal) {
  for (var i = 0; i < bank.accounts.length; i++) {
    var accountID = bank.accounts[i];
    if (accountID.name === name) {
      var newBalance = accountID.currentBalance - newWithdrawal;
      accountID.currentBalance = newBalance;

      console.log('Account Name: ' + accountID.name + '; Updated Bank Balance: $' + accountID.currentBalance )
    }
  }
}

var transfer = function (senderName, recipientName,transferAmount) {
  withdrawal(senderName, transferAmount);
  deposit(recipientName,transferAmount);
}
