console.log('js');

$(document).ready(onReady);
let counter = 0;
function onReady(){
    console.log('in onReady');
    $('#container').append('<button id="generate">generate</button>');
    $('#container').append('<p>counter <span id="num-span">0</span></p>');
    $('#container').on('click', '#generate', makeStuff);
    $('#container').on('click', '.swap-btn', changeStuff);
    $('#container').on('click', '.delete-btn', deleteStuff);
}//end onReady

function makeStuff(){
    counter ++;
    $('#container').append('<div class="redDiv highlightRed"><button class="swap-btn">swap</button><button class="delete-btn">delete</button><div>')
    $('#num-span').text( counter );
}


function changeStuff(){
    $( this ).parent().toggleClass("highlightYellow", "highlightRed");
}

function deleteStuff(){
    $( this ).parent().remove();
}
