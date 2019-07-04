var userName = "";

$('.modal-button').click(function(e){
    if (this.id === 'guest'){
        userName = "guest";
        $('#myModal').fadeOut(slideOpen());       
    }
    else{
        userName = "login";
        $('#myModal').fadeOut(slideOpen());
    }
    localStorage.setItem('userName', userName);
});

/*function renderLoginChoices(){
    $('.modal-body').html('<p class="rock-salt"> Great! Are you a...</p>');
    $('.modal-footer').html('<button class="modal-button rock-salt" type="button" id="new-user">New User</button>');
    $('.modal-footer').append('<p class="rock-salt">Or</p>')
    $('.modal-footer').append('<button class="modal-button rock-salt" type="button" id="returning-user">Returning User</button>');
}*/

function slideOpen(){
    $('#stage').css({"justify-content": "space-between"});
    $('#rtdoor').animate({'left':'100%'}, "slow");
    $('#ltdoor').animate({'right':'100%'}, "slow");
    zoomStage();
};


function zoomStage(){
    $('#stage').animate({'width': '100vw', 'height': '100vh'}, 'slow');
    $('#tada').animate({'width': '100vw', 'height': '100vh'}, 'slow');
    $('#theater-container').animate({'margin': '0 auto', 'width': '100vw', 'height': '100vh'}, 'slow');
    $('body').css({'margin': '0px'});
    waitForTheNext();
};

function waitForTheNext(){
    var waitForLoad;
    waitForLoad = setTimeout(loadFullSite, 1000);
};

function loadFullSite(){
    $('body').fadeOut(500, function(){
        window.location = './main.html';
    });
};
