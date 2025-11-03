let map = new Map();
console.log(map);
let chavaro = {id: 'chavaro'};
let arkadiy = {id: 'arkadiy'};

map.set(chavaro, {name: 'John', surname: 'Pedro'});
map.set(arkadiy, {name: 'Petro', surname: 'Agafonov'});
console.log(map);

console.log(map.get(chavaro));
// map.delete(chavaro);
console.log(map);
console.log(map.size);
console.log(map.keys())

let from = Array.from(map.keys());
console.log(from);

console.log(map.values());
console.log(Array.from(map.values()));