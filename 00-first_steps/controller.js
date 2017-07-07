app.controller('nameController', function($scope,personService){
    $scope.firstName = "Itachi";
    $scope.lastName = "Uchiha";

    $scope.printName = function(){
        return personService.printName($scope.firstName, $scope.lastName)
        }
});
