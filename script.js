var str = "3 2 1 G0!!! Nacho Libre is a comedy- drama film directed by Jared Hess inspired by the true story of a priest called Sergio Benitez who resorted to wrestling to support an orphanage in Mexico";
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