angular.module('eventApp').factory('eventFactory', function(){

    var eventFactory = {};

    var events =[]; // used for saving data even when changing the scope

    eventFactory.createEvent = function(event, eventList){
//        eventList.push(event); // used for saving data even when changing the scope
        events.push(event);
        eventList = events;
        return eventList;
    }

    eventFactory.getAllEvents = function(){
        return events;
    }
    return eventFactory;
})
