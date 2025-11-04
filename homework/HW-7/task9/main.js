// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// }
// let numbers = [11, 22, 33];
// numbers.myForEach(function (num, index, arr) {
//     console.log(`#${index}: ${num}`);
// });



Array.prototype.myFilter = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}

let numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
let filtered = numbers.myFilter(function (num) {
    return num > 40;
});
console.log(filtered);