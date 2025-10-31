let arr = [1, 2, 'asd', true, 7, 'qwe', false, true];
for (const arrElement of arr) {
    if(typeof arrElement === 'boolean') {
        console.log(arrElement);
    }
}