// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

// when you import a module it will envoke the code written in that file
require('./7-mind-grenade');

// sayHi('Susan');
// sayHi(names.john);
// sayHi(names.peter);
