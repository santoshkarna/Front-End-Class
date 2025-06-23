var person = {
    "first_name": "Raju",
    "last_name": "sharma",
    "full_name": function (){
        console.log(this.first_name + " "+ this.last_name);
        return this.first_name + " " +  this.last_name;
    }
}

console.log(person.first_name);
console.log(person.last_name);
console.log(person.full_name());

var person1 = person;
console.log("============")
console.log(person1.first_name);
console.log(person1.last_name);
console.log(person1.full_name());

person = null;

console.log("============")
console.log(person1.first_name);
console.log(person1.last_name);
console.log(person1.full_name());