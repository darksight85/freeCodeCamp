$(document).ready(function() {
var temp = "",
  unit = "";

function getWeater() {
  $.ajax({
    //url: 'https://fcc-weather-api.glitch.me/api/current?lat=45.2334415&lon=-72.214963',
    url: 'https://fcc-weather-api.glitch.me/api/current?lat=45.3841216&lon=-73.561984',
    data: {
      format: 'json'
    },
    success: function(data) {
      var city = data.name;
      var country = data.sys.country;
      var weather = data.weather;
      if (weather.length > 1) {
        console.log("prevision: " + weather[0].main + " and " + weather[1].main);
        $("#prevision").html("Prevision: " + weather[0].main + " and " + weather[1].main);
      } else if (weather.length === 1){
        $("#prevision").html("Prevision: " + weather[0].main);
      }
      temp = data.main.temp;
      //console.log(temp);
      $("#temp").html(Math.round(temp) + "&#176;C");
      $("#location").html(city + ', ' + country);

    }
  });
}

getWeater();

});
