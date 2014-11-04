describe("SimpleService Test 1", function(){
    
    // Boilerplate starts from here...
    beforeEach(module("myApp"));

    var service;

    beforeEach(inject(function(SimpleService){
       service = SimpleService;
    }));
    // ...Boilerplate ends here
    
    // Our tests will go here.
    describe("getData", function(){
        it("should return an array of items", function(){
            expect(service.getData()).toBeDefined();
        });
        
        it("should return an object", function(){
            expect(service.getData()).toEqual(jasmine.any(Object));
        });
    });
    
    describe('when I call SimpleService.prop', function(){
        it("returns Hello World", function(){
            expect(service.prop).toEqual('Hello World');
        });
    });
});

describe("SimpleService Test 2", function(){

    describe('when I call SimpleService.prop', function(){
        beforeEach(module('myApp'));
        it('returns Hello World', inject(function(SimpleService){ //parameter name = service name
            expect( SimpleService.prop ).toEqual('Hello World');
        }))
    });
    
});

