angular.module('eventApp').controller('mainCtrl',['eventFactory', function(eventFactory){
    this.event = eventFactory.getAllEvents();

    this.submitForm =  function(form){
        eventFactory.createEvent(angular.copy(form), this.event);
        console.log(this.event);
    }
}])
