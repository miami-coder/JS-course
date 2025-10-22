// function calc(a, b) {
//     let result = a + b;
//     return result;
// }
// let r1 = calc(10, 20);
// let r2 = calc(20, 30);
// console.log(r1, r2);

// function percentage(cash, per) {
//     return cash / 100 * per;
// }
//
// function tax(sum) {
//     return sum - percentage(sum, 20) - percentage(sum, 1.5);
// }
//
// let number = tax(10000);
// console.log(number);

function userFilter(users) {
    let filteredUsers = [];
    for (const user of users) {
        if (user.age > 25) {
            filteredUsers.push(user);
        }
    }
    return filteredUsers;
}
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
let filter = userFilter(users);
console.log(filter);