const {  log ,setRoom , getRoom} = require('../config/room.js');
const { generateSentence } = require('../utils/generateSentence.js')

module.exports.gameStart = (io, socket) => {

    socket.on('start game', ( { roomid } , callback ) => {

        
        const sentence = generateSentence();
        const room = getRoom(roomid);
        room.status = 'started';
        setRoom(roomid , room)
        
        if(room.status === 'started'){
            console.log(room.status)
            io.to(roomid).emit('notify game start', sentence  );
            callback(true);
        }

        callback(false)

    });
};


module.exports.updateWpm = (io, socket) => {

    socket.on('update wpm', ( { correct , roomid }  ) => {

        const room = getRoom(roomid)
        console.log( " WPM :" + correct + " RoomID " + roomid  , socket.id );
        
        
        const updatedUsers = room.user.map(user =>
            user.id === socket.id ? { ...user, wpm: correct } : user
        );
        room.user = updatedUsers;
        
        console.log(room)
        console.log(updatedUsers)
        setRoom(roomid,room)
        socket.emit('player wpm',room.user)

    });
};