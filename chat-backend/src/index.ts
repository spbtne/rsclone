import express from "express";
import dotenv from 'dotenv';

import './core/db';
import createRoutes from './core/routes'
dotenv.config();

const app = express();
const server = require('http').Server(app);
const useSocket = require('socket.io');
const io = useSocket(server,{cors:{origin:"*"}})

createRoutes(app);


io.on('connection', (socket: any) => {
  console.log('a user connected');
  socket.emit("test command", "some text");

  socket.on('console command', (msg:any) => {
    console.log('console text ' + msg)})
});

server.listen(process.env.PORT, function () {
  console.log(`Server: http://localhost:${process.env.PORT}`);
});
