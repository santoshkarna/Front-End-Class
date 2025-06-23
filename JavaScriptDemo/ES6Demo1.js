//1. let and const
let a = 5;
function display() {
  console.log(a);
  // let a = 6;
  console.log(a);
  let x = 4;
  console.log(x);
  // let x = 5;
  x = 7;
  console.log(x);

  //this is constant and we can not change the value of y
  const y = 12;
  console.log(y);
  //     y = 13;
  //     console.log(y);
}

display();

//2. arrow function
const greet = () => console.log("Hello, Good Evening");
greet();
const sum = (a, b) => a + b;
console.log(sum(4, 5));

const displayInfo = () => {
  console.log("My name is Santosh");
  console.log("I Teach JavaScript");
  // return 5;
};


//3. Template Literals
const name = 'Eliza';
// const message = "Hello, " + name + " Welcome to ES6 Demo";
const message = `Hello, ${name} Welcome to ES6 Demo`;
console.log(message)
// const intro = 'hello, I am santosh. '+
// 'I teach Javascript'
const intro = `hello, I am Santosh.
I tech javascript`;
console.log(intro);

//4. Destructuring Assignment

//Array
// const arr = [1,2];
// console.log(arr[0]);
// console.log(arr[1]);
const [i, j] = [1, 2];
console.log(i, j);

//Object
const employee = {
  empName: 'Eliza',
  age: 22
}
// console.log(employee.name);
// console.log(employee['age'])

const { empName, age } = employee;
console.log(empName);
console.log(age);

//5. Default parameters
function sayHello(name = 'Guest') {
  return `Hello, ${name}`;
}
console.log(sayHello('Jack'))
console.log(sayHello());

//6.Rest & Spread Operators
//Rest
function addition(...numbers) {
  for (let n of numbers) {
    console.log(n)
  }
  return numbers.reduce((n1, n2) => n1 + n2, 0);
}
let r = addition(4, 5, 6, 7);
console.log(r);

//Spread
const arr1 = [1,2,3];
const arr2 = [...arr1, 4,5,6];
console.log(arr2);
