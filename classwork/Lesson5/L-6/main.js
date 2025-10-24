// function* foo() {
//     yield 100;
//     yield 200;
//     yield 300;
// }
// let fooGenerator = foo();
// console.log(fooGenerator);
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());
// console.log(fooGenerator.next());

function* cardsHolder() {
    const cards = [
        {value: 6,suite: 'diamond',},
        {value: 7,suite: 'spade',},
        {value: 8,suite: 'diamond',},
        {value: 9,suite: 'spade',},
    ]
    for (const card of cards) {
        yield card;
    }
}
const cardsHolderGenerator = cardsHolder();
console.log(cardsHolderGenerator.next());
const card1 = cardsHolderGenerator.next();
console.log(card1.value);
const card2 = cardsHolderGenerator.next();
console.log(card2.value);
const card3 = cardsHolderGenerator.next();
console.log(card3.value);