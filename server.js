console.log('Server file is executing.');


const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIO(server);


const PORT = process.env.PORT || 3000;

app.use(express.static('public'));


io.on('connection', (socket) => 
{
  console.log('User connected');

  // Handle events when a player moves
  socket.on('move', (data) => 
  {
    // Broadcast the move to all connected clients
    socket.broadcast.emit('move', data);
  });

  // Handle disconnection
  socket.on('disconnect', () => 
  {
    console.log('User disconnected');
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


















