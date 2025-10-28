function stringToArray(str) {
    if (str) {
        let split = str.split(' ');
        return split;
    }
    return [''];
}

console.log(stringToArray('Ревуть воли як ясла повні'));