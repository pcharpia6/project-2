$('body').fadeIn(1000);

$(document).ready(function() {
    userName = window.localStorage.getItem('userName');
    console.log(userName);
    if (userName === "guest"){
        $('#current-data').attr('src', './videoplayer.html');
    }
    else if(userName === "login"){
        $('#current-data').attr('src', './forms/login/login.html');   
    }
    menuTitle(userName);
    $('#title-text').animate({'margin-left': '0'}, 'slow');
});

function menuTitle(userName){
    if (userName === "login"){
        userName = "guest";
    }
    $('.menu-title').html(`Welcome ${userName}!`)
}

$('#menu').click(function(){
    $('#site-menu').fadeIn(300);
    $('.menu-title').css({'border-bottom': '1px solid white'});
});

$('.about').click(function(){
    $('#current-data').attr('src', 'aboutus.html');
});

$('.games').click(function(){
    $('#current-data').attr('src', './topGames/popularTwitch.html');
});

$('.home').click(function(){
    $('#current-data').attr('src', './videoplayer.html');
});

$('.login').click(function(){
    $('#current-data').attr('src', './forms/login/login.html');
});