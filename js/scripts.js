//Back-End

var add = function(userFirstName, userLastName) {
  return userFirstName + userLastName;
};



$(document).ready(function(){
  $("form#formFullName").submit(function(event) {
    event.preventDefault();
    var userFirstName = $("#fname").val();
    var userLastName = $("#lname").val();
    var result = add(userFirstName + " " , userLastName);
    $("#output").text(result);
  });
});

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    // event.preventDefault();

    var sandwich = $("#sandwichInput").val();
    console.log(sandwich);
    
    $(".sandwichOutput").text(sandwich);

    $("#output").show();
    event.preventDefault();
  });
});

var tunes = $("input:radio[name=Music]:checked").val(); 

console.log(tunes);