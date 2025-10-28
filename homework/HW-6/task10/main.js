function createDeck() {
    const suits = ['spade', 'diamond', 'heart', 'clubs'];
    const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    const deck = [];

    for (const suit of suits) {
        for (const value of values) {
            const color = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';
            deck.push({cardSuit: suit, value, color});
        }
    }

    return deck;
}


const newDeck = createDeck();


const spadeAce = newDeck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
const sixes = newDeck.filter(card => card.value === '6');
const redCards = newDeck.filter(card => card.color === 'red');
const diamonds = newDeck.filter(card => card.cardSuit === 'diamond');
const clubs9plus = newDeck.filter(card =>
    card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)
);


console.log('Spade Ace', spadeAce);
console.log('Sixes', sixes);
console.log('All red cards', redCards);
console.log('Diamonds', diamonds);
console.log('Cards 9+', clubs9plus);
