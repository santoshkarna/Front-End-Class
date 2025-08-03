class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log("Hello, I am " + this.name);
    }
}

const person = new Person("Ram");
person.greet();