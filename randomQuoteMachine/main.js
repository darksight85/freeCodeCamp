$(document).ready(function() {
    $(".newQuote").on("click", function(){
      event.preventDefault();
      console.log("test");
      $.getJSON("https://www.freecodecamp.org/json/cats.json", function(json){
        $(".quote").html(JSON.stringify(json));

      });

});
});
