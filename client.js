console.log('js');

$(document).ready(onReady);
let counter = 0;
function onReady(){
    console.log('in onReady');
    $('#container').append('<button id="generate">generate</button>');
    $('#container').on('click', '#generate', makeStuff);
    $('#container').on('click', '.swap-btn', changeStuff);
    $('#container').on('click', '.delete-btn', deleteStuff);
    
    
}//end onReady

function makeStuff(){
    counter ++;
    $('#container').append('<div class="redDiv" class="highlightRed"><button class="swap-btn">swap</button><button class="delete-btn">delete</button><div>')
    $('#container').append('<p>counter' + counter + '</p>');
    changeStuff();
}


function changeStuff(){
    $(".swap-btn").click(function(){
        $(".redDiv").toggleClass("highlightRed", "highlightYellow");
    });
}

function deleteStuff(){
    $(".delete-btn").click(function(){
        $( this ).parent().remove();
    });
}