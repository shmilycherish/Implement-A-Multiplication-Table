function isValidStartEnd(start, end) {
    return start <= end
}

function isValidNumber(input) {
    return input >= 1 && input <= 1000;
}

function isValidMultiplicationPara(start, end) {
    return isValidNumber(start) && isValidNumber(end) && isValidStartEnd(start, end);
}

module.exports = {
    isValidStartEnd,
    isValidNumber,
    isValidMultiplicationPara
};