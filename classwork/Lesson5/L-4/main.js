// let user = {name: "John", age: 15};
// user.age = -100500;

function userBuilder(name, age) {
    let user = {name, age};
    return {
        getName() {
            return user.name;
        },
        getAge() {
            return user.age;
        },
        setAge(age) {
            if (age > 0) {
                user.age = age;
            }
        }
    }
}
let builder = userBuilder('vasya', 25);
console.log(builder);
console.log(builder.getName());
console.log(builder.getAge());
builder.setAge(100);
console.log(builder.getAge());