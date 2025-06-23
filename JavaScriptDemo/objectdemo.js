var person = {};
console.log(person);
person.name = 'raju';
person['age'] = 22;
console.log(person);
console.log(person.age);
console.log(person['name'])

console.log('===============')

var employee = {
    "emp_name": 'eliza',
    "emp_id": 12
}
console.log(employee);
employee.address= 'USA';
console.log(employee);
console.log(employee.emp_id)