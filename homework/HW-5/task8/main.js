let foobar = (arrayOfPrimitives) => {
    document.write(`<ul>`)
    for (let item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`)
}

foobar(['Hello, World!', 10, undefined, NaN, true]);