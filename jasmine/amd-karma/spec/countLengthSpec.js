// Set the HTML that you wan to test
function setUpHTMLFixture() {
    jasmine.getFixtures().set('<div class="elem">Hello World</div>');
}

describe('Function countLength', function () {
    beforeEach(function(){
        setUpHTMLFixture();
    });
    
    it('says int 1', function () {
        expect(countLength()).toEqual(1);
    });
    it("says it is a number", function () {
        expect(countLength()).toEqual(jasmine.any(Number) || null);
    });
});