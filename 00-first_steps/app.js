var app = angular.module('myApp',[]);

app.controller('nameController', function($scope){
    $scope.firstName = "Itachi";
    $scope.lastName = "Uchiha";

    $scope.printName = function(){
        return $scope.firstName + ' ' + $scope.lastName;
    }
})
