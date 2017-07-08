angular.module('eventApp').controller('mainCtrl', function($scope){
    $scope.event = [];

    $scope.submitForm =  function(form){
        $scope.event.push(angular.copy(form));
        console.log($scope.event);
    }
})
