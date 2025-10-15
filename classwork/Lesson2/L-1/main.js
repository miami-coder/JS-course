let arr = [123, 231, 345, -123, 0, true, 'qwerty'];
console.log(arr);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[4]);
console.log(arr.length);

arr[0] = 'new value';
console.log(arr);

arr[7] = 'okten';
console.log(arr);

arr[arr.length] = 123321123;
console.log(arr);

arr[arr.length] = 'fgdhdhdhdhdhdh';
console.log(arr);