// localStorage.setItem('qwe', 'asd');

// let item = localStorage.getItem('qwe');
// console.log(item);
// localStorage.clear();

// localStorage.setItem('user', JSON.stringify({id: 1, name: 'petro'}));

// let userJSON = localStorage.getItem('user');
// console.log(userJSON);
// let user = JSON.parse(userJSON);
// console.log(user);
// user.age = 25;
// localStorage.setItem('user', JSON.stringify(user));

// let users = [
//     {name: 'petro', age: 20, status: true},
//     {name: 'vasiliy', age: 21, status: false},
//     {name: 'jeka', age: 22, status: true},
//     {name: 'ivan', age: 23, status: true},
//     {name: 'olya', age: 24, status: false},
//     {name: 'max', age: 25, status: true},
//     {name: 'anya', age: 26, status: true},
//     {name: 'oleg', age: 27, status: false},
//     {name: 'andrey', age: 28, status: true},
//     {name: 'jora', age: 29, status: true}
// ];
// localStorage.setItem('users', JSON.stringify(users));

let usersJSON = localStorage.getItem('users');
console.log(usersJSON);
let users = JSON.parse(usersJSON);
console.log(users);
users.push([]);
console.log(users);
localStorage.setItem('users', JSON.stringify(users));