$(document).ready(function() {

    $("p").mouseenter(function() {
        $("p").css("color", "red");
    });

    $("p").mouseleave(function() {
        $("p").css("color", "black");
    });

    $("h1").mouseenter(function() {
        $("h1").css("color", "cyan");
    });

    $("h1").mouseleave(function() {
        $("h1").css("color", "red");
    });

});