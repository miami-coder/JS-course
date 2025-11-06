let input = document.getElementById('xxx');
let resDiv = document.getElementById('res');
input.oninput = function () {
    resDiv.innerText = +this.value * 2.2;
}