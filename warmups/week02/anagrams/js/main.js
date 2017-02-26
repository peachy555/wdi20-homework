
var anagramChecker = {

  anagrams: [],  // Empty array for our matching candidates

  customSort: function (word) {
   // Our trick will be to use the Array.sort method, in conjunction with String.split and Array.join. If we sort the characters of a word's anagram, the word and the anagram will be ===. The problem is: (1) we cannot sort a string, so we have to 'split' it into an array of characters; (2) we can't compare two arrays to see if the elements within those arrays match, since one array will never === another array (since they are different JavaScript objects), so we need to convert the sorted array of characters back into a string before comparing them, using .toString(); note that .join('') would have the same effect here.

    // Longer version with temporary variable
    // var temp = str.split('');
    // temp = temp.sort();
    // temp = temp.join();
    // return temp;

    // One-liner with chaining of functions, each new functions acting on the return value of the previous
    return word.split('').sort().toString();
  },

  checkForAnagrams: function( word, candidateWords ){

    word = word.toLowerCase();

    // Get a sorted version of the main word, so we don't have the computational
    // expense of running our customSort() on it each time we compare it to our
    // current array element, inside the loop.
    word = this.customSort( word );

    for (var i = 0; i < candidateWords.length; i++) {

      // process the current word in the array we're iterating over, lower-cased first
      var candidate = this.customSort( candidateWords[i].toLowerCase() );

         // compare the sorted and re-joined version of the words
      if( candidate === word  ){
         // optional checking for duplicates in the above conditional test: && !this.anagrams.includes( wordArray[i] )){
          this.anagrams.push( candidateWords[i] );
      }

    } //for each word

    return this.anagrams;
  }

};

console.log('Expecting: ["inlets", "netsil"]');
console.log( anagramChecker.checkForAnagrams('listen', ["enlists", "google", "inlets", "banana", "netsil"]) );
