let time = +prompt("Enter number 0 to 60");
if (time >= 0 && time < 15) {
    console.log('1');
} else if (time >= 15 && time < 30) {
    console.log('2');
} else if (time >= 30 && time < 45) {
    console.log('3');
} else if (time >= 45 && time < 60) {
    console.log('4');
}