const grid = document.getElementById('grid');
const heads = document.querySelectorAll('.head');

grid.addEventListener('click', function (event) {
    if (event.target.tagName != 'TH') {
        return;
    }

    sort(event.target.cellIndex, event.target.dataset.type)
})

function sort(colNumber, type) {
    let tbody = document.querySelector('tbody');
    let rows = Array.from(tbody.querySelectorAll('tr'));
    let compare;
    switch (type) {
        case 'number':
            compare = function (rowA, rowB) {
                return rowA.cells[colNumber].innerHTML - rowB.cells[colNumber].innerHTML
            };
            break;
        case 'string':
            compare = function (rowA, rowB) {
                return rowA.cells[colNumber].innerHTML > rowB.cells[colNumber].innerHTML ? 1 : -1;
            };
            break;
    }

    rows.sort(compare);
    tbody.append(...rows);
}
