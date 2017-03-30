var map;

  function initMap() {
    // Set position
    var chicago = new google.maps.LatLng(41.850, -87.650);

    // Set map initial conditions
    map = new google.maps.Map(document.getElementById('map'), {
      center: chicago,
      zoom: 3
    });

    // Do what when get clicked
    google.maps.event.addListener(map, "click", function (e) {
      onMapClickAction(e.latLng);

    });
  }

  var onMapClickAction = function(latLng) {
    var weatherApiURL = "http://api.openweathermap.org/data/2.5/weather";
    var API_KEY = "edce9bc5fc01de71dcf67930f74da448";

    $.ajax({
      url: weatherApiURL,
      method: "GET",
      dataType: "JSON",
      data: {
        APPID: API_KEY,
        lat: latLng.lat(),
        lon: latLng.lng()
      },
      success: function (data) {
        console.log("clicked, ajax successful", map);

        var coordInfoWindow = new google.maps.InfoWindow();
        coordInfoWindow.setContent( createInfoWindowContent(data) );
        coordInfoWindow.setPosition(latLng);
        coordInfoWindow.open(map);

      },
      error: function(e) {
        console.log(e);
      }
    });

  };

  var TILE_SIZE = 256;

  // Display Content ------------------------------------------------------------------
  function createInfoWindowContent(data) {
    var locationText = "";
    if( !data.name || !data.sys.country ) {
      locationText = "Weather in Neverland";
    } else {
      locationText = "Weather in " + data.name + ", " + data.sys.country;
    }

    directionIndex = Math.ceil((data.wind.deg-22.5)/45);
    directionArr=["NE", "E", "SE", "S", "SW", "W", "NW", "N"];

    return [
      locationText,
      "Temperature: " + (data.main.temp-273.15).toFixed(2) + "°C",
      data.weather["0"].description,
      "Min: " + (data.main.temp_min-273.15).toFixed(2) + "°C, Max: " + (data.main.temp_max-273.15).toFixed(2),
      "Humidity: " + data.main.humidity + "%",
      "Wind speed:" + data.wind.speed + "m/s, direction: " + directionArr[directionIndex],
      "Coordinate: [lon: " + data.coord.lon + " lat: " + data.coord.lat + "]"
    ].join('<br>');
  }
  //----------------------------------------------------------------------------

  // The mapping between latitude, longitude and pixels is defined by the web
  // mercator projection.
  function project(latLng) {
    var siny = Math.sin(latLng.lat() * Math.PI / 180);

    // Truncating to 0.9999 effectively limits latitude to 89.189. This is
    // about a third of a tile past the edge of the world tile.
    siny = Math.min(Math.max(siny, -0.9999), 0.9999);

    return new google.maps.Point(
        TILE_SIZE * (0.5 + latLng.lng() / 360),
        TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)));
  }
