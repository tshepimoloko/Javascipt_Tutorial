var events = require('events');

// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent', function(mssg){
//   console.log(mssg);
// });
//
// myEmitter.emit('someEvent', 'the event was emitted');

var util = require('util');

var Person = function(name){
this.name = name;
};

//any person created to inherit the custom event property attached to set it
util.inherit(Person, events.EventEmitter);

//objects attached to each constructor Person
var tshepi = new Person('tshepi');
var jacqueline = new Person('jacqueline');
var moloko = new Person('moloko');

var people = [tshepi, jacqueline, moloko];//stored in an array

people.forEach(function(person){
  Person.on('speak', function(mssg){
    console.log(Person.name + 'said' + mssg);
  });
});
//call some events
tshepi.emit('speak', 'hey dudes');
