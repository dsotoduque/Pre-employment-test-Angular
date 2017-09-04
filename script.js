var app = angular.module('AngularTest', []);
app.controller('Controller', ['$scope', function($scope, $http) {

	$http.get("patients.json").success(function(data){ $scope.patients = data});

	$scope.greaterThan = function(property, constraint){
    return function(item){
      return item[property] > constraint;
    }
};

}]);

