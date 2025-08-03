function add(a: number, b: number): number {
    return a + b;
}

let r = add(4, 5);
console.log(r);

const sub = (a: number, b: number): number => a - b;
console.log(sub(4, 2));

const greet = function (name: string): string {
    return "Hello, " + name;
}
console.log(greet("Ram"));

function log(message: string, userId?: string) {
    console.log(message, userId || "Guest");
}
log("Hello!");
log("Hello!", "S123");

function sayHello(name: string = "Guest") {
    console.log("Hello, " + name);
}
sayHello();
sayHello("Raju");

function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(4, 5, 6, 7));

function identity<T>(value: T): T {
    return value;
}
console.log(identity<number>(10));
console.log(identity<string>("typescript"));

function logMessage(message: string): void {
    console.log(message);
}

logMessage("Hello, good evening");

function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}
// throwError("Error occurred");

function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: any, b: any): any {
    return a + b;
}
console.log(combine(1,2));
console.log(combine("a", "b"))