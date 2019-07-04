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

//main menu click functions

$('#menu').click(function(){
    $('#site-menu').toggle(300);
    $('.menu-title').toggleClass('menu-underline');
});

$('.about').click(function(){
    $('#video-menu').hide();
    $('#current-data').attr('src', 'aboutus.html');
});

$('.games').click(function(){
    $('#video-menu').css({'display' : 'flex'});
    $('#current-data').attr('src', './topGames/popularTwitch.html');
});

$('.home').click(function(){
    $('#video-menu').hide();
    $('#current-data').attr('src', './videoplayer.html');
});

$('.login').click(function(){
    $('#video-menu').hide();
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

//auxiliary menu click functions

$('.coach').click(function(){
    $('#current-data').attr('src', './forms/coachForm.html');
});

$('.review').click(function(){
    $('#video-menu').css({'display' : 'flex'});
    $('#current-data').attr('src', './forms/contributerForm.html');
});

$('.video').click(function(){
    $('#current-data').attr('src', './forms/videoForm.html');
});