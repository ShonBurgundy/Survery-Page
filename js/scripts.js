$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var sandwich = $("#sandwichInput").val();
    console.log(sandwich);
    
    $("#output").text(result);
  })
})