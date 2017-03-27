$(document).ready(function(){
  // Movie searching stuffs

  // Display movie_div
  var displayMovie = function(json_obj) {
    var movie_div = $("<div>").addClass("movie_item").attr("id", json_obj.imdbID);
    $("body").append(movie_div);
    movie_div.append($("<h2>").html(json_obj.Title));
    var img = $("<img>").attr("src", json_obj.Poster).data("movie-id", json_obj.imdbID);
    movie_div.append(img);
  }

  // Searching for movie according to user inputs
  var searchMovie = function() {
    var search_text = $("#search_field").val();
    var search_topic = $("#search_topic").val();

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4) {
        var json_response = JSON.parse(xhr.responseText);
        json_response.Search.forEach(function(el) {

          // Calling another AJAX for more details for search topics
          var xhr2 = new XMLHttpRequest();

          xhr2.onreadystatechange = function(){
            if(xhr2.readyState == 4) {
              var json_response2 = JSON.parse(xhr2.responseText);
              // Search according to search_topic and user's input text (case sensitive)
              if(json_response2[search_topic].indexOf(search_text) >= 0) {
                displayMovie(json_response2);
              }
            }
          };
          xhr2.open("GET", "http://www.omdbapi.com/?i="+el.imdbID);
          xhr2.send();
        });
      }
    };
    xhr.open("GET", "http://www.omdbapi.com/?s=a&y=2016&type=movie");
    xhr.send();
  };

  // Eventlisteners for single search
  // Enter key
  $(document).keypress(function(e) {
    if(e.which == 13) {
      searchMovie();
    }
  });

  // Submit button
  $("#search_submit").on("click", function(){
    searchMovie();
  });

  // Listing all movies (RHS button)
  $("#search").on("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        var json_response = JSON.parse(xhr.responseText);
        json_response.Search.forEach(function(el) {
          displayMovie(el);
        });
      }
    };
    xhr.open("GET", "http://www.omdbapi.com/?s=a&y=2016&type=movie");
    xhr.send();
  });

  // Get movie plot when click on poster image
  $(document).on("click", "img", function(){
    var id = $(this).data("movie-id");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4) {
        var json_response = JSON.parse(xhr.responseText);
        var plot = $("#"+ json_response.imdbID).append($("<p>").html(json_response.Plot));
      }
    };

    xhr.open("GET", "http://www.omdbapi.com/?i=" + id);
    xhr.send();
  });

  // Semantics stuffs
  $('.dropdown')
    .dropdown({
      // you can use any ui transition
      transition: 'drop'
    });

});
