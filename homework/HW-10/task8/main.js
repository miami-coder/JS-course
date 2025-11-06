let table = document.getElementById('table');

let tableGenerator = document.forms['tableGenerator'];

tableGenerator.onsubmit = function (e) {
    table.innerText = '';
    e.preventDefault();
    let linesValue = +tableGenerator.lines.value;
    let cellsValue = +tableGenerator.cells.value;
    let dataValue = tableGenerator.data.value;
    console.log(linesValue, cellsValue, dataValue);

    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            let td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}