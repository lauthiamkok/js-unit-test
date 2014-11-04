describe('SimpleController Test', function() {
    
    // Boilerplate starts from here...
    // Load the module with MainController
    beforeEach(module('myApp'));

    var controller, scope;
  
    // inject the $controller and $rootScope services.
    // in the beforeEach block.
    beforeEach(inject(function ($rootScope, $controller) {
        
        // Create a new scope that's a child of the $rootScope.
        scope = $rootScope.$new();
        
        // Create the controller.
        controller = $controller;
        controller("SimpleController", {$scope: scope});
    }));
    // ...Boilerplate ends here
    
    // Our tests will go here.
    it("should assign message to hello world", function () {
        expect(scope.message).toBe("Hello World");
    });
  
    it('should create $scope.greeting and say \'Hello World\' when calling sayHello method', function() {
        expect(scope.greeting).toBeUndefined();
        expect(scope.name).toEqual("World");
        scope.sayHello();
        expect(scope.greeting).toEqual("Hello World");
    });
});

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

