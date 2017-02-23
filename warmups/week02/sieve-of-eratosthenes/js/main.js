
var sieve = {

  numbers: [],
  counter: 0,

  calculatePrimes: function( max ){

    this.counter = 0;  // reset counter (in case the function has already been run)

    // initialise all numbers in range to true (assume they're all primes)
    for( var i = 0; i < max; i++ ){
      this.numbers[i] = true;
    }

    // iterate over all the numbers in our range
    for( var i = 2; i < this.numbers.length; i++ ){

      var currentNumber = i;   // just for readability

      for( var j = currentNumber + 1; j < this.numbers.length; j++ ){

        // if we haven't already processed this number, AND it's divisible by currentNumber...
        if( (this.numbers[j] === true) && (j % currentNumber === 0) ){
          // ...then it's not a prime
          this.numbers[j] = false;
        }
        this.counter++;   // keep track of how many iterations we've done
      } // inner for
    } // outer for

    this.printPrimes(this.numbers);
  }, // calculatePrimes()



  calculatePrimesEfficient: function( max ){

    this.counter = 0;  // reset counter (in case the function has already been run)

    // initialise all numbers in range to true (assume they're all primes)
    for( var i = 0; i < max; i++ ){
      this.numbers[i] = true;
    }

    // iterate over all the numbers in our range
    for( var i = 2; i < this.numbers.length; i++ ){

      var currentNumber = i;

      // In this version, we jump forward by currentNumber on each iteration of the loop (since that will
      // take us straight to the next multiple of currentNumber) and simply set it to false (since its a multiple,
      // therefore not a prime)
      for( var j = currentNumber + currentNumber; j < this.numbers.length; j += currentNumber ){
        this.numbers[j] = false;
        this.counter++;
      } // inner for
    } // outer for

    this.printPrimes( this.numbers );

  }, // calculatePrimes()


  printPrimes: function ( primes ) {

    // Output results, i.e. numbers that are prime, by generating an array of them
    // - this is so we can print them all on one line, separated by commas ( by using .join(', ') )
    // instead of
    var primeList = [];
    for( var i = 1; i < primes.length; i++ ){
      if( primes[i] === true) {
        primeList.push(i);   // add the index (which is the prime in question) to our primes list
      }
    }

    console.log('Primes found: ', primeList.length);
    console.log('Primes:', primeList.join(', ') );
  }

};


sieve.calculatePrimes(1000);
console.log('iterations: ', sieve.counter)

sieve.calculatePrimesEfficient(1000);
console.log('iterations: ', sieve.counter)

// Notice the difference in the number of iterations!
