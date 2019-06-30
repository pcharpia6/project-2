

$('body').fadeIn(1000);

$(document).ready(function() {
    $('#title-text').animate({'margin-left': '0'}, 'slow');
    $('#current-data').attr('src', './videoplayer.html');
});

$('#menu').click(function(){
    $('#site-menu').fadeIn(300);
    $('.menu-title').css({'border-bottom': '1px solid white'});
});

$('.about').click(function(){
    $('#current-data').attr('src', 'aboutus.html');
})
