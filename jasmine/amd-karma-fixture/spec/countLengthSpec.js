// Set the HTML that you wan to test.
/*
function setUpHTMLFixture() {
    jasmine.getFixtures().set('<div class="elem">Hello World</div>');
}
*/

describe('Function countLength', function () {
    var path = '';
    if (typeof window.__karma__ !== 'undefined') {
        path += 'base/';
    } 
    
    beforeEach(function(){
        //alert(typeof window.__karma__);
        //alert(typeof window.karma);
        
        // Using external file to load the html test. 
        // Then you can remove setUpHTMLFixture();
        jasmine.getFixtures().fixturesPath = path + 'fixture/';
        jasmine.getFixtures().load('main.html');
    });
    
    it('says int 1', function () {
        expect(countLength()).toEqual(1);
    });
    it("says it is a number", function () {
        expect(countLength()).toEqual(jasmine.any(Number) || null);
    });
});