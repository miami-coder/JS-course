let books = [
    {title: 'qwerty', pageCount: 100, authors: ['qwe'], genre: ['fghjk']},
    {title: 'asdfgrfc', pageCount: 110, authors: ['asd', 'poi'], genre: ['kjhgfds', 'thriller']},
    {title: 'zxcvbn', pageCount: 150, authors: ['zxc'], genre: ['qazxsw', 'fantasy', 'drama']},
    {title: 'yhbujnikm', pageCount: 190, authors: ['vcxz', 'bgh'], genre: ['edcvfr']}
];

// let maxPage = books[0];
// for (let book of books) {
//     if (book.pageCount > maxPage.pageCount) {
//         maxPage = book;
//     }
// }
// console.log(maxPage);

// let genreBook = books[0];
// for (let book of books) {
//     if (book.genre.length > genreBook.genre.length) {
//         genreBook = book;
//     }
// }
// console.log(genreBook);

// let titleBook = books[0];
// for (let titleLength of books) {
//     if (titleLength.title.length > titleBook.title.length) {
//         titleBook = titleLength;
//     }
// }
// console.log(titleBook);

for (let book of books) {
    if (book.authors.length === 1) {
        console.log(book);
    }
}