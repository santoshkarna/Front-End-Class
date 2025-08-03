//1.string
var firstName = 'Ram';
console.log(firstName);
var gretings = "Hello, ".concat(firstName);
console.log(gretings);
//2.number
var age = 123;
var price = 77.34;
//3.boolean(true or false)
var isActive = true;
//4.array
var scores = [12, 34, 56];
var fruits = ["banana", "mango"];
//5.enum
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["WEST"] = 3] = "WEST";
})(Direction || (Direction = {}));
var dir = Direction.EAST; //2
console.log(dir);
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["Error"] = 500] = "Error";
})(Status || (Status = {}));
var stat = Status.Error;
console.log(stat);
//6.tupple
var personInfo = ['age', 22];
//7.any
var data = 5;
data = 'hello';
data = true;
//8.unknown
var input = 12;
if (typeof input === 'string') {
    console.log(input.toUpperCase());
}
