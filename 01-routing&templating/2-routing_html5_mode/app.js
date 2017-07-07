var app = angular.module('myApp',['ngRoute']);

app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
    $routeProvider
        .when('/about',{
        templateUrl:'views/about.html'
    })
        .when('/contact',{
        templateUrl:'views/contact.html'
    }).otherwise({
        redirectTo:'/'
    })
    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
}]);

app.factory('personService', function(){
    var person = {};
    person.printName = function(firstName, lastName){
        return firstName + ' ' + lastName;
    }
    return person;
});
