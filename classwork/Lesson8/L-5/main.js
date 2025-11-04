let base = {
    id: 1,
    name: 'John'
}

let copy = Object.create(base);
copy.surname = 'qwerty';
console.log(base);
console.log(copy);
console.log(copy.hasOwnProperty('id'));
console.log(copy.hasOwnProperty('surname'));

let obj = {};
obj.__proto__ = base;
console.log(obj);