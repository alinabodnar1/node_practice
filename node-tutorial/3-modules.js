// modules ---------------------------------------------------
const names = require('./4-names'); // { john, peter }
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

// console.log(names); // { john: 'John', peter: 'Peter' }

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);