$(document).ready(function() {
var temp = "",
  unit = "";

function getWeater() {
  $.ajax({
    url: 'https://fcc-weather-api.glitch.me/api/current?lat=45.3841216&lon=-73.561984',
    data: {
      format: 'json'
    },
    success: function(data) {
      var city = data.name;
      var country = data.sys.country;
      temp = data.main.temp;
      console.log(temp);
      $("#temp").html(Math.round(temp) + "&#176;C");
      $("#location").html(city + ', ' + country);

    }
  });
}

getWeater();

});
