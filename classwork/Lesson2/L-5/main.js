let users = [
    {skills: ['html', 'mysql', 'mongo'], id: 1, name: 'vasya', age: 18, status: true},
    {skills: ['html', 'js'], id: 2, name: 'petya', age: 21, status: false},
    {skills: ['html', 'js'], id: 3, name: 'anna', age: 23, status: true},
    {skills: ['html', 'mysql', 'mongo'], id: 4, name: 'olya', age: 32, status: false}
];
console.log(users);
let user0 = users[0];
console.log(user0.age);
console.log(users[0]['age']);
console.log(users[0].skills[2]);
console.log(users[0]['skills'][2]);
let user = users[0];
let skills = user['skills'];
console.log(skills[1]);