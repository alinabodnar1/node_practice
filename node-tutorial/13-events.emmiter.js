const EventEmitter = require('events');

const customEmmitter = new EventEmitter();

// First we listen the event with "on" and then we "emit" it, not vice-versa

customEmmitter.on('response', (name, id) => {   // response - name of the event
  console.log(`data received user ${name} with id: ${id}`);         // register event
})

customEmmitter.on('response', () => {   // response - name of the event
  console.log("some other logic here");         // register event
})


 // subscribe on event "response" - event is executing

customEmmitter.emit('response', 'alina', 37) 