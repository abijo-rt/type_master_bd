const createUniqueRoomId = require('../utils/generateRoomID');
const {  log ,setRoom , getRoom} = require('../config/room.js');

module.exports.createRoom = (io, socket) => {
    socket.on('create room', ( {host_name}, callback) => {

        const hostName = host_name
        const roomId = createUniqueRoomId();

        const room = {
                creator: hostName,
                userLimit: 5,
                user: [{ id: socket.id, name : hostName ,wpm : 0}],
                status: 'pending',
                timer: { min: 1, sec: 30 },
                roomId : roomId
            };

        setRoom(roomId,room)

        const roomDetils = {
            your_name: hostName,
            host: hostName,
            userLimit: 5,
            user: [{ id: socket.id, name: hostName , wpm : 0 }],
            status: 'pending',
            roomId: roomId,
            timer: { min: 1, sec: 30 },
        };

        socket.join(roomId);
        callback({ success: true, roomDetils: roomDetils });
        console.log(`Room created by user: ${hostName}, Room ID: ${roomId}`);
    });
};

