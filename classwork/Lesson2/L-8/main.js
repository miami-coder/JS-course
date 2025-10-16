// let color = 'green';
// if (color === 'red') {
//     console.log('stop');
// }else {
//     console.log('go!');
// }

// let age = +prompt("Enter your age?");
// if (age >= 18) {
//     console.log('adult');
// } else {
//     console.log('cartoon');
// }

let color = prompt('Enter color!');
let isRoadClear = confirm('is road clear');
if (color === 'green' && isRoadClear) {
    console.log('go');
} else if (color === 'yellow') {
    console.log('wait');
} else if (color === 'red') {
    console.log('stop');
} else {
    console.log('error');
}