/* eslint-env browser*/

var coinFlip = Math.random();
do {
    var choice = window.prompt("Please enter 'heads' or 'tails'");

    if (choice!="heads"&&choice!="tails") {
        alert("Please enter either 'heads' or 'tails'");
    }
} while (choice!="heads" && choice!="tails");

if (coinFlip<=0.5){
    coinFlip=Math.floor(coinFlip);
}else {
    coinFlip=Math.ceil(coinFlip);
}

if (coinFlip == 0) {
    var flipResult = "heads";
} else {
    var flipResult = "tails";
}

if (flipResult == "heads") {
    if (choice == "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was heads but you chose tails...you lose!");
    }
} else {
    if (choice == "heads") {
        alert("The flip was tails but you chose heads...you lose!");
    } else {
        alert("The flip was tails and you chose tails...you win!");
    }
}