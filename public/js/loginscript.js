console.log('Running');
$('#modal-button').click(function(e){
    console.log('clicky');
    $('#myModal').fadeOut(slideOpen());
});

function slideOpen(){
    //$('#tada').load("https://jernical.github.io/Ding-su/");
    $('#stage').css({"justify-content": "space-between"});
    $('#rtdoor').animate({'left':'100%'}, "slow");
    $('#ltdoor').animate({'right':'100%'}, "slow");
    zoomStage();
};

function zoomStage(){
    $('#stage').animate({'width': '100vw', 'height': '100vh'});
    $('#tada').animate({'width': '100vw', 'height': '100vh'});
    $('#theater-container').animate({'margin': '0 auto', 'width': '100vw', 'height': '100vh'});
    $('body').animate({'margin': '0px'});
    loadFullSite();
};

function loadFullSite(){
    $('body').fadeOut(500, function(){
        window.location = 'https://jernical.github.io/Ding-su/'
    });
};