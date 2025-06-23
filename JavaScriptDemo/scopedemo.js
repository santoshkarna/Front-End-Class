//global variable
'use strict';
j = 7;
var a = 5;
function display (){
    console.log(a);
    var a = 6;
    // a = 6;
    console.log(a);
    //local variable
    var x = 9;
    console.log(x)
}

display();

console.log("===============")
function demo (){
    console.log(a);
    //console.log(x);
    i = 7;
    console.log(i);
    var i;
}

demo();