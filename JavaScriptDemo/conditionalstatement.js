//1.simple if
//2.if-else
//3.nested if-else
//4.else-if


//1.simple if
var a = 5;
var b = 4;
if (a > b) {
    console.log('a is greater than b.');
}
//block => {}
console.log("=================");


//2.if-else
var i = 17;
var j = 8;
if(i > j){ //true
    console.log('i is greater than j.');
} else {//false
    console.log('j is greater than i.')
}
console.log("=================");

//3.nested if-else
var x = 15;
var y = 17;
var z =9;
if(x > y){
    if(x > z){
        console.log('x is greatest one.');
    } else {
       console.log('z is greatest one.');
    }
} else {
   if(y > z ){
    console.log('y is greatest one.');
   } else {
    console.log('z is greatest one.');
   }
}
console.log("=================");

//4.else-if
var marks = 78;
if(marks > 80 && marks <= 100){
    console.log('Distinction');
} else if(marks > 65 && marks <= 79){
     console.log('First');
} else if(marks > 55 && marks <= 64){
     console.log('Second');
} else if(marks > 35 && marks <= 54){
     console.log('Third');
} else {
    console.log('fail')
}
console.log("=================");