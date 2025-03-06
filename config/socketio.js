// src/config/socket.js
const socketIO = require('socket.io');
const {createRoom} = require('../socket/createRoom')
const {gameStart} = require('../socket/startGame')
const {updateWpm} = require('../socket/startGame')
const joinRoom = require('../socket/joinRoom')
const {incrPlayer} = require('../socket/PlayerLimitController')
// const activeRoom = new Map(); // Initialize immediately
// console.log("Socket config file: activeRoom initialized", activeRoom);

const createSocket = (server) => {
    const io = socketIO(server, {
        cors: {
            origin: '*',
        },
    });

    io.on('connection', (socket) => {
        console.log('A user connected: ' + socket.id);

        createRoom(io,socket);
        joinRoom(io,socket);
        incrPlayer(io,socket);
        gameStart(io,socket);
        updateWpm(io,socket);

        socket.on('disconnect', () => {
            console.log('User  disconnected: ' + socket.id);
            
        });

    });

    return io;
};

module.exports = { createSocket };