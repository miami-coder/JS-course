// const h2 = document.createElement('h2');
// h2.innerText = 'some title';
// document.body.appendChild(h2);

let allUsersDiv = document.getElementsByClassName('users')[0];
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
for (const user of users) {
    let div = document.createElement('div');
    div.classList.add('user');
    div.innerText = user.name;
    allUsersDiv.appendChild(div);
}