/* eslint-env browser*/

var x = parseInt(window.prompt("Enter a number"));
var y = parseInt(window.prompt("Enter a number"));
if(isNaN(x) || isNaN(y)) {
    document.write("Please enter a number");
} else if (x>y){
    document.write("The larger number is " + x + ".");
} else if (y>x) {
    document.write("The larger number is " + y +".");
} else {
    document.write("The numbers are equal.");
}