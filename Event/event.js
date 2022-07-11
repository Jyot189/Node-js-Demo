// var fs=require("fs");
// var rs=fs.createReadStream('demo.txt');

// rs.on('open', function(){
//     console.log('file is open');
// })

//your event
var events=require('events');
var eventEmitter=new events.EventEmitter();

//create an event handler
var myEvent=function(){
    console.log('node js');
}

//assign the events handler to man event:
eventEmitter.on('anyname',myEvent); 

//fire the 'scream' event
eventEmitter.emit('anyname');