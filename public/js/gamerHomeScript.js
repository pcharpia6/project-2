$('#submit-video').click(function(){
    $('#search-videos').hide();
    $('#submit-video').append($('<div>').load("/forms/videoForm.html"));
});