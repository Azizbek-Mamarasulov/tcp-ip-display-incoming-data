const http = require("http");
const express = require("express");

const app = express();
const httpServer = http.createServer(app);

app.use("/src", express.static(process.cwd() + "/src"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/src/index.html");
});

module.exports = httpServer;
