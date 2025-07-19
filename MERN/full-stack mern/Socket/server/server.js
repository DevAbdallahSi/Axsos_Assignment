// server.js or index.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Allow both 3000 and 5173 (or just 5173 if only needed)
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173'], // 👈 your frontend port
    methods: ['GET', 'POST'],
  },
});

app.use(cors({
  origin: ['http://localhost:5173'],
}));

io.on('connection', (socket) => {
  console.log('✅ User connected:', socket.id);

  socket.on('send_message', (data) => {
    socket.broadcast.emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log('❌ User disconnected:', socket.id);
  });
});

server.listen(3001, () => {
  console.log('🚀 Server listening on port 3001');
});
