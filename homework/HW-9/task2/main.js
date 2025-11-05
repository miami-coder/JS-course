let arr = ['Main', 'Products', 'About us', 'Contacts'];
let menu = document.createElement('ul');
menu.classList.add('menu');

for (const item of arr) {
    let li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li);
}

document.body.appendChild(menu);