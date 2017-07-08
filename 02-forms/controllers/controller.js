angular.module('eventApp').controller('mainCtrl',['$scope','eventFactory', function($scope,eventFactory){
    $scope.event = eventFactory.getAllEvents();

    $scope.submitForm =  function(form){
        eventFactory.createEvent(angular.copy(form), $scope.event);
        console.log($scope.event);
    }
}])
