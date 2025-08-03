interface User {
    uname: string;
    age: number;
    // age?: number;
}
let u: User = {uname: "Ram", age: 23}
console.log(u);

class Student implements User {
    constructor(public uname: string, public age: number){}
}

interface Address {
    city: string;
}

interface UserAddress extends UserActivation, Address {

}

// object destructuring
const {uname, age} = u;