app.controller('SimpleDirectiveController', function($scope) {
    $scope.customer = {
      name: 'Igor',
      address: '123 Somewhere',
      poscode: 'Somewhere'
    };
});

app.directive('helloWorld', function() {
    return {
        restrict: 'AE',
        replace: true,
        
        // Isolate scope:
        // separate the scope inside a directive from the scope outside, and then map the outer scope to a directive's inner scope. 
        scope: {
            customerInfo: '=info'
        },
        
        //templateUrl points to an external html template.
        templateUrl: 'fixture/hello.html', 
        
        // if you are using compile then this will be ignored by angular.
        link: function(scope, elem, attrs) {
          elem.bind('click', function() {
            elem.css('background-color', 'red');
          });
          elem.bind('mouseover', function() {
            elem.css('cursor', 'pointer');
          });
        }
    };
});


/*

When a directive is declared with `template` (or `templateUrl`) and `replace` mode on, the template must have exactly one root element.
Otherwise the replacement operation would result in a single element being replaced with multiple elements or nodes, which is unsupported and not commonly needed in practice.

For example a directive with definition:
 ```
 myModule.directive('myDirective', function factory() {
   return {
     ...
     replace: true,
     templateUrl: 'someUrl'
     ...
   }
 });
 ```
 
 And a template provided at URL `someUrl`. The template must be an html fragment that has only a single root element, like the `div` element in this template:
 ```
 <div><b>Hello</b> World!</div>
 ```
 
 An an invalid template to be used with this directive is one that defines multiple root nodes or elements. For example:
 ```
 <b>Hello</b> World!
 ```
*/