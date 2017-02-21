bank = {
accounts:[
  {owner:'Jared', acctName: "savings", balance: 120},
  {owner:'Fred', acctName: "cheque", balance: 2000},
  {owner:'Alice', acctName: "offset", balance: 30000}
],
addAccount : function(newOwner,AccountType,funds){
  var newAccount = {owner:newOwner,acctName:AccountType, balance:funds};
  this.accounts.push(newAccount);
},
  printBankBalance: function(){
    this.accounts.forEach(function(account){
        console.log(account.owner + "'s " + account.acctName + ' account balance is $' + account.balance);
      }
    );

    depositFunds = function(owner,deposit){
      for(var i = 0; i < this.accounts.length; i++){
        if (this.accounts[i].owner == owner)
          this.accounts[i].balance +=deposit;
          console.log('the new balance of '+ this.accounts[i].owner + 'is $'+this.accounts[i].balance)
      }
    }
  }
}


bank.addAccount('Kate','savings',50);
bank.printBankBalance();
depositFunds('Kate', 5);

// yourArray.forEach( function (arrayItem)
// {
//     var x = arrayItem.prop1 + 2;
//     alert(x);
// });
//

//       if (bank.accounts[i].owner == owner)
//         bank.accounts[i].balance = bank.accounts[i].balance + Deposit;


// function find(haystack, needle) {
//   if (haystack.label === needle) return haystack;
//   for (var i = 0; i < haystack.subs.length; i ++) {
//     var result = find(haystack.subs[i], needle);
//     if (result) return result;
//   }
//   return null;
// }
