$(document).ready(function() {
var temp = "",
  unit = "",
  locationUrl = "";
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          $("#prevision").html("Geolocation is not supported by this browser.");
      }
  }
  function showPosition(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      locationUrl = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + lon;
      getWeater(locationUrl);
  }


function getWeater(locationUrl) {
  $.ajax({
    type: 'GET',
    url: locationUrl,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    cache: false,
    data: {

      format: 'json'
    },
    success: function(data) {
      var city = data.name;
      var country = data.sys.country;
      var weather = data.weather;
      if (weather.length > 1) {
        // console.log("prevision: " + weather[0].main + " and " + weather[1].main);
        $("#prevision").html("Prevision: " + weather[0].main + " and " + weather[1].main);
      } else if (weather.length === 1){
        $("#prevision").html("Prevision: " + weather[0].main);
      }
      temp = data.main.temp;
      console.log(locationUrl);
      //console.log(temp);
      $("#temp").html(Math.round(temp));
      $("#location").html(city + ', ' + country);

      switch (weather[0].main) {
        case "Snow":
            $("body").css('background-image', 'url("https://static.pexels.com/photos/280204/pexels-photo-280204.jpeg")');
          break;
        case "Haze":
            $("body").css('background-image', 'url("https://upload.wikimedia.org/wikipedia/commons/1/18/CN_Tower_as_seen_from_skylon_tower%2C_Niagara_Falls.jpg")');
          break;
        case "Clouds":
            $("body").css('background-image', 'url("https://static.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg")');
          break;
        case "Clear":
            $("body").css('background-image', 'url("https://static.pexels.com/photos/518415/pexels-photo-518415.jpeg")');
          break;
        case "Fog":
            $("body").css('background-image', 'url("https://static.pexels.com/photos/5230/road-fog-foggy-mist.jpg")');
          break;
        case "Rain":
            $("body").css('background-image', 'url("https://static.pexels.com/photos/459451/pexels-photo-459451.jpeg")');
          break;
        case "Mist":
            $("body").css('background-image', 'url("https://images.pexels.com/photos/235734/pexels-photo-235734.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb")');
          break;

          // Extra SPACE for new background
        // case "":
        //     $("body").css('background-image', 'url("")');
        //   break;
        // case "":
        //     $("body").css('background-image', 'url("")');
        //   break;
        // case "":
        //     $("body").css('background-image', 'url("")');
        //   break;
        // case "":
        //     $("body").css('background-image', 'url("")');
        //   break;

        default:
          $("body").css('background-image', 'url("https://static.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg")');
      }
    }
  });
}

getWeater();
getLocation();

$("#tempUnit").click(function(){

  var unit = $("#tempUnit").text();
  var celcius = "&#176;C";
  var faren = "&#176;F";
  if (unit == celcius){
    console.log("unit");
    $("#tempUnit").html("&#176;F");
  } else {
    console.log("not working");
  }
});
});
