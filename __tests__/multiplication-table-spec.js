const {isValidStartEnd, isValidNumber} = require('../multiplication-table');

describe('test start should less than or equal end', () => {
    it('should return true when start less than end', () => {
        expect(isValidStartEnd(2, 4)).toBeTruthy();
    });

    it('should return true when start equal end', () => {
        expect(isValidStartEnd(2, 2)).toBeTruthy();
    });

    it('should return false when start equal end', () => {
        expect(isValidStartEnd(3, 2)).toBeFalsy();
    });
});

describe('test input number is in valid range', () => {
    it('should return true when number is 1', () => {
        expect(isValidNumber(1)).toBeTruthy();
    });

    it('should return true when number is 1000', () => {
        expect(isValidNumber(1000)).toBeTruthy();
    });

    it('should return true when number is 2, 100, 999, between 1 and 1000', () => {
        expect(isValidNumber(2)).toBeTruthy();
        expect(isValidNumber(100)).toBeTruthy();
        expect(isValidNumber(999)).toBeTruthy();
    });

    it('should return false when number is 0, not between 1 and 1000', () => {
        expect(isValidNumber(0)).toBeFalsy();
    });

    it('should return false when number is 1001, not between 1 and 1000', () => {
        expect(isValidNumber(1001)).toBeFalsy();
    });
});


