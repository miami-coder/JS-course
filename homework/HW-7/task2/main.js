function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user = new User(1, 'Stepan', 'qwerty', '+123567890');

let users = [
    new User(1, 'Stepan', 'qwerty', '@gmail1', '+123567890'),
    new User(2, 'Stepan', 'qwerty', '@gmail2', '+123567890'),
    new User(3, 'Stepan', 'qwerty', '@gmail3', '+123567890'),
    new User(4, 'Stepan', 'qwerty', '@gmail4', '+123567890'),
    new User(5, 'Stepan', 'qwerty', '@gmail5', '+123567890'),
    new User(6, 'Stepan', 'qwerty', '@gmail6', '+123567890'),
    new User(7, 'Stepan', 'qwerty', '@gmail7', '+123567890'),
    new User(8, 'Stepan', 'qwerty', '@gmail8', '+123567890'),
    new User(9, 'Stepan', 'qwerty', '@gmail9', '+123567890'),
    new User(10, 'Stepan', 'qwerty', '@gmail10', '+123567890'),
];

const filterFunction = (user) => user.id % 2 === 0
let filter = users.filter(filterFunction);
console.log(filter);