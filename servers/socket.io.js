const httpServer = require("./http");

const { Server } = require("socket.io");

const io = new Server(httpServer);

module.exports = io;
