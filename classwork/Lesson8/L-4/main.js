let user = {
    name: 'Petro',
    skills: ['html', 'css'],
    greeting() {

    }
}
// let userClone = {...user};
// console.log(user === userClone);

// const s = JSON.stringify(user); // Convert to JSON
let userJsonClone = JSON.stringify(user); // Convert to JSON
console.log(userJsonClone);
let parse = JSON.parse(userJsonClone);
console.log(parse);
console.log(user);
let assign = Object.assign({}, user);
console.log(assign);