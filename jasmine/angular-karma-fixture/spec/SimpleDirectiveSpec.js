describe("simpleDirective Test ", function(){
    
    // Boilerplate starts from here...
    var scope, element, template;
    
    //load all modules, including the html template, needed to support the test
    //beforeEach(module("myApp", 'fixture/hello.html'));
    
    // Name of the module my directive is in.
    beforeEach(module('myApp'));
    
    // The external template file referenced by templateUrl.
    // load the templates
    beforeEach(module('fixture/hello.html'));
    
    // This way you should inject your html file into your test manually.
    if (typeof window.__karma__ === 'undefined') {
        angular.module("fixture/hello.html", []).run(["$templateCache", function($templateCache) {
            $templateCache.put("fixture/hello.html","<div class=\"customer\"><b>Hello</b> {{customerInfo.name}}</div>");
        }]);
    } 

    beforeEach(inject(function($compile,$rootScope) {
 
        // Move this tpl into an html file as well...
        element = angular.element('<div data-hello-world info="customer"></div>');
        scope = $rootScope;
        
        // Compile the directive
        $compile(element)(scope);
        
        // Update the HTML
        scope.$digest();
    }));
    // ...Boilerplate ends here
    
    // Tests go below here.
    it('renders the customer template', function() {
        
        // jQuery's check to be true or false --> hasClass.
        var customer = element.hasClass('customer');
        //console.log (customer); // true
        
        // Make our assertions.
        expect(customer).toBe(true);
    });
    
    it('renders Hello', function() {
        
        // jQuery's search to find an element.
        var caption = element.find('b');
        //console.log(caption); // 1
        
        // Make our assertions.
        expect(caption.length).toBe(1);
        expect(caption.text()).toBe('Hello');
    });
    
    // Test the scope.
    it('renders Igor and empty', function() {
        
        // Test whether an empty address is formatted correctly
        // Fields could be empty strings, or nulls
        scope.customer = {
            name: 'Igor',
            address: '',
            city: 'Somewhere'
        };
        
        // Update the HTML.
        // Note that you have to repeate this line.
        scope.$digest();
        
        // Get the isolate scope for the directive
        var isoScope = element.isolateScope();
    
        console.log(element.scope()); // 1
        console.log(isoScope);
        console.log(isoScope.customerInfo); 
        
        // Make our assertions.
        // This makes sure the scope 'customerInfo' must be present in your directive.
        expect(isoScope.customerInfo).toEqual(jasmine.any(Object));
        expect(isoScope.customerInfo.address).toBeDefined();
        expect(isoScope.customerInfo.poscode).toBeUndefined();
        expect(isoScope.customerInfo.address).toBe('');
        expect(isoScope.customerInfo.name).toBe('Igor');
    });
   
});