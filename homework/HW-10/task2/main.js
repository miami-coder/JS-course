let f1 = document.getElementById('age');
let u1 = document.getElementById('userAge');
let button = document.getElementById('btn');
button.onclick = function(ev) {
    ev.preventDefault();
    if (u1.value < 18) {
        console.log('child')
    } else {
        console.log('adult')
    }
}