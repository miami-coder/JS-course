// let name = 'petro';
// let age = 25;
// let user = {
//     name,
//     age,
//     foo() {
//         console.log(this);
//     }
// }
// console.log(user);
// user.foo();

// let user = {
//     name: "Petro",
//     age: 35,
//     foo() {
//         console.log('foo')
//     }
// }
// let {age, name, foo} = user;
// console.log(name);
// console.log(age);
// foo();
//
// function asd({name}) {
//     console.log(name);
// }
//
// const obj = {a: 'qwe', name: 'qwerty'}
// asd(obj)

// let name = 'petro';
// let age = 25;
// let user = {
//     name,
//     age,
//     foo() {
//         console.log(this);
//     }
// }
// console.log(user);
// user.foo();
// let {name: userName, age: userAge} = user;
// console.log(userName);
// console.log(userAge);


// let [a, b, c] = [11, 22, 33];
// console.log(a, c);

let users = [
    {name: 'petro', age: 20, status: true},
    {name: 'vasiliy', age: 21, status: false},
    {name: 'jeka', age: 22, status: true},
    {name: 'ivan', age: 23, status: true},
    {name: 'olya', age: 24, status: false},
    {name: 'max', age: 25, status: true},
    {name: 'anya', age: 26, status: true},
    {name: 'oleg', age: 27, status: false},
    {name: 'andrey', age: 28, status: true},
    {name: 'jora', age: 29, status: true}
];

let [{name, age, status}, user2] = users;
console.log(user1);
console.log(user2);