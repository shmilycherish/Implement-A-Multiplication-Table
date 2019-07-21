function isValidStartEnd(start, end) {
    return start <= end
}

function isValidNumber(input) {
    return input >= 1 && input <= 1000;
}

module.exports = {
    isValidStartEnd,
    isValidNumber
}