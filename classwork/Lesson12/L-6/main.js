// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => {
//         for (const user of users) {
//             fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id)
//                 .then((value) => value.json())
//                 .then(postsOfIteratedUsers => {
//                     user.posts = postsOfIteratedUsers;
//                 });
//             console.log(user);
//         }
//     });
let users = fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())

let posts = fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
//
// Promise.all([users, posts]).then(result => {
//     let [users, posts] = result;
//     for (const user of users) {
//         user.post = [];
//         for (const post of posts) {
//             if (user.id === post.id) {
//                 user.post.push(post);
//             }
//         }
//     }
//     console.log(users);
// });

Promise.race([users, posts]).then(values => console.log(values));
Promise.any([users, posts]).then(values => console.log(values));