const express = require("express");
var http = require("http");
const cors = require("cors");
// const { Socket } = require("socket.io");
const app = express();
const port = process.env.PORT || 5000;
var server = http.createServer(app);


//middelwere
app.use(express.json());
app.use(cors());


server.listen(port, () => {
  console.log("Server Started on port", port);
});
