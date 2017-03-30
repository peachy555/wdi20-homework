$(document).ready(function(){
  var popup_height = $("#popup_display").css("height");
  $( "#popup_display" ).css( "top", ((window.innerHeight-popup_height)/2) );
  // $("#map").on("click", function (e) {
  //   console.log("in click");
  //   //lat and lng is available in e object
  //   var a = google.maps.latLng;
  //   var latLng = e.latLng;
  //   debugger
  //   // onMapClickAction(latLng);
  //   getWeatherData(latLng);
  // });
});
