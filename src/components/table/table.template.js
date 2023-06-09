const CODES = {
    A: 65,
    Z: 90
}
function createCell() {
    return `<div class="cell" contenteditable></div>`
}
function toColumn(col) {
    return `
        <div class="column">
            ${col}
        </div>
    `
}
function createRow(content, index) {
    return `
        <div class="row">
            <div class = "row-info">${index ? index : ''}</div>
            <div class = "row-data">${content ? content : null}</div>
        </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}
export function createTable(rowsCount = 15) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []
    const cols = new Array(colsCount)
        .fill('')
        // (el, index) => {return String.fromCharCode(CODES.A + index)}
        .map(toChar)
        .map(toColumn) // el => {return createCol(el)}
        .join('')
    rows.push(createRow(cols))
    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(createCell)
            .join('')
        rows.push(createRow(cells, i + 1))
    }
    return rows.join('')
}