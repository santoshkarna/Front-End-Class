//1.string
let firstName = 'Ram';
console.log(firstName);
let gretings: string = `Hello, ${firstName}`;
console.log(gretings);

//2.number
let age: number = 123;
let price: number = 77.34;

//3.boolean(true or false)
let isActive: boolean = true;

//4.array
let scores: number[] = [12, 34, 56]
let fruits: Array<string> = ["banana", "mango"];

//5.enum

enum Direction {
    NORTH,
    SOUTH,
    EAST,
    WEST
}
let dir: Direction = Direction.EAST;//2
console.log(dir);

enum Status {
    Success = 200,
    NotFound = 404,
    Error = 500,
}

let stat: Status = Status.Error;
console.log(stat);

//6.tupple
let personInfo: [string, number] = ['age', 22];

//7.any
let data: any = 5;
data = 'hello';
data = true;

//8.unknown
let input: unknown = 'hello';
if(typeof input === 'string'){
    console.log(input.toUpperCase())
}

//9.void 
function logMessage(msg: string): void {
    console.log(msg)
}

//10.never
function throwError(msg: string): never {
    throw new Error(msg);
}

//literal 
let directions: 'left'| 'right'
directions = 'left';
directions = 'right';
//directions = 'up';//not compile

//Union(|)
let id : number | string;
id = 123;
id = 'abc123'
//Intersection(&)
type Employee = {name: string};
type Manager = {department: string}
type Boss = Employee & Manager
let boss: Boss = {name: "Ram", department: "HR"}