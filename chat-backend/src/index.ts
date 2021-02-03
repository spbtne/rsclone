import express from "express";
import dotenv from 'dotenv';


import createRoutes from './core/routes';
import createSocket from './core/socket';

const app = express();
const server = require('http').Server(app);
const io = createSocket(server);

dotenv.config();

createRoutes(app, io);

import mongoose from "mongoose";

const PORT = process.env.PORT || 3000

// mongoose.connect("mongodb://localhost:27017/chat", {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
// });

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://nikita:12345@cluster0.iu3mn.mongodb.net/chat',
      {
        
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
          useFindAndModify: false
        
      }
    )
    server.listen(process.env.PORT, function () {
      console.log(`Server works`);
    })
    
  } catch (e) {
    console.log(e)
  }
}

start()


