const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: "50542"
  });
  conn.setEncoding("utf8");
  // print message when connected to server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  // sent name string to the server
  conn.on("connect", () => {
    conn.write("Name: AHK");
  });

  // interpret incoming data as text
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;