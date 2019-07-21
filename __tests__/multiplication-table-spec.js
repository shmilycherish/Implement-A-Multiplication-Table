const isValidStartEnd = require('../multiplication-table')

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

