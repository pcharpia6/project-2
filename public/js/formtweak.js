var username = localStorage.getItem("users");

$('#userName').html(`<div class="input-label shojumaru label-tweak">${username}</div>`);

function calculateDivHeight(){
    var inputs = $('#inputs').length;
    var selections = $('#selections').length;
    var text = $('#text').length;
    var buttons = $('#buttons').length;
    var formDivs = ['inputs', 'selections', 'text', 'buttons'];
    var divThere = [inputs, selections, text, buttons];
    var totalDivs = inputs + selections + text + buttons;
    var divPercent = 100/totalDivs;
    for (var divCount = 0; divCount < formDivs.length; divCount ++){
        console.log(formDivs[divCount], divPercent);
        if (divThere[divCount] != 0){
            $(`#${formDivs[divCount]}`).css({'height': `${divPercent}%`});   
        }
        else{
            $(`#${formDivs[divCount]}`).hide();  
        }
    }
};

function calculateInputSections(){
    var inputNumber = $(".input-value" ).length;
    var inputPercent = 100/inputNumber;
    var inputSections = '';
    for (var inputCount = 0; inputCount < inputNumber; inputCount ++){
        inputSections += ` ${inputPercent}`;
    }
    $('#inputs').css({'grid-template-rows': `${inputSections}%`});
};

calculateDivHeight();
calculateInputSections();
