var app = angular.module('myApp',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/about/:parm1',{
        template:'<h1>THIS IS A TEMPLATE</h1><br/><h3>This is an url param : {{input}} </h3>',
        controller: 'aboutCtrl'
    })
        .when('/contact/:parm1',{
        templateUrl:'views/contact.html',
        controller: 'contactCtrl'
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
