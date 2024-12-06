$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").hide();
    });
    $("div").first().css("background-color", "yellow");
    $("div").last().css("background-color", "red");
    $("p").eq(1).css("background-color", "yellow");
    $("p").filter(".intro").css("background-color", "purple");
    $("#name").blur(function(){
        alert("This input field has lost its focus.");
      });
      $("#name").change(function(){
        alert("This input field has changed its content.");
      });
      $("#para1").click(function(){
        alert("The paragraph was clicked.");
      });
      $("#name").keydown(function(){
        $("#name").css("background-color", "yellow");
      });
      $("#name").keyup(function(){
        $("#name").css("background-color", "pink");
      });
});