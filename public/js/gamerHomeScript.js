$('#submit-video').click(function(){
    $('#loaded-html').load("forms/videoForm.html");
});

$('.search').click(function(){
    $('#inputs').css({'display' : 'none'});
    $('#movie-selections').show();
    $('#search-button').show();
});

$('#search-button').click(function(){
    $('#inputs').css({'display' : 'grid'});
    $('#movie-selections').hide();
    $('#movie-selections').html('');
    $('#search-button').hide();
});