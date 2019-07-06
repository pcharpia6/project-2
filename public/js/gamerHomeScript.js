$('#submit-video').click(function(){
    $("#main-stage").css({"grid-template-columns" : "15% 70% 15%", "grid-template-rows" : "15% 70% 15%"});
    $("#main-stage").html("<div id='submitForm' class='formSize'></div>");
    $(".formSize").css({"grid-column-start" : "2", "grid-column-end" : "2", "grid-row-start" : "2", "grid-row-end" : "2"});
    $('.formSize').load("forms/videoForm.html");
});