// JavaScript Bank
//
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
//
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.

var bankAccounts = [
  { name: 'Jean',
    balance: 10000
  },
  { name: 'Pierre',
    balance: 100000
  },
  { name: 'Sebastien',
    balance: 1000000
  }
];

// Total sum of money
var totalSum = function (accounts) {
  var total = 0;
  for (var i = 0; i < accounts.length; i++) {
    total += accounts[i].balance;
  }
  console.log(total);
};

totalSum(bankAccounts);


// Add new account
var addAccount = function (newName, newBalance) {
  bankAccounts.push({name: newName, balance: newBalance});
  console.log(bankAccounts);
  console.log('A new account is created.');
}

addAccount('Dominique', 1000)


// Deposit
var deposit = function (name, depositAmount) {
  for (var i = 0; i < bankAccounts.length; i++) {
    if (name === bankAccounts[i].name) {
      bankAccounts[i].balance += depositAmount;
      console.log(bankAccounts[i]);
      console.log('A $' + depositAmount + ' deposit was made.');
    }
  }
};

deposit('Dominique', 1000)


// Withdrawal
var withdrawal = function (name, withdrawAmount) {
  for (var i = 0; i < bankAccounts.length; i++) {
    if (name === bankAccounts[i].name && bankAccounts[i].balance < withdrawAmount) {
      console.log('Access denied: Insufficient fund.');
    } else if (name === bankAccounts[i].name && bankAccounts[i].balance >= withdrawAmount) {
      bankAccounts[i].balance -= withdrawAmount;
      console.log(bankAccounts[i]);
      console.log('A $' + withdrawAmount + ' withdrawal was made.');
    }
  }
}

withdrawal('Dominique', 3000)
