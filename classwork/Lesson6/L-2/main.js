let arr = [];
// визначає чи це масив
console.log(Array.isArray(arr));

// додає новий елемент в кінець масиву
console.log(arr.push('new element'));
console.log(arr.push('new element2'));
console.log(arr.push('new element3'));
console.log(arr);

// вирізає останій елемент з масиву
console.log(arr.pop());
console.log(arr);

// додає новий елемент на початок масиву
console.log(arr.unshift('!!!'));
console.log(arr);

// видаляє елемент з початку масиву
console.log(arr.shift());
console.log(arr);

// з'єднує елементи між собою
let join = arr.join(';');
console.log(join);

// з'єднує масиви між собою
let nums = [11, 22, 33];
let concat = arr.concat(nums);
console.log(concat);
// після конкат сам арр лишився не зміненим
console.log(arr);

// реверс масив [1, 2, 3] буде [3, 2, 1]
console.log(nums.reverse());

// обрізає масив з зазначених індексів. вирізаний шматок повертається новим масивом
console.log(concat);
let slice = concat.slice(0, 4);
console.log(slice);

// видаляє елементи з певних індексів і робить їх новим масивом. від 3 аргумента можна вказати що додати на місце видалених елементів
let splice = concat.splice(0, 2, '!!!');
console.log(splice);
console.log(concat);

// перевіряє наявність елемента в масиві
console.log(concat.includes(11));