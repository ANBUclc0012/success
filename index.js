const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server)(server,{origins: '*:*'});

app.get('/', (req, res) => {
    console.log("oke");
});

io.on('connection', (socket) => {
    console.log("oke");
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});