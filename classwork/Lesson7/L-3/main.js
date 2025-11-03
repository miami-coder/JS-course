// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // greeting(name, age) {
//     //     return `Hello my name is ${this.name}`;
//     // }
//     work () {
//         return `work in process`
//     }
// }
// // let user = new User('petro', 25);
// // console.log(user);
// // console.log(user.greeting());
//
// class Customer extends User {
//     constructor(name, age, password) {
//         super(name, age);
//         this.password = password;
//     }
// }
//
// let customer = new Customer('petro', 25, '123');
// console.log(customer);
// console.log(customer.work());

function User(name, age) {
    this.name = name;
    this.age = age;
}

function Customer(name, age, password) {
    User.apply(this, arguments);
    this.password = password;
}
let customer = new Customer('petro', 25, '111');
console.log(customer);