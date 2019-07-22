const {isValidStartEnd, isValidNumber, isValidMultiplicationPara, generateMultiplicationTable} = require('../multiplication-table');

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

describe('test start and end are valid', () => {
    it('should return true when start is 2 and end is 4', () => {
        expect(isValidMultiplicationPara(2, 4)).toBeTruthy();
    });

    it('should return false when start is -1, out of range', () => {
        expect(isValidMultiplicationPara(-1, 4)).toBeFalsy();
    });

    it('should return false when end is 1002, out of range', () => {
        expect(isValidMultiplicationPara(2, 1002)).toBeFalsy();
    });

    it('should return false when start is 4 and end is 2, misorder', () => {
        expect(isValidMultiplicationPara(4, 2)).toBeFalsy();
    });
});

describe('test generateMultiplicationTable', () => {
    it('should return 1 line when start is 2 and end is 2', () => {
        expect(generateMultiplicationTable(2, 2)[0]).toBe('2 * 2 = 4');
    });

    it('should return 2 line when start is 2 and end is 3', () => {
        let multiplicationTable = generateMultiplicationTable(2, 3);
        expect(multiplicationTable.length).toBe(2);
        expect(multiplicationTable[0]).toBe('2 * 2 = 4');
        expect(multiplicationTable[1]).toBe('2 * 3 = 6 3 * 3 = 9');
    });
});

