// Bank

var getAccountIndex = function(user, accList) {
  for (i in accList) {
    if (user === accList[i].name) {
      return i;
    }
  }
  return -1;
}

var bank = {
    account: [
      {name: 'Jack', balance: 1000},
      {name: 'Luke', balance: 2000},
      {name: 'Xander', balance: 1500}
    ],
    // sum money from all accounts
    sumMoney: function(){
      var sum = 0;
      this.account.forEach(function(acc){
        sum += acc.balance;
      });
      console.log('Sum from all accounts: ' + sum);
    },
    // add new account
    addAccount: function(newUser, deposit) {
      var newAccount = { name: newUser, balance: deposit};
      this.account.push(newAccount);
    },
    // deposit and withdraw money
    depositWithdraw: function(name, amount) { // positive 'amount' = deposit; negative 'amount' = withdraw
      var index = getAccountIndex(name, this.account);
      if (index === -1) {
        console.log('No existing user.');
      } else {
        if (amount<0) { // Withdraw
          if (this.account[index].balance > -amount) { //Check balance
            this.account[index].balance += amount;
            console.log(name + ' withdrawn: ' + -amount);
          } else { // Not enough money for withdrawal
            console.log('Not enough balance.');
          }
        } else { // deposit
          this.account[index].balance += amount;
          console.log(name + ' deposit: ' + amount);
        }
      }
    },
    // transfer money between 2 accounts
    transfer: function(fromAccName, toAccName, amount) {
      var accIndex = [getAccountIndex(fromAccName, this.account), getAccountIndex(toAccName, this.account)];
      if (accIndex.indexOf(-1) === -1) {
        if (this.account[accIndex[0]].balance >= amount) { // if fromAccount have enough balance
          this.depositWithdraw(this.account[accIndex[0]].name, -amount); // take out money from fromAcc
          this.depositWithdraw(this.account[accIndex[1]].name, amount); // to toAcc
        } else {
          console.log('Not enough balance.');
        }
      } else {
        console.log('Wrong input account name.');
      }
    }
  }





//----------------------------------------------------------------------------
// Cash Register

var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

var cashRegister = function(cart) {
  var sum = 0; // Initilize sum of price
  var nameList = Object.keys(cart); // Get list of property names, so we can use to get the price
  nameList.forEach(function(item){
    sum += parseFloat(cart[item]); // Actual calculation
  })
  return sum;
}


//----------------------------------------------------------------------------

// Credit Card Validation
// Initialize errorMessage message array
var errorMessage = [];


// Cut remove '-' from card number; return in sections of 4
var cutSection = function(cardNum, section) {
  switch (section) {
    case 1:
      return cardNum.slice(0,4);
      break;
    case 2:
      return cardNum.slice(5,9);
      break;
    case 3:
      return cardNum.slice(10,14);
      break;
    case 4:
      return cardNum.slice(15,19);
      break;
  }
}

// Combind card number and convert to integer
var getCardNum = function(cardNum) {
  cardStr = cutSection(cardNum, 1) + cutSection(cardNum, 2) + cutSection(cardNum, 3) + cutSection(cardNum, 4);
  return parseInt(cardStr);
}

// Make sure that card number is integer
var checkInputType = function(cardInput) {
  if (Number.isInteger(cardInput)) {
    return cardInput;
  } else {
    return getCardNum(cardInput);
  }
}

// Check card length
var checkCardLength = function(num) {
  if (String(num).length === 16) {
    return true;
  } else {
    errorMessage.push('Wrong_length');
  }
}

// Card validity conditions
// Check different digits
var isAtLeast2digits = function(num) {
  var str = String(num);
  for (i in str) {
    if (str[0] !== str[i]) {
      return true;
    }
  }
  errorMessage.push('Single_digit');
  return false;
}

// Check if the last digit is even
var isEven = function(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    errorMessage.push('Odd_card_number');
  }
}

// Sum card number
var sumCardNumber = function(num) {
  var sum = 0;
  var str = String(num);
  for (i in str) {
    sum += parseInt(str[i]);
  }
  return sum;
}

// Check sum of card number
var checkSum = function (num) {
  if (sumCardNumber(num)>16) {
    return true;
  } else {
    errorMessage.push('Sum_less_than_16');
    return false;
  }
}

// validate card number
var validateCreditCard = function(input) {
  var validCard = new Object;
  var valid = false;
  var cardNum = checkInputType(input); //return as integer

  //list of requirements:
  //16 digits numbers
  //(String(cardNum).length === 16)

  //at least 2 different digits
  //isAtLeast2digits(cardNum)

  //final digit must be even
  //cardNum % 2 == 0

  //sum of all digits > 16
  //sumCardNumber(cardNum)

  if (checkCardLength(cardNum) && isAtLeast2digits(cardNum) && isEven(cardNum) && checkSum(cardNum)) { // Check conditions
    validCard.valid = true;
    validCard.number = input;
  } else {
    validCard.valid = false;
    validCard.number = input;
    validCard.error = errorMessage;
  }

  return validCard;
}
