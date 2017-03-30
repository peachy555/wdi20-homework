var getWeatherData = function(lat, lng) {
  var weatherApiURL = "api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng;
  var API_KEY = "edce9bc5fc01de71dcf67930f74da448";

  $.ajax({
    url: weatherApiURL,
    method: "GET",
    dataType: "JSON",
    data: {
      api_key: API_KEY
    },
    success: displayRegionalWeather,
    error: function(e) {
      console.log(e);
    }
  });

  // data = {"coord":{"lon":139,"lat":35},
  //   "sys":{"country":"JP","sunrise":1369769524,"sunset":1369821049},
  //   "weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
  //   "main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},
  //   "wind":{"speed":7.31,"deg":187.002},
  //   "rain":{"3h":0},
  //   "clouds":{"all":92},
  //   "dt":1369824698,
  //   "id":1851632,
  //   "name":"Shuzenji",
  //   "cod":200};

  // displayRegionalWeather(data);
}

var displayRegionalWeather = function(data) {
  $("#popup_transparent_background").show();
  $("#popup_display").show();

  //
  $(".forcast_element.country").html( "Weather in " + data.name + ", " + data.sys.country );
  $(".forcast_element.temp_curr").html( "Temperature: " + data.main.temp + "°C" );
  $(".forcast_element.temp_range").html( "Min: " + data.main.temp_min + "°C, Max: " + data.main.temp_max );
  $(".forcast_element.weather_status").html( data.main.description );
  // $(".forcast_element.rain").html( "Rain volume:" + data.rain.3h + "L/3hrs");
  $(".forcast_element.humidy").html( "Humidity: " + data.main.humidity + "%" );
  $(".forcast_element.wind").html( "Wind speed:" + data.wind.speed + "m/s, direction" + data.wind.deg);
  $(".forcast_element.coor").html( "Coordinate: [lon: " + data.coord.lon + " lat: " + data.coord.lat );
}

$(document).on("click", $("i"), function() {
  $("#popup_transparent_background").hide();
  $("#popup_display").hide();
});
