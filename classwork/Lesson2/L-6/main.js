let user = {
    id: 1,
    name: 'John',
}
user.age = 31;
console.log(user);
user['status'] = false;
console.log(user);

delete user.id;
console.log(user);