$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    // event.preventDefault();

    var sandwich = $("#sandwichInput").val();
    console.log(sandwich);
    
    $(".sandwichOutput").append(sandwich);

    $("#output").show();
    event.preventDefault();
  })
})

var tunes = $("input:radio[name=Music]:checked").val(); 

console.log(tunes);


$(document).ready(function(){
  $("form#formFullName").submit(function(event){
  event.preventDefault();
  var userFirstName = $("#fname").val();
  var userLastName = $("#lname").val();

  $("")
  })
})