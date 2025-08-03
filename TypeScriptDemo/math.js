"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = exports.PI = void 0;
exports.sum = sum;
exports.default = log;
exports.PI = 3.14;
function sum(a, b) {
    return a + b;
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
function log(message) {
    console.log("LOG: ", message);
}
