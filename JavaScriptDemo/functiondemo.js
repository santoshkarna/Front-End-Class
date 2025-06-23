//this is function declaration
function greet() {
    console.log("Hello, Good Evening");
}

//this is function calling
greet();


function sum(a, b) {
    console.log(a + ' ' + b);
    var add = a + b;
    console.log('sum is: ' + add);
}

sum(4, 5);

sum(4);

sum(4, 6, 8);

sum(4, "hello");

sum(4, true);

sum(4, false);

sum(4, null);

sum(4, 5.6);

console.log('=======')
var x = 1;
if (x) {
    console.log('this is true')
} else {
    console.log('this is not true')
}

console.log('=======')

function findAverage(a, b) {
    var avg = a + b / 2;
    return avg;
}

var average = findAverage(6, 4);
console.log('average is: ' + average);

//anonymous function
var sayHello = function () {
    console.log("hello hello hello");
}

sayHello();

var printInfo = function (name, age) {
    console.log('name is===>>>' + name);
    console.log('age is=====>>>' + age);
}

printInfo('Raju', 22);

var sub = function (a, b) {
    var s = a - b;
    return s;
}

var result = sub(4, 2);
console.log('Subtraction is: ' + result);

//IIFE=> Immediately Invoked Function Expression
(function (name) {
    console.log("hello, this is IIFE in javascript."+name)
})('raju');


