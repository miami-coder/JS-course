const target = document.getElementById('target');
console.log(target.innerText);
// target.innerText = 'Hello World!';
target.style.backgroundColor = 'red';
// console.log(target.classList)
// target.classList.add('active');
// console.log(target.classList.item(0));
// console.log(target.classList.contains('active'));

// console.log(target.getAttribute('xxx'));
// console.log(target.getAttribute('id'));
// console.log(target.getAttribute('class'));
// console.log(target.getAttribute('style'));
// target.setAttribute('id', 'qwerty');

console.log(target.previousElementSibling);
console.log(target.nextElementSibling);
console.log(target.children);
console.log(target.childNodes);
target.innerHTML = '<b>qqqqqqqqqqqqqqqqq</b>';
console.log(target.outerHTML);