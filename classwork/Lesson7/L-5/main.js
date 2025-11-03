// let set = new Set();
// set.add('qwe');
// set.add('asd');
// set.add('qwe');
// set.add('qaz');
// console.log(set);
// console.log(set.has('qwe'));
// set.delete('qwe');
// console.log(set);
// console.log(set.size);
//
// set.forEach(value => console.log(value));
//
// let arrayFromSet = Array.from(set);
// console.log(arrayFromSet);

let set = new Set([11, 22, 33, 44, 11, 22, 55]);
console.log(set);
let numbers = Array.from(set);
console.log(numbers);