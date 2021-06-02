const connect = require('./client');
const setupInput = require('./input');
// establishes a connection with the game server
console.log("Connecting ...");
// setup interface to handle user input from stdin

const obj = connect();

connect();
setupInput(obj);

