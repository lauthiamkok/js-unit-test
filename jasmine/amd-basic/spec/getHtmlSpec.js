describe('Plugin $.fn.getHTML', function () {
    it("says string 'Element'", function () {
        expect($('.elem').getHtml()).toEqual('Element');
    });
    
    it("says it is a string", function () {
        expect($('.elem').getHtml()).toEqual(jasmine.any(String) || null);
    }); 
});
/*
describe('Function countLength', function () {
    it('says int 1', function () {
        expect(countLength()).toEqual(1);
    });
    it("says it is a number", function () {
        expect(countLength()).toEqual(jasmine.any(Number) || null);
    });
});

describe('Plugin $.fn.getHTML', function () {
    it("says string 'Element'", function () {
        expect($('.elem').getHtml()).toEqual('Element');
    });
    
    it("says it is a string", function () {
        expect($('.elem').getHtml()).toEqual(jasmine.any(String) || null);
    }); 
});

describe('Plugin element', function () {
    var plugin = $(document).element().data('plugin_element');
    
    it("says string 'Element'", function () {
        expect(plugin.getHtml(".elem")).toEqual('Element');
    });
    
    it("says it is a string", function () {
        expect(plugin.getHtml(".elem")).toEqual(jasmine.any(String) || null);
    });
});
*/