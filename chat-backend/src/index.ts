import express from "express";
import dotenv from 'dotenv';

import './core/db';
import createRoutes from './core/routes';
import createSocket from './core/socket';

const app = express();
const server = require('http').Server(app);
const io = createSocket(server);

dotenv.config();

createRoutes(app, io);


server.listen(process.env.PORT, function () {
  console.log(`Server: http://localhost:${process.env.PORT}`);
});
