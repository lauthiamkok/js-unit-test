angular.module('myApp', []).controller('MainController', function($scope) {
  $scope.name = "Ari";
  $scope.sayHello = function() {
    return $scope.greeting = "Hello " + $scope.name;
  }
})