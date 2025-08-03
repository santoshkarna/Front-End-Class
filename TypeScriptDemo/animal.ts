class Animal {
    walk() {
        console.log("animal walks!!!")
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog barks!!!")
    }
}
const dog = new Dog();
dog.walk();
dog.bark();