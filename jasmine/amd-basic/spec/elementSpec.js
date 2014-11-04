describe('Plugin element', function () {
    var plugin = $(document).element().data('plugin_element');
    
    it("says string 'Element'", function () {
        expect(plugin.getHtml(".elem")).toEqual('Element');
    });
    
    it("says it is a string", function () {
        expect(plugin.getHtml(".elem")).toEqual(jasmine.any(String) || null);
    });
});