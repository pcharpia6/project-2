console.log('Running');
$('#modal-button').click(function(e){
    $('#myModal').fadeOut(slideOpen());
});

function slideOpen(){
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
        window.location = '../../Dojo-Main/index.html'
    });
};
