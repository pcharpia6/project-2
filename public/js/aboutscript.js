
$(document).ready(function(){
    cursorBlink();
    $('#computer-text').show();
    computerTyping(); 
});

function cursorBlink(){
    for(var cursorCount = 0; cursorCount <= 4; cursorCount++){
        $('#cursor-button').fadeOut(500).fadeIn(500);
        }
};

function computerTyping(){
var computerScript = Array.from("Who are we?? \nWritten by gamers...\n Run by gamers...\n We are the future of gamers \n Post your videos, and get real reviews by real coaches.. \nGamers who have been there.. \nAnd done that... \n Now, there is only one question left to ask... \n Are you ready to up your game?? \n DING-SU!");

var printerInterval = setInterval(function(){
  if(!computerScript.length){
    clearTimeout(printerInterval);
  } else {
    var letter = computerScript.shift();
    if(letter==="\n"){
      $("#computer-text").html("");
    } else {
      $("#computer-text").append(letter);
    }
  }
}, 165);
};
