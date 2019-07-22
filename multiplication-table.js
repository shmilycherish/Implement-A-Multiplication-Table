function isValidStartEnd(start, end) {
    return start <= end
}

function isValidNumber(input) {
    return input >= 1 && input <= 1000;
}

function isValidMultiplicationPara(start, end) {
    return isValidNumber(start) && isValidNumber(end) && isValidStartEnd(start, end);
}

function formatMultiplication(multiplicand, multiplier) {
    const result = multiplicand * multiplier;
    return `${multiplicand} * ${multiplier} = ${result}`
}

function generateMultiplicationTable(start, end) {
    let multiplicationTable = [];
    for(let i = start; i <= end; i++) {
        let multiplicationTableLine = [];
        for (let j = start; j <= i ; j++) {
            multiplicationTableLine.push(formatMultiplication(j, i));
        }
        multiplicationTable.push(multiplicationTableLine.join(' '))
    }
    return multiplicationTable;
}

module.exports = {
    isValidStartEnd,
    isValidNumber,
    isValidMultiplicationPara,
    generateMultiplicationTable
};