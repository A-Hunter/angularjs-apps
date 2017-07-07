var app = angular.module('myApp',[]);


app.factory('personService', function(){
    var person = {};
    person.printName = function(firstName, lastName){
        return firstName + ' ' + lastName;
    }
    return person;
});


app.controller('nameController', function($scope,personService){
    $scope.firstName = "Itachi";
    $scope.lastName = "Uchiha";

    $scope.printName = function(){
        return personService.printName($scope.firstName, $scope.lastName)
        }
});
