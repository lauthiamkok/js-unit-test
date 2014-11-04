var app = angular.module("myApp", []);

app.controller('SimpleController', function($scope) {
    $scope.message = "Hello World";
    $scope.name = "World";
    $scope.sayHello = function() {
        return $scope.greeting = "Hello " + $scope.name;
    };
});

app.factory("SimpleService", function(){
    var service = {
        prop:'Hello World',
        getData: function(){
            return [{
                id: 1,
                name: "Mark"
            }];
        }

    };

    return service;
});