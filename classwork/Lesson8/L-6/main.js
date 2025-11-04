let user = {
    firstName: "John",
    lastName: "Doe",
}
// user.firstName = "Petro";
// console.log(user);
// for (const userElement in user) {
//     console.log(userElement);
// }

Object.defineProperty(
    user,
    'id',
    {
        value: 100500,
        writable: false,
        enumerable: true,
        configurable: false,
    }
)
console.log(user);
for (const userKey in user) {
    console.log(userKey);
}