// function calc(a, b) {
//     return a + b;
// }
// function calc(a, b, c) {
//     return a + b;
// }

function foobar() {
    console.log(arguments);
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2];
    }
}

foobar(10, 20);