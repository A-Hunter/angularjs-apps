angular.module('eventApp',['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/add-event',{
        templateUrl: 'add_event.html',
        controller: 'mainCtrl',
        controllerAs: 'eventCtrl'
    })
    .otherwise({redirectTo:'/'});
}]);
