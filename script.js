var str = "3 2 1 G0!!!. Coma is a deep state of prolonged unconsciousness in which a person fails to respond to painful stimuli, light or sound. Patients are unable to consciously speak, feel or move. A Coma can occur by natural causes or medically induced. Done!!!";
var words = str.split(" ");

var iterator = words.values();
var text = document.getElementById("text");



function loopThroughSplittedText(words) {
    for (var i = 0; i < words.length; i++) {  
        (function (i) {
            setTimeout(function () {
                document.getElementById('text').innerHTML = words[i];
                console.log(words[i]);
            }, 300 * i);
        })(i);
    };
}


function start(){
    loopThroughSplittedText(words);
}