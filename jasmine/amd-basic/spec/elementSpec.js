// A suite is just a fancy name for a collection of tests so that you can organize your tests into related blocks. Here's how describe looks in action:
/*
describe("A description or subject for your test suite", function(){
    // ... Write your tests here.
});
*/

// Suites can be nested inside of each other too. This allows you fine-grained organization of code into hierarchical structures.
// Option 1:
describe('Advanced AMD', function () {

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

});

// Option 2:
describe('Advanced AMD', function () {

    describe('Plugin element', function () {
        
        // Setup & Cleanup
        // This way, if you have some common setup or teardown procedures, you can place them inside one of these functions and only write it once instead of repeating it within each of your it blocks.
        
        // Setup
        // It means each of 'it(...)'.
        beforeEach(function(){ 
            // Run some setup, like creating new objects
            var plugin = $(document).element().data('plugin_element');
            
            // What’s this
            // This means that you can define something in beforeEach with this.someObj = … and you can access that object within it with this.someObj. 
            this.test = plugin.getHtml(".elem");
        });

        // Cleanup
        // It means each of 'it(...)'.
        afterEach(function(){
            // Run some cleanup like disconnecting WebSockets
            this.test = null;
        });
        
        it("says string 'Hello World'", function () {
            // beforeEach is run before this
            expect(this.test).toEqual('Hello World');
            // afterEach is run after this
        });

        it("says it is a string", function () {
            // beforeEach is run before this
            expect(this.test).toEqual(jasmine.any(String) || null);
            // afterEach is run after this
        });

        it("contains 'Hello'", function () {
            // beforeEach is run before this
            expect(this.test).toContain('Hello');
            // afterEach is run after this
        });
    });

});