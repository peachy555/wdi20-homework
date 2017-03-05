// var recipe = {
//   title : "Mole",
//   servings : 2,
//   ingredients : [{name:'cinnamon'},{name:'cumin'},{name:'cocoa'}]
//
// }
// console.log(recipe.title);
// console.log('Servings: ' + recipe.servings);
// console.log('Ingredients:');
// for (var i = 0; i < recipe.ingredients.length; i++) {
//     console.log(recipe.ingredients[i]);
// }


// var books = [
//   {
//    title:"Arrays for Dummies",
//    author:"Foo",
//    alreadyRead:false
//   },
//   {
//     title:"Javascript for Dummies",
//     author:"Bar",
//     alreadyRead:true
//   },
//   {
//     title:"Objects for Dummies",
//     author:"Foobar",
//     alreadyRead:true
//   }
// ];
//
// var bookName = function (book) {
//   return book.title + ' by ' + book.author;
// };
//
// for (var i = 0; i <books.length; i++){
//   var book = books[i];
//   if (book.alreadyRead){
//    console.log('I have already read '+ bookName(book));
//   }else{
//    console.log('I need to read ' + bookName(book));
//   }
// }


movie = {
  title: 'Point Break',
  duration: 112,
  stars: [
    'Patrick Swazye',
    'Keano Reeves',
    'Gary Busey',
  ]

  function printMovie(movie) {
      console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
      console.log('It stars ' + movie.stars.join(', '));
  }
  printMovie(myFavMovie);
}
