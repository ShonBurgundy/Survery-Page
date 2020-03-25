$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();

    var sandwich = $("#sandwichInput").val();
    console.log(sandwich);
    

    $(".sandwichOutput").append(sandwich);
    $("#output").show();
  })
})

var flavor = $("input:radio[name=flavor]:checked").val();