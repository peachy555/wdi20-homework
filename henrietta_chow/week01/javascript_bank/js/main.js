var bank = {
  accounts: [
    {name: 'Banky McBankface', currentBalance: 1500},
    {name: 'Richard Branson', currentBalance: 1500000000}
  ],

  addAccount: function(newName,firstDeposit) {
    var newAccount = { name: newName, currentBalance: firstDeposit};
    this.accounts.push(newAccount);
  }
}

var bankStatement = function(accountID) {
  return 'Account Name: ' + accountID.name + '; Current Bank Balance: $' + accountID.currentBalance;
}

var printBalance = function(name) {
  // checking for an account name
  bank.accounts.forEach (function(accountID){
    if (accountID.name === name) {
      console.log(bankStatement(accountID));
    // } else {
    //   console.log(name + ' does not have a Javascript Bank account.');
      }
    }
  )

  //if we get here, then we know that no account name was found
  return name + ' does not have a Javascript Bank account.'
}
var deposit = function(name, newDeposit) {
  bank.accounts.forEach (function(accountID){
    if (accountID.name === name) {
      var newBalance = accountID.currentBalance + newDeposit;
      accountID.currentBalance = newBalance;

      console.log(bankStatement(accountID));
    // } else if (accountID.name !== name) {
    //   console.log('Sorry you do not have an account at Javascript Bank');
    //determine what else statement would remove undefined
      }
    }
  )
  return 'Sorry you do not have an account at Javascript Bank'
}

var withdrawal = function(name, newWithdrawal) {
  bank.accounts.forEach (function(accountID){
    if (accountID.name === name) {
      var newBalance = accountID.currentBalance - newWithdrawal;
      accountID.currentBalance = newBalance;

      console.log(bankStatement(accountID));

      }
    }
  )
  return 'Sorry you do not have an account at Javascript Bank'
}


var transfer = function (senderName, recipientName,transferAmount) {
  withdrawal(senderName, transferAmount);
  deposit(recipientName,transferAmount);

};
