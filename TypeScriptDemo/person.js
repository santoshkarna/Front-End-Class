var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, I am " + this.name);
    };
    return Person;
}());
var person = new Person("Ram");
person.greet();
