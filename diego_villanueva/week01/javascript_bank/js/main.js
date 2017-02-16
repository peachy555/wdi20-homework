// In this homework, you'll create a basic bank in Javascript. The bank has many accounts
//  and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a
// method that will return the total sum of money in the accounts. It also needs an addAccount
// method that will enroll a new account at the bank and add it to the array of accounts.
// There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw
//  from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may
// also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the
// methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

bank = {
  accounts:[
    {name: 'John Smith', accBalance: 300},
    {name: 'Mary Taylor', accBalance: 78340592},
    {name: 'Tony Sinclair', accBalance: 32}
  ],
  addAccount: function(newName, initialBalance){
    var newClient = {name: newName, accBalance: initialBalance};
    this.accounts.push(newClient);
  },
  printSummary: function(){
    this.accounts.forEach(function(account){
        console.log('Customer: ' + account.name + ', Current Balance: $' + account.accBalance);
    })
  },
  deposit: function(client, amount){
    for (i=0; i<bank.accounts.length; i++){
      if (bank.accounts[i].name === client){
        bank.accounts[i].accBalance = bank.accounts[i].accBalance + amount;
        console.log('The new account balance of '+bank.accounts[i].name+' is $'+bank.accounts[i].accBalance);
        break;
      }

    }
  },
  withdraw: function(client, amount){
    for (i=0; i<bank.accounts.length; i++){
      if (bank.accounts[i].name === client){
        if ((bank.accounts[i].accBalance - amount)<0){
          console.log('You cant have a negative balance, your account balance is: $'+ bank.accounts[i].accBalance );
          break;
        } else {
          bank.accounts[i].accBalance = bank.accounts[i].accBalance - amount;
          console.log('The new account balance of '+bank.accounts[i].name+' is $'+bank.accounts[i].accBalance);
        }
      }
    }
  },
  transfer: function(client1,client2,amount){
    this.withdraw(client1,amount);
    this.deposit(client2,amount);
    console.log('Transfered succesful from '+ client1 +' to '+client2);
  }
};

console.log('************');
console.log('test story');
console.log('************');

console.log('**Print Summary of all accounts');
bank.printSummary();

console.log('');
console.log('**Add a new account for Miriam Green, with $500');
bank.addAccount('Miriam Green', 500);
console.log('');
console.log('**Print Summary of all accounts');
bank.printSummary();

console.log('');
console.log('**Make a deposit of $100 to Miriam Green');
bank.deposit('Miriam Green', 100);
console.log('');
console.log('**Print Summary of all accounts');
bank.printSummary();

console.log('');
console.log('**John Smith withdraws $500');
bank.withdraw('John Smith', 500);
console.log('');
console.log('**Oops, he doesnt have enough money, lets try 200');
console.log('');
console.log('**John Smith withdraws $200');
bank.withdraw('John Smith', 200);
console.log('');
console.log('**Print Summary of all accounts');
bank.printSummary();

console.log('');
console.log('**Transfer $10 from Tony Sinclair to Miriam Green');
bank.transfer('Tony Sinclair', 'Miriam Green', 10);
console.log('');
console.log('**Print Summary of all accounts');
bank.printSummary();
