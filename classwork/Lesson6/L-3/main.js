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

// users.forEach(function (value) {
//     console.log(value);
// });

// users.forEach(value => console.log(value));


// let filteredUsers = users.filter(function (value) {
//     return value.age > 22;
// });
// console.log(filteredUsers);


// let filteredUsers = users.filter(value => value.age > 24);
// console.log(filteredUsers);


// let mapedUsers = users.map(function (value, index) {
//     return {...value, id: index + 1};
// })
// console.log(mapedUsers);

// users.map((value,index) => {
//     return {id: index + 1, name: value.name, age: value.age, status: value.status};
// })

// let find = users.find(value => value.name === 'petro');
// console.log(find);

// якщо всі елементи тру то поверне тру якщо хоть один фолс то поверне фолс
// console.log(users.every(value => value.status));

// якщо хоть один елемент буде тру то поверне тру якщо жодного то поверне фолс
// console.log(users.some(value => value.status));

// let sort = users.sort((a, b) => {
//     return b.age - a.age;
// })
// console.log(sort);

// console.log(users.sort((a, b) => {
//     if (a.name < b.name) {
//         return 1;
//     }
//     if (a.name > b.name) {
//         return -1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// }));

let reduce = users.reduce((accumulator, user) => {
    if (user.status) {
        accumulator.statT.push(user);
    } else {
        accumulator.statF.push(user);
    }
    return accumulator;
}, {statT: [], statF: []});

console.log(reduce);
console.log(users);