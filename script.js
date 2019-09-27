var str = "3 2 1 G0!!! Glossophobia or speech anxiety is the fear of public speaking. The word glossophobia derives from the Greek γλῶσσα glōssa, meaning tongue, and phobos, fear or dread. Some people have this specific phobia, while others may also have broader social phobia or social anxiety disorder.";
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