const net = require("net");
const { IP, PORT, nameInitials } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8");
  // print message when connected to server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  // sent name string to the server
  conn.on("connect", () => {
    conn.write(`Name: ${nameInitials}`);
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });

  // interpret incoming data as text
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;