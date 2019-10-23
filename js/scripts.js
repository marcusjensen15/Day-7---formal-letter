$(document).ready(function(){
  $("#formOne").submit(function(){
    var name1 = $("input#name").val();
    var time = $("input#timeOfDay").val();
    var noun1 = $("input#noun").val();

    $(".name").text(name1);
    $(".timeOfDay").text(time);
    $(".noun").text(noun1);

    $("#story").show();
    event.preventDefault();

  });
});
