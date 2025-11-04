// let user = {
//     name: "John",
//     age: 32
// }
//
// let user2 = user;
// console.log(user === user2);

// let user = {
//     name: "John",
//     age: 32
// }
// let userCopy = {...user};
// console.log(userCopy);
// console.log(userCopy === user);
// userCopy.age = 0;
// console.log(userCopy);
// console.log(user);

let nums = [11, 22, 33];
let nums2 = [...nums];
console.log(nums === nums2);