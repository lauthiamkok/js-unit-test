describe('Function countLength', function () {
    it('says int 1', function () {
        expect(countLength()).toEqual(1);
    });
    it("says it is a number", function () {
        expect(countLength()).toEqual(jasmine.any(Number) || null);
    });
});