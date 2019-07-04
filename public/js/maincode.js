$('body').fadeIn(1000);

$(document).ready(function() {
    userName = window.localStorage.getItem('users');
    if (userName === "guest"){
        $('#current-data').attr('src', './videoplayer.html');
        $('.login').html('Register/Login');
    }
    else if(userName === "login"){
        $('#current-data').attr('src', './forms/login/login.html');   
    }
    else{
        $('#current-data').attr('src', './videoplayer.html');
        $('.login').hide();
        $('.log-out').show();
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

$('.log-out').click(function(){
    $('.log-out').hide();
    $('.login').show();
    $('#current-data').attr('src', './videoplayer.html');
    userName = "guest";
    menuTitle(userName);
    localStorage.setItem('users', userName);
});