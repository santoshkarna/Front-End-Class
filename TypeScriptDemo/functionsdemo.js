function add(a, b) {
    return a + b;
}
var r = add(4, 5);
console.log(r);
var sub = function (a, b) { return a - b; };
console.log(sub(4, 2));
var greet = function (name) {
    return "Hello, " + name;
};
console.log(greet("Ram"));
function log(message, userId) {
    console.log(message, userId || "Guest");
}
log("Hello!");
log("Hello!", "S123");
function sayHello(name) {
    if (name === void 0) { name = "Guest"; }
    console.log("Hello, " + name);
}
sayHello();
sayHello("Raju");
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, n) { return total + n; }, 0);
}
console.log(sum(4, 5, 6, 7));
function identity(value) {
    return value;
}
console.log(identity(10));
console.log(identity("typescript"));
function logMessage(message) {
    console.log(message);
}
logMessage("Hello, good evening");
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function combine(a, b) {
    return a + b;
}
console.log(combine(1, 2));
console.log(combine("a", "b"));
