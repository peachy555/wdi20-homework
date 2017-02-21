
var revengeOfBadger = {

  studentClaps: {
    Peach: 4,
    Kevin: 2,
    Petr:  1,
    Jin:   4,
    Diego: 1,
    Hen:   3,
    Jared: 0
  },

  shortlist: [],

  getCandidates: function(){

    // you could also use Object.keys(), but it's harder to read:
    //
    // var keys = Object.keys(this.studentClaps);
    // for (var i = 0; i < keys.length; i++) {
    //   this.studentClaps[ keys[i] ]
    // }

    for(studentName in this.studentClaps){
      if( this.studentClaps[ studentName ] > 2 ){
        this.shortlist.push( studentName );  // add the name to the end of our shortlist array if they've clapped enough
      }
    }
    return this.shortlist.length;
  },

  drawWinner: function(){

    this.shortlist = []; // reset shortlist to empty, so we don't get wrong answers if we call this function multiple times

    var winner = "Badger";   // Set Badger as the default (nice one, Peach)

    var numberOfCandidates = this.getCandidates();  // Call this function to fill the shortlist, and store its return value

    if( numberOfCandidates > 0 ){
      // If we have any candidates, choose a random one from the shortlist:
      // First, get a random integer betweeen 0 and the last element of the numberOfCandidates array
      // Second, use that random values as the index into our shortlist array, to get a random student
      var winnerIndex = Math.floor(Math.random() * numberOfCandidates);
      winner = this.shortlist[ winnerIndex ];
    }

    console.log("Lucky " + winner + ", you'll be doing the warmup today.");

    return winner;
  }

};

revengeOfBadger.drawWinner();
