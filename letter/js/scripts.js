
$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    var input1 = $("input#input1").val();
    var input2 = $("input#input2").val();
    var input3 = $("input#input3").val();
    var input4 = $("input#input4").val();
    var input5 = $("input#input5").val();
    var input6 = $("input#input6").val();

    $(".input1").text(input1);
    $(".input2").text(input2);
    $(".input3").text(input3);
    $(".input4").text(input4);
    $(".input5").text(input5);
    $(".input6").text(input6);

    $("#blanks").hide();
    $("#letter").show();

    event.preventDefault();
  });
});
