function addToLocalStorage(arrayName, objToAdd) {
    const LsItem = localStorage.getItem(arrayName);
    if (!LsItem) {
        throw new Error('there is no such array');
    }

    const array = JSON.parse(LsItem);
    if (typeof objToAdd === 'object') {
        array.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(array));
}

addToLocalStorage('sessionsList', {});