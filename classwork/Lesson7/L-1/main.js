function User(name, age, status, wifeName, wifeAge) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.wife = {name: wifeName, age: wifeAge};
}

let user1 = new User('petro', 25, true);
let user2 = new User('stepan', 32, false);
let user3 = new User('ivan', 28, true, 'anna', 23);
console.log(user3);