
/* ugly solution because it's so annoyingly hard to read from txt-file*/
var array = ["It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"];


var lastAnswer = -1;

function chooseAnswer() {
    var y = Math.floor(Math.random() * 20);
    while (lastAnswer == y) {
        y = Math.floor(Math.random() * 20);
    }
    lastAnswer = y;
    console.log(y);
    printAnswer(y);
}

function printAnswer(y) {
    document.getElementById('outputAnswer').innerHTML = array[y];
}


var snd = new Audio("buttonpress.mp3");

function playSound() {
    snd.currentTime = 0;
    snd.play();
}


