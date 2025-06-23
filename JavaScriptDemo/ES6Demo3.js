//8.Enhanced Object Literals
// const person = {
//     name: "Eliza",
//     age: 21,
//     greet: function (){
//      return `Hello I am ${this.name} and I am ${this.age} years old.`;
//     }
// }

const name = 'Eliza';
const age = 30;
const person = {
    name,
    age,
    greet() {
        return `Hello I am ${this.name} and I am ${this.age} years old.`;
    }
}

console.log(person.greet());

//9. for..of loop
const numbers = [12, 13, 14];
for (const n of numbers) {
    console.log(n);
}

//10.Map
const map = new Map();
map.set('name', 'Raju');
console.log(map.get('name'))

//11.Set
const set = new Set([1, 1, 2, 3, 3, 4]);
console.log(set);


//12.Promises
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Data fetched'), 1000);
    });
};

fetchData().then(data => console.log(data));