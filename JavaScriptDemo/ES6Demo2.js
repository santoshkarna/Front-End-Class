class Animal {
    constructor(animalName) {
        this.animalName = animalName;
    }

    speak() {
        console.log(`${this.animalName} makes a noise.`)
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.animalName} barks`)
    }
}

const dog = new Dog("German Shepherd");
dog.speak();

class Tiger extends Animal {

    speak() {
        console.log(`${this.animalName} roars.`);
    }
}

const tiger = new Tiger("Tiger");
tiger.speak();