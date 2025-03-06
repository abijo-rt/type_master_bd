// import { activeRoom } from "../config/socketio"
const { getRoom , log , setRoom } = require('../config/room');

module.exports.incrPlayer = (io,socker) => {

    socker.on("change player count" , ({incORdecr,roomid} , callback )=> {
        console.log("THIS IS CHANGE PLAYER" , incORdecr)
        console.log("THIS IS CHANGE PLAYER" , roomid)
        const room = getRoom(roomid);
        console.log(room)
        room.userLimit = incORdecr ? room.userLimit + 1 : room.userLimit - 1;
        setRoom(roomid, room);
        io.to(roomid).emit('player change',room.userLimit )
        callback(true)
    })

}