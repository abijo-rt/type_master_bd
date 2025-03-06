const express = require('express');
const http = require('http');
const {createSocket} = require('./config/socketio');


const app = express()
const server = http.createServer(app)
const io = createSocket(server);


module.exports =  {app , server};