var app = angular.module('myApp',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/about',{
        templateUrl:'views/about.html'
    })
        .when('/contact',{
        templateUrl:'views/contact.html'
    }).otherwise({
        redirectTo:'/'
    })
}]);

app.factory('personService', function(){
    var person = {};
    person.printName = function(firstName, lastName){
        return firstName + ' ' + lastName;
    }
    return person;
});
