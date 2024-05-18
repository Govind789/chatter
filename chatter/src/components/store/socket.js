import React from 'react';
import { io } from 'socket.io-client';
let origin;
console.log(process.env.NODE_ENV,"envvvvvv");
if( process.env.NODE_ENV === "production"){
    origin = "https://chatter-b.onrender.com/" 
  }
  else{
    origin = 'http://localhost:3000'
  }
export const socket = io.connect(origin);
export const SocketContext = React.createContext();
