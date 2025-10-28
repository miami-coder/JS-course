// function filter(arr, predicate) {
//     let exitArr = [];
//     if (predicate === 'хочу парні') {
//         for (let item of arr) {
//             if (item % 2 === 0) {
//                 exitArr[exitArr.length] = item;
//             }
//         }
//     }
//     if (predicate === 'хочу не парні') {
//         for (let item of arr) {
//             if (item % 2 !== 0) {
//                 exitArr[exitArr.length] = item;
//             }
//         }
//     }
//     return exitArr;
// }
//
// // console.log(filter([11, 22, 33, 44, 55], 'хочу парні'));
// // console.log(filter([11, 22, 33, 44, 55], 'хочу не парні'));
//
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
//
// filter(users, );

function filter(arr, callback) {
    let mass = [];
    for (let item of arr) {
        if (callback(item)) {
            mass[mass.length] = item;
        }
    }
    return mass;
}

console.log(filter([11, 22, 33, 44, 55], (item) => item % 2 === 0));

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

console.log(filter(users, (user) => user.age > 23));