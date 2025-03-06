// Assuming activeRoom is a Map or similar structure
const { getRoom , log , setRoom } = require('../config/room');

const ROOM_FULL = 'room full';
const USER_JOINED = 'user joined';
const ROOM_NOT_FOUND = 'room not found';

module.exports = (io, socket) => {

    socket.on('join room', ({ inputValue , userName} , callback ) => {
        // Check if the room exists
        const roomid = inputValue
        console.log("THIS IS JOIN ROOM SOCKET");
        const room = getRoom(roomid);
        console.log(userName)

        if(room === undefined) callback({
            status: 'room not found' , room : {}
        })


        if(room.userLimit <= room.user.length) callback ({
            status: 'ROOM_FULL' , room : {}
        })

        const name = userName; // need to create function that gegnrate ranodem name

        room.user.push({id:socket.id , name , wpm : 0})
        setRoom(roomid,room)    
        socket.join(roomid)
        console.log("user==>",room.user)

        io.to(roomid).emit('player joined',{ room: room.user }  );
        callback({msg : 'PLAYER_JOINED' , room : room , name : name })


    });
};