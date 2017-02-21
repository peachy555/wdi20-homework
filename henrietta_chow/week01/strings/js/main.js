var drEvil = function( amount ) {
  var amount;

  if( amount === 1000000 ) {
    console.log( amount + ' dollars (pinky)');
  } else {
  console.log( amount + ' dollars' );
  }
}

drEvil(10);
drEvil(100);
drEvil(1000000);

var mixUp = function( str1, str2 ) {

  var newstr1 = str2.slice(0,2);
  var newstr2 = str1.slice(2);
  var newstr4 = str2.slice(2);
  var newstr3 = str1.slice(0,-1);

  console.log( newstr1 + newstr2 + ' ' + newstr3 + newstr4 );

}

mixUp('mix', 'pod');
mixUp('dog', 'dinner');

//fixStart needs looking at
var fixStart = function( str ) {
  var str;
  var i;
  var re;
  var newstr;

  for( i = 0; i < str.length; i++) {
  // re = str[0];
  // newstr = str.replace(re, '*');

  console.log('HELLO');
  }
}

fixStart('babble');

var verbing = function( str ) {
  var str;
  if ( str.length >= 3 && str.slice(-3) === 'ing' ){
    console.log( str + 'ly' );
  } else if ( str.length >= 3 ) {
    console.log( str + 'ing' );
  } else if ( str.length < 3 ) {
    console.log( str );
  }
}

verbing('swim');
verbing('sing');
verbing('run');

var notBad = function( str ) {
  var str;
  if (str.startsWith ( 'not' ) && str.endsWith ( 'bad' )) {
    console.log( 'change statement' );
  } else {
    console.log( str );
  }
}

notBad('JavaScript is seriously not that bad.');
