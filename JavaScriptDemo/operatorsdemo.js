//1.Arithmetic Operators    + - / * %(modulus)
//priority + -(low) * / % (high)
//associativity left to right
var x = 2 + 3 - 4 / 2 - 2 * 3 - 7 % 2;
console.log(x)

//2.Assignment operator  =
//Associativity Right to Left
var a = 2 + 3 - 4 / 2 - 7 % 2;
console.log(a)

//3. shorthand(compound) assignment operator += -= /= *= %=
var i = 5;
console.log(i);
i += 2; //i = i + 2;
console.log(i)

//4.Increment/decrement operators 
//  ++        --
// Post   pre
//a++ a-- ++a --a
var j = 6;
console.log(j);
j++;//j+= 1;//j = j+1;
console.log(j);

var m = 7;
var n = m++;
console.log(m);
console.log(n);

//5.Relational Operators  < > <= >=  == === != !== 
var r = 4;
var s = 5;
console.log(r < s);//true
console.log(r > s);//false
console.log(r <= s);//true
console.log(r >= s);//false
console.log(r == s);//false
console.log(r === s);//false
console.log(r != s);//true
console.log(r !== s);//true
console.log("===================")

//6.Logical Operators && || !
var c = 5;
var d = 6;
var e = 7;
console.log(true && true);//true
console.log(c < d && d < e);//true
console.log(true && false);//false
console.log(c < d && d > e);//false
console.log(false && true);//false
console.log(c > d && d < e);//false
console.log(false && false);//false
console.log(c > d && d > e);//false

console.log("===================")
console.log(true || true);//true
console.log(c < d || d < e);//true
console.log(true || false);//true
console.log(c < d || d > e);//true
console.log(false || true);//true
console.log(c > d || d < e);//true
console.log(false || false);//false
console.log(c > d || d > e);//false

console.log("===================")
console.log(!true)//false
console.log(!(c < d))//false
console.log(!false)//true
console.log(!(c > d))//true

console.log("===================")
//7.conditional(teranry) operators  ?:
// if (c > d) {//true
//     console.log("c is greatr than d");
// } else {
//     console.log("d is greatr than c");
// }
var k = (c > d) ? "c is greatr than d" : "d is greatr than c"
console.log(k)
