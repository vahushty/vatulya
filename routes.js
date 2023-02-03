const express = require("express");
const app = express();
const host = "localhost";
const port = 8000;

let i = "Off";

app.get("/on", function (req, res) {
  res.writeHead(200);
  i = "On";
  res.end(`Power ${i}`);
});
app.get("/off", function (req, res) {
  res.writeHead(200);
  i = "Off";
  res.end(`Power ${i}`);
});
app.get("/status", function (req, res) {
  res.writeHead(200);
  res.end(`Power status = ${i}`);
});
const server = app.listen(port, host, function () {
  console.log(`Server is running on http://${host}:${port}`);
});
