// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((json) => {
//         for (const {name, username, email} of json) {
//             document.write(`<div>
//                 ${name} ${username} ${email}
//             </div>`)
//         }
//     });

// fetch('https://dummyjson.com/products?limit=100')
//     .then((value) => value.json())
//     .then(res => {
//         console.log(res);
//         let {products} = res;
//         document.write(`<div>`)
//         for (const product of products) {
//             document.write(`<div>`);
//             document.write(`<p>${product.id}___ ${product.brand} - ${product.price}</p>`);
//             document.write(`<img src="${product.thumbnail}" alt="">`);
//             document.write(`</div>`);
//         }
//         document.write(`</div>`)
//     });

// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         title: 'BMW Pencil',
//     })
// })
//     .then(res => res.json())
//     .then(console.log);

console.log('start')
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(json => {
        let btn = document.createElement('button');
        btn.setAttribute('class', 'btn btn-success');
        btn.innerText = 'do';
        document.body.appendChild(btn);
    });
console.log('end')