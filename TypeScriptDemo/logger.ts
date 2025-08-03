function Logger(constructor: Function) {
    console.log("Logging class: ", constructor)
}

@Logger
class MyClass {
    constructor() {
        console.log("creating instance");
    }
}

function LogProperty(target: any, propertyKey: string) {
    console.log(`Property decorator called for: ${propertyKey}`)
}

class UserDemo {

    @LogProperty
    userName!: string
}

function LogMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with`, args);
        return original.apply(this, args);
    }
}

class Calculator {
    @LogMethod
    add(a: number, b: number) {
        return a + b;
    }
}

new Calculator().add(4,5);