angular.module('eventApp').controller('mainCtrl',['eventFactory', function(eventFactory){
    this.event = eventFactory.getAllEvents();

    this.categories = [{id:1, name:'Music',group:'Primary'},
                       {id:2, name:'Cinema',group:'Primary'},
                       {id:3, name:'Video Games',group:'Secondary'},
                       {id:4, name:'Sport',group:'Secondary'},
                       {id:5, name:'Reading',group:'Secondary'}];

    this.submitForm =  function(form){
        eventFactory.createEvent(angular.copy(form), this.event);
        console.log(this.event);
    }
}])
