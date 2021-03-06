$('body').fadeIn(1000);

$(document).ready(function() {
    userName = window.localStorage.getItem('users');
    if (userName === "guest"){
        $('#current-data').attr('src', './videoplayer.html');
        $('.login').html('Register/Login');
    }
    else if(userName === "login"){
        $('#current-data').attr('src', './forms/index.html');   
    }
    else{
        $('#current-data').attr('src', './videoplayer.html');
        $('.login').hide();
        $('.home').hide();
        $('.log-out').show();
        $('.gamer-home').show();
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
    hideLoadedHtml();
    $('#video-menu').hide();
    $('#current-data').attr('src', 'aboutus.html');
});

$('.games').click(function(){
    hideLoadedHtml();
    $('#video-menu').css({'display' : 'flex'});
    $('#current-data').attr('src', './topGames/twitch.html');
});

$('.home').click(function(){
    $('#video-menu').hide();
    $('#current-data').attr('src', './videoplayer.html');
});

$('.gamer-home').click(function(){
    $('#video-menu').hide();
    $('#main-site').hide();
    $('#loaded-html').show();
    $('#loaded-html').load("gamerHome.html");  
});

$('.login').click(function(){
    hideLoadedHtml();
    $('#video-menu').hide();
    $('#current-data').attr('src', './forms/index.html');
});

$('.log-out').click(function(){
    $('.log-out').hide();
    $('.gamer-home').hide();
    $('.login').show();
    $('.home').show();
    $('#current-data').attr('src', './videoplayer.html');
    userName = "guest";
    menuTitle(userName);
    localStorage.setItem('users', userName);
});

function hideLoadedHtml(){
    $('#main-site').show();
    $('#loaded-html').hide();
    $('#loaded-html').html("");
};
//auxiliary menu click functions

$('.coach').click(function(){
    $('#current-data').attr('src', './forms/coachForm.html');
});

$('.review').click(function(){
    $('#video-menu').css({'display' : 'flex'});
    $('#current-data').attr('src', './forms/contributorForm.html');
});

$('.video').click(function(){
    $('#current-data').attr('src', './forms/videoForm.html');
});

$('.search').click(function(){
    $('#current-data').attr('src', './gamerHome.html');
});