function User(name, age) {
    this.name = name;
    this.age = age;
}

// console.log(User);

// User.prototype.greeting = function () {
//     return `Hello my name is ${this.name}`;
// };
//
// let user = new User('petro', 12);
// console.log(user.greeting());

// let user = new User('vasya', 23);
// user.greeting = function (msg) {
//     return `${msg}, my name is ${this.name}`;
// };
// console.log(user.greeting());
//
// let user2 = new User('petro', 24);
// console.log(user.greeting.apply(user2, ['Hello']));
// console.log(user.greeting.call(user2, 'Hello'));

let user = new User('petro', 25);
// user.greeting = function (msg) {
//     return `${msg} my name is ${this.name}`
// };
user.greeting = msg => { return `${msg} my name is ${user2.name}`; };
let user2 = new User('vasya', 27);
let greetingCopy = user.greeting.bind(user2);
console.log(greetingCopy('hello'));