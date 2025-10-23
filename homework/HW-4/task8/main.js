function foobar(arrayOfPrimitives) {
    document.write(`<ul>`)
    for (let item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
foobar(['hi world!', 123, true, undefined, NaN]);