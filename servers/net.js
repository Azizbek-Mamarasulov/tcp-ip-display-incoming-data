const net = require("net");
const io = require("./socket.io");

const netServer = net.createServer();

netServer.on("connection", function (sock) {
  sock.on("data", function (data) {
    io.emit("msg", { data: data.toString(), date: new Date() });
  });
});

module.exports = netServer;
