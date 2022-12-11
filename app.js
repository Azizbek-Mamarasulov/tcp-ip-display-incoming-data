require("dotenv").config();
const NET_PORT = process.env.NET_PORT;
const HTTP_PORT = process.env.HTTP_PORT;

const netServer = require("./servers/net");
const httpServer = require("./servers/http");

netServer.listen(NET_PORT, () => {
  console.log(`NET server is running on port ${NET_PORT}`);
  httpServer.listen(HTTP_PORT, () => {
    console.log(`HTTP Server is running on port ${HTTP_PORT}`);
  });
});
