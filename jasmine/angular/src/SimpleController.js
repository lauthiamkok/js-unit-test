var app = angular.module("myApp", []);

app.controller('SimpleController', function($scope) {
    $scope.message = "Hello World";
    $scope.name = "World";
    $scope.sayHello = function() {
        return $scope.greeting = "Hello " + $scope.name;
    };
});