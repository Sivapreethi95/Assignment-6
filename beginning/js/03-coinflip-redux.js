var coinFlip;
for (i=1; i<=10; i++) {
    coinFlip = Math.random();
    if (coinFlip<=0.5){
        coinFlip=Math.floor(coinFlip);
    }else {
        coinFlip=Math.ceil(coinFlip);
    }
    var flipResult;
    if (coinFlip == 0){
        flipResult ="Heads";
    } else {
        flipResult = "Tails";
    }
    console.log(flipResult);
}
