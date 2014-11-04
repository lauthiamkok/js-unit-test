describe('Plugin element', function () {
    var plugin = $(document).element().data('plugin_element');
    
    it("says string 'Hello World'", function () {
        expect(plugin.getHtml(".elem")).toEqual('Hello World');
    });
    
    it("says it is a string", function () {
        expect(plugin.getHtml(".elem")).toEqual(jasmine.any(String) || null);
    });
    
    it("contains 'Hello'", function () {
        expect(plugin.getHtml(".elem")).toContain('Hello');
    });
});