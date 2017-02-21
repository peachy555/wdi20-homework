var bank = {
  accounts: [
    {name: 'Banky McBankface', currentBalance: 1500},
    {name: 'Richard Branson', currentBalance: 1500000000}
  ],

  addAccount: function(newName,firstDeposit) {
    var newAccount = { name: newName, currentBalance: firstDeposit};
    this.accounts.push(newAccount);
  }

  bankStatement: function(accountID) {
    return 'Account Name: ' + accountID.name + '; Current Bank Balance: $' + accountID.currentBalance;
  }

  printBalance: function(name) {
  // checking for an account name
    this.accounts.forEach (function(accountID){ //using 'this' instead of 'bank.accounts' is more flexible and resistant to changes
      if (accountID.name === name) {
        console.log(bankStatement(accountID));
        }
      }
    )
    //if we get here, then we know that no account name was found
    return name + ' does not have a Javascript Bank account.'
  }

  deposit: function(name, newDeposit) {
    this.accounts.forEach (function(accountID){
      if (accountID.name === name) {
        accountID.currentBalance += newDeposit;

        console.log(bankStatement(accountID));
        }
      }
    )
    return 'Sorry you do not have an account at Javascript Bank'
  }

  withdrawal: function(name, newWithdrawal) {
    this.accounts.forEach (function(accountID){
      if (accountID.name === name) {
        //check for negative balance

        accountID.currentBalance -= newWithdrawal;

        console.log(bankStatement(accountID));

        }
      }
    )
    return 'Sorry you do not have an account at Javascript Bank'
  }

  transfer: function (senderName, recipientName,transferAmount) {
    withdrawal(senderName, transferAmount);
    deposit(recipientName,transferAmount);

  };
}
