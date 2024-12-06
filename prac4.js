$(document).ready(function(){
    $("#btn1").click(function(){
        $("p").hide();
    });
    $("div").first().css("background-color", "yellow");
    $("div").last().css("background-color", "red");
    $("p").eq(1).css("background-color", "yellow");
    $("p").filter(".intro").css("background-color", "purple");
});