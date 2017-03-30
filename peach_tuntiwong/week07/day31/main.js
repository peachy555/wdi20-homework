$(document).ready(function(){
  // Movie searching stuffs
  // Display movie_div
  var displayMovie = function(movie_obj) {
    var movie_div = $("<div>").addClass("movie_item").attr("id", movie_obj.imdbID);
    $("#movie_display").append(movie_div);
    movie_div.append($("<h2>").html(movie_obj.Title));
    var img = $("<img>").attr("src", movie_obj.Poster).data("movie-id", movie_obj.imdbID);
    movie_div.append(img);
  }

  // Searching for movie according to user inputs
  var searchMovie = function() {
    $("#movie_display").empty();

    var search_text = $("#search_field").val();
    var search_topic = $("#search_topic").val();

    $.ajax({
      url: "http://www.omdbapi.com/?s=a&y=2016&type=movie",
      method: "GET",
      success: function(data){
        data.Search.forEach(function(el){
          $.ajax({
            url: "http://www.omdbapi.com/?i="+el.imdbID,
            method: "GET",
            success: function(data2){
              (data2[search_topic].indexOf(search_text) >= 0) ? displayMovie(data2) : null;
            }
          });
        })
      }
    });
  }

  // Eventlisteners for single search
  // Enter key
  $(document).keypress(function(e) {
    e.which == 13 ? searchMovie() : null;
  });

  // Submit button
  $("#search_submit").on("click", function(){
    searchMovie();
  });

  // Listing all movies (RHS button)
  $("#search").on("click", function(){
    $("#movie_display").empty();
    $.ajax({
      url: "http://www.omdbapi.com/?s=a&y=2016&type=movie",
      method: "GET",
      success: function(data){
        data.Search.forEach(function(el){
          displayMovie(el);
        })
      }
    });
  });

  // Get movie plot when click on poster image
  $(document).on("click", "img", function(){
    var id = $(this).data("movie-id");
    $.ajax({
      url: "http://www.omdbapi.com/?i=" + id,
      method: "GET",
      success: function(data) {
        $("#"+ data.imdbID).children().is("p") == false ?
          $("#"+ data.imdbID).append($("<p>").html(data.Plot)) : null;
      }
    });
  });

  // Semantics stuffs
  $('.dropdown')
    .dropdown({
      // you can use any ui transition
      transition: 'drop'
    });

  // Empty search field, blur/focus
  $("#search_field").on("focus", function() {
    this.value == this.defaultValue ? this.value='' : null;
  });

  $("#search_field").on("blur", function() {
    this.value == '' ? this.value=this.defaultValue : null;
  });
});
