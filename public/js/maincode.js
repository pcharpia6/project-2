$('body').fadeIn(1000);

$(document).ready(function() {
    $('#title-text').animate({'margin-left': '0'}, 'slow');
    $('#current-data').attr('src', '../ding-su-video-player/index.html');
});

$('#menu').click(function(){
    $('#site-menu').fadeIn(300);
    $('.menu-title').css({'border-bottom': '1px solid white'});
})
