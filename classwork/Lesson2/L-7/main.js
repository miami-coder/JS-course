let a = 100;
let b = a;
b = b + 10;
console.log(b);

let user = {name: 'vasya'};
let user2 = user;
console.log(user2);
user2.age = 20;
console.log(user2);
console.log(user);